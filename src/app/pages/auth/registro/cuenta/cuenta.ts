import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegistroWizardService } from '../../../../core/services/registro-wizard';

@Component({
  selector: 'app-cuenta',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private wizard = inject(RegistroWizardService);

  formularioCuenta = this.fb.group(
    {
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [
  Validators.required,
  Validators.pattern(/^[0-9]{7,10}$/)
]],
      password: ['', [
  Validators.required,
  Validators.minLength(8),
  this.passwordSegura
]],
      confirmarPassword: ['', [Validators.required]],
      aceptarTerminos: [false, [Validators.requiredTrue]],
    },
    { validators: [this.passwordsCoinciden] }
  );

  passwordSegura(control: AbstractControl): ValidationErrors | null {
  const valor = control.value as string;

  if (!valor) return null;

  const tieneMayuscula = /[A-Z]/.test(valor);
  const tieneMinuscula = /[a-z]/.test(valor);
  const tieneNumero = /[0-9]/.test(valor);
  const tieneEspecial = /[!@#$%^&*(),.?":{}|<>_\-]/.test(valor);

  const esSegura =
    tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;

  return esSegura ? null : { passwordInsegura: true };
}

  // Validador de grupo: verifica que las contraseñas coincidan
  private passwordsCoinciden(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmar = group.get('confirmarPassword')?.value;

    if (password && confirmar && password !== confirmar) {
      return { passwordsNoCoinciden: true };
    }
    return null;
  }

continuar(): void {
  if (this.formularioCuenta.invalid) {
    this.formularioCuenta.markAllAsTouched();
    return;
  }

  const { nombreCompleto, email, telefono, password } =
    this.formularioCuenta.value;

  this.wizard.guardarDatosBasicos({
    nombreCompleto: nombreCompleto ?? '',
    email: email ?? '',
    telefono: telefono ?? '',
  });

  //  La contraseña vive solo en memoria durante el wizard.
  // NO se guarda en localStorage por seguridad.
  this.wizard.guardarPassword(password ?? '');

  this.router.navigate(['/auth/registro/perfil']);
}
}