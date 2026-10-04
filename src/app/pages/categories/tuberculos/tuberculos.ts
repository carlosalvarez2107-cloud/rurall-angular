import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tuberculos',
  styleUrl: './tuberculos.css',
  templateUrl: './tuberculos.html',
})
export class Tuberculos {
   fincas = [

  {
    nombre: 'Raíces Boyacenses Ltda.',
    ubicacion: 'Boyacá',
    puntuacion: 4.9,
    imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef'
  },

  {
    nombre: 'Finca Campo Ancestral',
    ubicacion: 'Cundinamarca',
    puntuacion: 4.8,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9MlBdWVWCfx0H3rHvFO6Fh68aZoy81NtAt_lVfzm_7T92UNxa3YDn7JE&s=10'
  },

  {
    nombre: 'Finca La Abundancia S.A.S.',
    ubicacion: 'Santander',
    puntuacion: 4.6,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWmOuRMkJNQesg0Y_1bkh555W2Y6yHez534bVocYAGhAxgL0mRAd1wLo&s=10'
  },

  {
    nombre: 'Finca Raíz Dorada',
    ubicacion: 'tumaco',
    puntuacion: 4.4,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrXhenr8y8tUAC-gcul3DtyH56x3FC0fTqMPIyRzdTy14GTi2n60Iqew&s=10'
  }

];
}
