import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css',
})
export class UserMenu {

  private auth = inject(AuthService);
  private router = inject(Router);

  @ViewChild('menuRef') menuRef!: ElementRef;

  menuAbierto = false;

  // Exponemos el servicio al template (lo usamos para leer la sesión)
  authService = this.auth;

  get iniciales(): string {
    const sesion = this.auth.sesion();
    if (!sesion) return '';

    const partes = sesion.nombreCompleto.trim().split(/\s+/);
    if (partes.length === 1) {
      return partes[0][0].toUpperCase();
    }
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  }

  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  cerrarSesion(): void {
    this.auth.logout();
    this.menuAbierto = false;
    this.router.navigate(['/auth/login']);
  }

  @HostListener('document:click', ['$event'])
  cerrarAlClickAfuera(event: MouseEvent): void {
    if (
      this.menuAbierto &&
      !this.menuRef.nativeElement.contains(event.target)
    ) {
      this.menuAbierto = false;
    }
  }
}