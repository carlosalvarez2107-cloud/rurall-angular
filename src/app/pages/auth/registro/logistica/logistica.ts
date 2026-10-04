import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegistroWizardService } from '../../../../core/services/registro-wizard';
import { UsuariosRegistradosService } from '../../../../core/services/usuarios-registrados';
import { PerfilLogistica, UsuarioRegistrado } from '../../../../core/models/usuario.model';
import { DEPARTAMENTOS_COLOMBIA } from '../../../../core/data/departamentos';

@Component({
  selector: 'app-logistica',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './logistica.html',
  styleUrl: './logistica.css',
})
export class Logistica {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private wizard = inject(RegistroWizardService);
  private usuarios = inject(UsuariosRegistradosService);

  readonly departamentos = DEPARTAMENTOS_COLOMBIA;

  formularioLogistica = this.fb.group({
    tipoOperacion: ['', [Validators.required]],
    identificacion: ['', [Validators.required, Validators.pattern(/^[0-9]{6,15}$/)]],
    departamento: ['', [Validators.required]],
    municipio: ['', [Validators.required]],
    direccionOperacion: ['', [Validators.required, Validators.minLength(5)]],
  });

  finalizar(): void {
    if (this.formularioLogistica.invalid) {
      this.formularioLogistica.markAllAsTouched();
      return;
    }

    const {
      tipoOperacion,
      identificacion,
      departamento,
      municipio,
      direccionOperacion,
    } = this.formularioLogistica.value;

    const perfil: PerfilLogistica = {
      tipoOperacion: tipoOperacion ?? '',
      identificacion: identificacion ?? '',
      departamento: departamento ?? '',
      municipio: municipio ?? '',
      direccionOperacion: direccionOperacion ?? '',
    };

    this.wizard.guardarPerfilLogistica(perfil);

    if (!this.registrarCuenta()) {
      return;
    }

    this.router.navigate(['/auth/registro/confirmacion']);
  }

  private registrarCuenta(): boolean {
    const borrador = this.wizard.borrador();
    const rol = this.wizard.rol();
    const perfil = this.wizard.perfilLogistica();
    const password = this.wizard.passwordTemporal();

    if (!borrador.nombreCompleto || !borrador.email || !borrador.telefono ||
        !rol || !perfil || !password) {
      return false;
    }

    const usuario: UsuarioRegistrado = {
      nombreCompleto: borrador.nombreCompleto,
      email: borrador.email,
      telefono: borrador.telefono,
      rol,
      perfilLogistica: perfil,
      passwordOfuscado: this.usuarios.ofuscar(password),
    };

    const resultado = this.usuarios.registrar(usuario);
    return resultado.exito;
  }
}