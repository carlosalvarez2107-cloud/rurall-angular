import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserMenu } from '../user-menu/user-menu';
import { AuthService } from '../../core/services/auth';

@Component({
  imports: [RouterLink, UserMenu],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  private auth = inject(AuthService);

  // Expuesto al template para el @if condicional
  authService = this.auth;

  @ViewChild('categoriaNavegacion') categoriaNavegacion!: ElementRef;

  categoriasAbiertas = false;

  alternarCategorias(): void {
    this.categoriasAbiertas = !this.categoriasAbiertas;
  }

  @HostListener('document:click', ['$event'])
  cerrarCategorias(event: MouseEvent): void {
    if (
      this.categoriasAbiertas &&
      !this.categoriaNavegacion.nativeElement.contains(event.target)
    ) {
      this.categoriasAbiertas = false;
    }
  }
}