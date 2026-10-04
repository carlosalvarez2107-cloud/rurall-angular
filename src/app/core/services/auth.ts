import { Injectable, signal, effect } from '@angular/core';
import { SesionActiva, UsuarioRegistrado } from '../models/usuario.model';
import { UsuariosRegistradosService } from './usuarios-registrados';

const STORAGE_KEY_SESION = 'rurall_sesion_activa';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private sesionSignal = signal<SesionActiva | null>(this.cargarSesion());

  readonly sesion = this.sesionSignal.asReadonly();

  constructor(private usuarios: UsuariosRegistradosService) {
    // Persistencia automática de la sesión
    effect(() => {
      const sesion = this.sesionSignal();
      if (sesion) {
        localStorage.setItem(STORAGE_KEY_SESION, JSON.stringify(sesion));
      } else {
        localStorage.removeItem(STORAGE_KEY_SESION);
      }
    });
  }

  /** Intenta iniciar sesión. Devuelve el resultado. */
  login(email: string, password: string): { exito: boolean; mensaje?: string } {
    const usuario = this.usuarios.verificarCredenciales(email, password);

    if (!usuario) {
      return {
        exito: false,
        mensaje: 'Correo o contraseña incorrectos.',
      };
    }

    this.sesionSignal.set(this.convertirASesion(usuario));
    return { exito: true };
  }

  /** Cierra la sesión actual. */
  logout(): void {
    this.sesionSignal.set(null);
  }

  /** ¿Hay usuario logueado? */
  estaLogueado(): boolean {
    return this.sesionSignal() !== null;
  }

  // --- Métodos privados ---

  private convertirASesion(usuario: UsuarioRegistrado): SesionActiva {
    return {
      nombreCompleto: usuario.nombreCompleto,
      email: usuario.email,
      rol: usuario.rol,
    };
  }

  private cargarSesion(): SesionActiva | null {
    const raw = localStorage.getItem(STORAGE_KEY_SESION);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as SesionActiva;
    } catch {
      return null;
    }
  }
}