import { Rol } from './rol.model';

// Datos básicos que todo usuario tiene al crear cuenta
export interface UsuarioBase {
  nombreCompleto: string;
  email: string;
  telefono: string;
  rol: Rol;
}

// Borrador del registro (lo que se va llenando paso a paso)
export interface BorradorRegistro {
  // Paso 1: datos básicos
  nombreCompleto?: string;
  email?: string;
  telefono?: string;
  // password NO se guarda aquí por seguridad (se maneja en el form)
}

// Perfil específico de comprador //
export interface PerfilComprador {
  ciudad: string;
  direccionEntrega: string;
  telefonoRespaldo1?: string;
  telefonoRespaldo2?: string;
}

// Perfil específico del rol Productor (v1: solo datos básicos)
export interface PerfilProductor {
  tipoProductor: string;
  identificacion: string;
  departamento: string;
  municipio: string;
  vereda: string;
}
// Usuario completo, tal como queda guardado tras el registro.
// Equivale al registro que tendría el backend en su base de datos.
export interface UsuarioRegistrado {
  nombreCompleto: string;
  email: string;
  telefono: string;
  rol: Rol;
  perfilComprador?: PerfilComprador;
  perfilProductor?: PerfilProductor;
  perfilLogistica?: PerfilLogistica;
  // SOLO SIMULACIÓN: password ofuscado en base64.
  // En producción NUNCA se guarda el password en el cliente.
  passwordOfuscado: string;
}

// Datos mínimos que representan la sesión activa.
// Lo que el navbar y otras partes de la app necesitan saber del usuario logueado.
export interface SesionActiva {
  nombreCompleto: string;
  email: string;
  rol: Rol;
}

// Perfil específico del rol Logística (v1: sin sub-tipos, sin vehículos)
export interface PerfilLogistica {
  tipoOperacion: string;
  identificacion: string;
  departamento: string;
  municipio: string;
  direccionOperacion: string;
}