import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegistroWizardService } from '../../../../core/services/registro-wizard';

@Component({
  selector: 'app-confirmacion',
  imports: [RouterLink],
  templateUrl: './confirmacion.html',
  styleUrl: './confirmacion.css',
})
export class Confirmacion {

  // Se limpia el wizard automáticamente al entrar aquí
  constructor() {
    inject(RegistroWizardService).reiniciar();
  }
}