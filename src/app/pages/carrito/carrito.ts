import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CarritoService } from '../../core/services/carrito';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {

  private carrito = inject(CarritoService);

  // Expuestos al template
  carritoService = this.carrito;

  // Signal para mostrar el mensaje "Próximamente"
  mostrarMensaje = signal(false);

  aumentar(productoId: number, cantidadActual: number): void {
    this.carrito.cambiarCantidad(productoId, cantidadActual + 1);
  }

  disminuir(productoId: number, cantidadActual: number): void {
    this.carrito.cambiarCantidad(productoId, cantidadActual - 1);
  }

  eliminar(productoId: number): void {
    this.carrito.eliminar(productoId);
  }

  continuarPedido(): void {
    this.mostrarMensaje.set(true);
  }
}