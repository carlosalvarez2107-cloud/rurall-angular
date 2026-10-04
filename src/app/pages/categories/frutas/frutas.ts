import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-frutas',
  styleUrl: './frutas.css',
  templateUrl: './frutas.html',
})
export class Frutas {
  fincas = [

  {
    nombre: 'Frutas Álvarez Ltda.',
    ubicacion: 'Antioquia',
    puntuacion: 4.9,
    imagen: 'https://images.pexels.com/photos/4965327/pexels-photo-4965327.jpeg'
  },

  {
    nombre: 'Frutícola El Paraíso',
    ubicacion: 'Cundinamarca',
    puntuacion: 4.8,
    imagen: 'https://images.pexels.com/photos/3963370/pexels-photo-3963370.jpeg'
  },

  {
    nombre: 'Finca La Esperanza',
    ubicacion: 'Santander',
    puntuacion: 4.6,
    imagen: 'https://images.pexels.com/photos/3963167/pexels-photo-3963167.jpeg'
  },

  {
    nombre: 'Frutas del Valle',
    ubicacion: 'Valle del Cauca',
    puntuacion: 4.4,
    imagen: 'https://images.pexels.com/photos/28903089/pexels-photo-28903089.jpeg'
  }

];}
