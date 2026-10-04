import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [RouterOutlet,],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  
  private router = inject(Router);

 get pasoActual(): number {
  const url = this.router.url;

  if (
    url.includes('/comprador') ||
    url.includes('/productor') ||
    url.includes('/logistica') ||
    url.includes('/confirmacion')
  ) {
    return 3;
  }
  if (url.includes('/perfil')) {
    return 2;
  }
  return 1;
}

}