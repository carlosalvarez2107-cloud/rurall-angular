import { Component, signal, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { PRODUCTOS } from '../../core/data/productos';
import { Producto } from '../../core/models/producto.model';
import { AuthService } from '../../core/services/auth';
import { CarritoService } from '../../core/services/carrito';
import { CarritoWidget } from '../../components/carrito-widget/carrito-widget';

@Component({
  selector: 'app-productos',
  imports: [CurrencyPipe, CarritoWidget],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  private auth = inject(AuthService);
  private carrito = inject(CarritoService);
  private router = inject(Router);

  authService = this.auth;
  carritoService = this.carrito;

  readonly productos: Producto[] = PRODUCTOS;

  readonly terminoBusqueda = signal('');

  readonly productosFiltrados = computed(() => {
    const termino = this.normalizar(this.terminoBusqueda());
    if (!termino) return this.productos;

    return this.productos.filter(p =>
      this.normalizar(p.nombre).includes(termino) ||
      this.normalizar(p.ubicacion).includes(termino) ||
      this.normalizar(p.finca).includes(termino)
    );
  });

  actualizarTermino(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.terminoBusqueda.set(valor);
  }

  limpiarBusqueda(): void {
    this.terminoBusqueda.set('');
  }

  agregarAlCarrito(producto: Producto): void {
    if (!this.auth.estaLogueado()) {
      this.router.navigate(['/auth/login']);
      return;
    }
    this.carrito.agregar(producto.id);
  }

  private normalizar(texto: string): string {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}