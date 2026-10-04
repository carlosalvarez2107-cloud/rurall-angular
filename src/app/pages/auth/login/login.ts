import { Component, inject, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  mostrarPassword = false;

  // Signal con el mensaje de error (null = sin error)
  errorMensaje = signal<string | null>(null);

  formularioLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    recordarme: [false],
  });

  togglePassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  iniciarSesion(): void {
    this.errorMensaje.set(null);

    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    const { email, password } = this.formularioLogin.value;

    const resultado = this.auth.login(email ?? '', password ?? '');

    if (!resultado.exito) {
      this.errorMensaje.set(resultado.mensaje ?? 'No pudimos iniciar sesión.');
      return;
    }

    // Login exitoso → navegar al inicio
    this.router.navigate(['/']);
  }
}