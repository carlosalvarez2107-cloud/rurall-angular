import { Injectable, signal, effect } from '@angular/core';
import {
  BorradorRegistro,
  PerfilComprador,
  PerfilProductor,
  PerfilLogistica,
} from '../models/usuario.model';
import { Rol } from '../models/rol.model';

const STORAGE_KEY_BORRADOR = 'rurall_wizard_borrador';
const STORAGE_KEY_ROL = 'rurall_wizard_rol';
const STORAGE_KEY_PERFIL_COMPRADOR = 'rurall_wizard_perfil_comprador';
const STORAGE_KEY_PERFIL_PRODUCTOR = 'rurall_wizard_perfil_productor';
const STORAGE_KEY_PERFIL_LOGISTICA = 'rurall_wizard_perfil_logistica';

@Injectable({ providedIn: 'root' })
export class RegistroWizardService {

  private borradorSignal = signal<BorradorRegistro>(this.cargarBorrador());
  private rolSignal = signal<Rol | null>(this.cargarRol());
  private perfilCompradorSignal = signal<PerfilComprador | null>(this.cargarPerfilComprador());
  private perfilProductorSignal = signal<PerfilProductor | null>(this.cargarPerfilProductor());
  private perfilLogisticaSignal = signal<PerfilLogistica | null>(this.cargarPerfilLogistica());
  // ⚠️ Solo en memoria, NO se persiste. Contraseña del registro en curso.
  private passwordTemporalSignal = signal<string | null>(null);

  readonly borrador = this.borradorSignal.asReadonly();
  readonly rol = this.rolSignal.asReadonly();
  readonly perfilComprador = this.perfilCompradorSignal.asReadonly();
  readonly perfilProductor = this.perfilProductorSignal.asReadonly();
  readonly perfilLogistica = this.perfilLogisticaSignal.asReadonly();
  readonly passwordTemporal = this.passwordTemporalSignal.asReadonly();

  constructor() {
    effect(() => {
      localStorage.setItem(
        STORAGE_KEY_BORRADOR,
        JSON.stringify(this.borradorSignal())
      );
    });

    effect(() => {
      const rol = this.rolSignal();
      if (rol) {
        localStorage.setItem(STORAGE_KEY_ROL, rol);
      } else {
        localStorage.removeItem(STORAGE_KEY_ROL);
      }
    });

    effect(() => {
      const perfil = this.perfilCompradorSignal();
      if (perfil) {
        localStorage.setItem(STORAGE_KEY_PERFIL_COMPRADOR, JSON.stringify(perfil));
      } else {
        localStorage.removeItem(STORAGE_KEY_PERFIL_COMPRADOR);
      }
    });

    effect(() => {
      const perfil = this.perfilProductorSignal();
      if (perfil) {
        localStorage.setItem(STORAGE_KEY_PERFIL_PRODUCTOR, JSON.stringify(perfil));
      } else {
        localStorage.removeItem(STORAGE_KEY_PERFIL_PRODUCTOR);
      }
    });

    effect(() => {
      const perfil = this.perfilLogisticaSignal();
      if (perfil) {
        localStorage.setItem(STORAGE_KEY_PERFIL_LOGISTICA, JSON.stringify(perfil));
      } else {
        localStorage.removeItem(STORAGE_KEY_PERFIL_LOGISTICA);
      }
    });
  }

  guardarDatosBasicos(datos: BorradorRegistro): void {
    this.borradorSignal.update(actual => ({ ...actual, ...datos }));
  }

  guardarRol(rol: Rol): void {
    this.rolSignal.set(rol);
  }

  guardarPerfilComprador(datos: PerfilComprador): void {
    this.perfilCompradorSignal.set(datos);
  }

  guardarPerfilProductor(datos: PerfilProductor): void {
    this.perfilProductorSignal.set(datos);
  }

  guardarPerfilLogistica(datos: PerfilLogistica): void {
    this.perfilLogisticaSignal.set(datos);
  }

  guardarPassword(password: string): void {
    this.passwordTemporalSignal.set(password);
  }

  reiniciar(): void {
    this.borradorSignal.set({});
    this.rolSignal.set(null);
    this.perfilCompradorSignal.set(null);
    this.perfilProductorSignal.set(null);
    this.perfilLogisticaSignal.set(null);
    this.passwordTemporalSignal.set(null);

    localStorage.removeItem(STORAGE_KEY_BORRADOR);
    localStorage.removeItem(STORAGE_KEY_ROL);
    localStorage.removeItem(STORAGE_KEY_PERFIL_COMPRADOR);
    localStorage.removeItem(STORAGE_KEY_PERFIL_PRODUCTOR);
    localStorage.removeItem(STORAGE_KEY_PERFIL_LOGISTICA);
  }

  // --- Carga desde localStorage ---

  private cargarBorrador(): BorradorRegistro {
    const raw = localStorage.getItem(STORAGE_KEY_BORRADOR);
    if (!raw) return {};
    try {
      return JSON.parse(raw) as BorradorRegistro;
    } catch {
      return {};
    }
  }

  private cargarRol(): Rol | null {
    const raw = localStorage.getItem(STORAGE_KEY_ROL);
    if (!raw) return null;

    const rolesValidos: Rol[] = ['productor', 'logistica', 'comprador'];
    return rolesValidos.includes(raw as Rol) ? (raw as Rol) : null;
  }

  private cargarPerfilComprador(): PerfilComprador | null {
    const raw = localStorage.getItem(STORAGE_KEY_PERFIL_COMPRADOR);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as PerfilComprador;
    } catch {
      return null;
    }
  }

  private cargarPerfilProductor(): PerfilProductor | null {
    const raw = localStorage.getItem(STORAGE_KEY_PERFIL_PRODUCTOR);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as PerfilProductor;
    } catch {
      return null;
    }
  }

  private cargarPerfilLogistica(): PerfilLogistica | null {
    const raw = localStorage.getItem(STORAGE_KEY_PERFIL_LOGISTICA);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as PerfilLogistica;
    } catch {
      return null;
    }
  }
}