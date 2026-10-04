import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { RegistroWizardService } from '../../../../core/services/registro-wizard';
import { Rol } from '../../../../core/models/rol.model';

interface OpcionRol {
  rol: Rol;
  emoji: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-perfil',
  imports: [RouterLink],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

  private wizard = inject(RegistroWizardService);
  private router = inject(Router);

  readonly opciones: OpcionRol[] = [
    {
      rol: 'productor',
      emoji: '🌱',
      titulo: 'Productor Rural',
      descripcion: 'Registra tus fincas, cultivos y productos en RURALL.',
    },
    {
      rol: 'logistica',
      emoji: '🚚',
      titulo: 'Distribución y Logística',
      descripcion: 'Gestiona tu operación y flota de vehículos.',
    },
    {
      rol: 'comprador',
      emoji: '🛒',
      titulo: 'Comprador',
      descripcion: 'Encuentra y compra productos directos del campo.',
    },
  ];

 seleccionarRol(rol: Rol): void {
  this.wizard.guardarRol(rol);

  if (rol === 'comprador') {
    this.router.navigate(['/auth/registro/comprador']);
  } else if (rol === 'productor') {
    this.router.navigate(['/auth/registro/productor']);
     } else if (rol === 'logistica') {
    this.router.navigate(['/auth/registro/logistica']);
  } else {
    this.router.navigate(['/auth/registro/completar']);
  }
}
}