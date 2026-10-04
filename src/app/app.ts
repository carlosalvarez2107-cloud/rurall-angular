import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MenuLateral } from './components/menu-lateral/menu-lateral';
import { Ayuda } from './components/ayuda/ayuda';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Header, MenuLateral, Ayuda, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private router = inject(Router);

  get esRutaAuth(): boolean {
    return this.router.url.startsWith('/auth');
  }
}