import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  imports: [RouterLink],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  private auth = inject(AuthService);

  // Expuesto al template para el @if condicional
  authService = this.auth;
}