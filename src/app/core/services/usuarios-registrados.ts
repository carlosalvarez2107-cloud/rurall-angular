import { Injectable } from '@angular/core';
import { UsuarioRegistrado } from '../models/usuario.model';

const STORAGE_KEY_USUARIOS = 'rurall_usuarios_registrados';

/**
 *  SIMULACIÓN DE BACKEND — NO USAR EN PRODUCCIÓN
 *
 * Este servicio guarda usuarios en localStorage para que se pueda
 * probar el flujo completo de registro + login sin backend.
 *
 * En producción:
 * - El password NUNCA se guarda en el cliente.
 * - La verificación ocurre en el servidor con hashing (bcrypt, argon2).
 * - El cliente solo recibe un token (JWT) para la sesión.
 *
 * Cuando llegue el backend, este servicio se ELIMINA.
 */
@Injectable({ providedIn: 'root' })
export class UsuariosRegistradosService {

  // --- API pública ---

  /** Registra un usuario nuevo. Falla si el email ya existe. */
  registrar(usuario: UsuarioRegistrado): { exito: boolean; mensaje?: string } {
    if (this.buscarPorEmail(usuario.email)) {
      return { exito: false, mensaje: 'El correo ya está registrado.' };
    }

    const usuarios = this.leerTodos();
    usuarios.push(usuario);
    this.guardarTodos(usuarios);

    return { exito: true };
  }

  /** Busca un usuario por email. Devuelve null si no existe. */
  buscarPorEmail(email: string): UsuarioRegistrado | null {
    const usuarios = this.leerTodos();
    const normalizado = email.trim().toLowerCase();

    return usuarios.find(u => u.email.toLowerCase() === normalizado) ?? null;
  }

  /** Verifica credenciales. Devuelve el usuario si coinciden, null si no. */
  verificarCredenciales(email: string, password: string): UsuarioRegistrado | null {
    const usuario = this.buscarPorEmail(email);
    if (!usuario) return null;

    //  Comparación simulada. En backend se usa bcrypt.compare().
    if (this.desencriptar(usuario.passwordOfuscado) === password) {
      return usuario;
    }
    return null;
  }

  /** Ofusca un texto (base64). NO ES SEGURIDAD REAL. */
  ofuscar(texto: string): string {
    return btoa(texto);
  }

  // --- Métodos privados ---

  private desencriptar(textoOfuscado: string): string {
    try {
      return atob(textoOfuscado);
    } catch {
      return '';
    }
  }

  private leerTodos(): UsuarioRegistrado[] {
    const raw = localStorage.getItem(STORAGE_KEY_USUARIOS);
    if (!raw) return [];

    try {
      const datos = JSON.parse(raw);
      return Array.isArray(datos) ? (datos as UsuarioRegistrado[]) : [];
    } catch {
      return [];
    }
  }

  private guardarTodos(usuarios: UsuarioRegistrado[]): void {
    localStorage.setItem(STORAGE_KEY_USUARIOS, JSON.stringify(usuarios));
  }
}