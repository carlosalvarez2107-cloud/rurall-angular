import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth';
import { PRODUCTOS } from '../data/productos';
import { Producto } from '../models/producto.model';

// Lo que guarda el carrito: solo id y cantidad  //
export interface ItemCarrito {
  id: number;
  cantidad: number;
}

// Item enriquecido: producto + cantidad (para mostrar en la página)
export interface ItemCarritoCompleto {
  producto: Producto;
  cantidad: number;
  subtotal: number;
}

const STORAGE_PREFIX = 'rurall_carrito_';

@Injectable({ providedIn: 'root' })
export class CarritoService {

  private auth = inject(AuthService);

  // Signal interno del carrito
  private itemsSignal = signal<ItemCarrito[]>([]);

  // Lectura pública
  readonly items = this.itemsSignal.asReadonly();

  // Total de unidades (para el badge)
  readonly totalUnidades = computed(() =>
    this.itemsSignal().reduce((suma, item) => suma + item.cantidad, 0)
  );

  // Lista enriquecida con producto completo + subtotal
  readonly itemsCompletos = computed<ItemCarritoCompleto[]>(() => {
    return this.itemsSignal()
      .map(item => {
        const producto = PRODUCTOS.find(p => p.id === item.id);
        if (!producto) return null;

        return {
          producto,
          cantidad: item.cantidad,
          subtotal: producto.precio * item.cantidad,
        };
      })
      .filter((item): item is ItemCarritoCompleto => item !== null);
  });

  // Subtotal en dinero
  readonly subtotal = computed(() =>
    this.itemsCompletos().reduce((suma, item) => suma + item.subtotal, 0)
  );

  constructor() {
    // Cuando cambia el usuario logueado, se recarga el carrito
    effect(() => {
      const sesion = this.auth.sesion();
      if (!sesion) {
        this.itemsSignal.set([]);
        return;
      }
      this.itemsSignal.set(this.cargarCarrito(sesion.email));
    });

    // Cuando el carrito cambia, se persiste
    effect(() => {
      const sesion = this.auth.sesion();
      if (!sesion) return;

      const items = this.itemsSignal();
      const key = STORAGE_PREFIX + sesion.email;

      if (items.length === 0) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(items));
      }
    });
  }

  /**
   * Agrega un producto al carrito. Si ya existe, incrementa la cantidad.
   */
  agregar(productoId: number): void {
    this.itemsSignal.update(items => {
      const existente = items.find(i => i.id === productoId);

      if (existente) {
        return items.map(i =>
          i.id === productoId
            ? { ...i, cantidad: i.cantidad + 1 }
            : i
        );
      }

      return [...items, { id: productoId, cantidad: 1 }];
    });
  }

  /**
   * Cambia la cantidad de un producto. Si la cantidad es 0 o menos, lo elimina.
   */
  cambiarCantidad(productoId: number, cantidad: number): void {
    if (cantidad <= 0) {
      this.eliminar(productoId);
      return;
    }

    this.itemsSignal.update(items =>
      items.map(i =>
        i.id === productoId ? { ...i, cantidad } : i
      )
    );
  }

  /**
   * Elimina un producto del carrito.
   */
  eliminar(productoId: number): void {
    this.itemsSignal.update(items =>
      items.filter(i => i.id !== productoId)
    );
  }

  /**
   * Vacía el carrito por completo.
   */
  vaciar(): void {
    this.itemsSignal.set([]);
  }

  // --- Persistencia ---

  private cargarCarrito(email: string): ItemCarrito[] {
    const raw = localStorage.getItem(STORAGE_PREFIX + email);
    if (!raw) return [];

    try {
      const datos = JSON.parse(raw);
      return Array.isArray(datos) ? (datos as ItemCarrito[]) : [];
    } catch {
      return [];
    }
  }
}