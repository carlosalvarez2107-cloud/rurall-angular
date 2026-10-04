import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegistroWizardService } from '../../../../core/services/registro-wizard';
import { UsuariosRegistradosService } from '../../../../core/services/usuarios-registrados';
import {PerfilProductor,UsuarioRegistrado,} from '../../../../core/models/usuario.model';
import { DEPARTAMENTOS_COLOMBIA } from '../../../../core/data/departamentos';

@Component({
  selector: 'app-productor',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './productor.html',
  styleUrl: './productor.css',
})
export class Productor {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private wizard = inject(RegistroWizardService);
  private usuarios = inject(UsuariosRegistradosService);
  readonly departamentos = DEPARTAMENTOS_COLOMBIA;

  formularioProductor = this.fb.group({
    tipoProductor: ['', [Validators.required]],
    identificacion: ['', [Validators.required, Validators.pattern(/^[0-9]{6,12}$/)]],
    departamento: ['', [Validators.required]],
    municipio: ['', [Validators.required]],
    vereda: ['', [Validators.required]],
  });

 finalizar(): void {
  if (this.formularioProductor.invalid) {
    this.formularioProductor.markAllAsTouched();
    return;
  }

  const { tipoProductor, identificacion, departamento, municipio, vereda } =
    this.formularioProductor.value;

  const perfil: PerfilProductor = {
    tipoProductor: tipoProductor ?? '',
    identificacion: identificacion ?? '',
    departamento: departamento ?? '',
    municipio: municipio ?? '',
    vereda: vereda ?? '',
  };

  this.wizard.guardarPerfilProductor(perfil);

  if (!this.registrarCuenta()) {
    return;
  }

  this.router.navigate(['/auth/registro/confirmacion']);
}

private registrarCuenta(): boolean {
  const borrador = this.wizard.borrador();
  const rol = this.wizard.rol();
  const perfil = this.wizard.perfilProductor();
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
    perfilProductor: perfil,
    passwordOfuscado: this.usuarios.ofuscar(password),
  };

  const resultado = this.usuarios.registrar(usuario);

  if (!resultado.exito) {
    return false;
  }

  return true;
}
}