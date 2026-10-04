import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegistroWizardService } from '../../../../core/services/registro-wizard';

@Component({
  selector: 'app-completar',
  imports: [RouterLink],
  templateUrl: './completar.html',
  styleUrl: './completar.css',
})
export class Completar {

  private wizard = inject(RegistroWizardService);

  nombreRol(): string {
    const rol = this.wizard.rol();

    switch (rol) {
      case 'productor':
        return 'Productor';
      case 'logistica':
        return 'Distribución y Logística';
      default:
        return 'tu perfil';
    }
  }
}