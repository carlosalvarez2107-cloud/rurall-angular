import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegistroWizardService } from '../../../../core/services/registro-wizard';
import { UsuariosRegistradosService } from '../../../../core/services/usuarios-registrados';
import { PerfilComprador, UsuarioRegistrado } from '../../../../core/models/usuario.model';

@Component({
  selector: 'app-comprador',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './comprador.html',
  styleUrl: './comprador.css',
})
export class Comprador {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private wizard = inject(RegistroWizardService);
  private usuariosService = inject(UsuariosRegistradosService);

  formularioComprador = this.fb.group({
    ciudad: ['', [Validators.required]],
    direccionEntrega: ['', [Validators.required, Validators.minLength(5)]],
    telefonoRespaldo1: [''],
    telefonoRespaldo2: [''],
  });

finalizar(): void {
  if (this.formularioComprador.invalid) {
    this.formularioComprador.markAllAsTouched();
    return;
  }

  const { ciudad, direccionEntrega, telefonoRespaldo1, telefonoRespaldo2 } =
    this.formularioComprador.value;

  const perfil: PerfilComprador = {
    ciudad: ciudad ?? '',
    direccionEntrega: direccionEntrega ?? '',
    telefonoRespaldo1: telefonoRespaldo1 || undefined,
    telefonoRespaldo2: telefonoRespaldo2 || undefined,
  };

  this.wizard.guardarPerfilComprador(perfil);

  // Construye y registra la cuenta
  if (!this.registrarCuenta()) {
    return;
  }

  this.router.navigate(['/auth/registro/confirmacion']);
}

/**
 * Toma todos los datos del wizard, construye el usuario completo
 * y lo guarda en el "backend simulado".
 * Devuelve true si se registró, false si falló.
 */
private registrarCuenta(): boolean {
  const borrador = this.wizard.borrador();
  const rol = this.wizard.rol();
  const perfil = this.wizard.perfilComprador();
  const password = this.wizard.passwordTemporal();

  // Validación defensiva: si falta algo, no continuar
  if (!borrador.nombreCompleto || !borrador.email || !borrador.telefono ||
      !rol || !perfil || !password) {
    return false;
  }

  const usuario: UsuarioRegistrado = {
    nombreCompleto: borrador.nombreCompleto,
    email: borrador.email,
    telefono: borrador.telefono,
    rol,
    perfilComprador: perfil,
    passwordOfuscado: this.usuariosService.ofuscar(password),
  };

  const resultado = this.usuariosService.registrar(usuario);

  if (!resultado.exito) {
    // En este punto, no debería fallar.
    // Si llegara a fallar (por ejemplo, email duplicado por refresh),
    // sería un error de usuario y habría que manejarlo con un mensaje.
    return false;
  }

  return true;
}
}