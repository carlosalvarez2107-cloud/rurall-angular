import { Component, ElementRef, HostListener, ViewChild, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CarritoService } from '../../core/services/carrito';

@Component({
  selector: 'app-carrito-widget',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './carrito-widget.html',
  styleUrl: './carrito-widget.css',
})
export class CarritoWidget {

  private carrito = inject(CarritoService);
  carritoService = this.carrito;

  @ViewChild('widgetRef') widgetRef!: ElementRef;

  panelAbierto = false;

  readonly itemsPreview = computed(() =>
    this.carrito.itemsCompletos().slice(0, 3)
  );

  readonly itemsRestantes = computed(() =>
    Math.max(0, this.carrito.itemsCompletos().length - 3)
  );

  alternarPanel(): void {
    this.panelAbierto = !this.panelAbierto;
  }

  @HostListener('document:click', ['$event'])
  cerrarAlClickAfuera(event: MouseEvent): void {
    if (
      this.panelAbierto &&
      !this.widgetRef.nativeElement.contains(event.target)
    ) {
      this.panelAbierto = false;
    }
  }
}