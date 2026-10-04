import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-carnes',
  styleUrl: './carnes.css',
  templateUrl: './carnes.html',
})
export class Carnes {
  fincas = [
 {
    nombre: 'Hacienda Valles de la Abundancia.',
    ubicacion: 'Antioquia',
    puntuacion: 4.9,
    imagen: 'https://tse1.mm.bing.net/th/id/OIP.cqONsX6zH9JtVTc9KHByEwHaD8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },

  {
    nombre: 'Hacienda el SENA',
    ubicacion: 'Cundinamarca',
    puntuacion: 4.8,
    imagen: 'https://tse1.explicit.bing.net/th/id/OIP.BMRiZ0UaziJBxr-orAKpEQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },

  {
    nombre: 'Finca La Esperanza',
    ubicacion: 'Santander',
    puntuacion: 4.6,
    imagen: 'https://www.elfinancierocr.com/resizer/wHKH7JoS_O9TEMpp6lhgN82S9hE=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/4WALFQBNRVHIDFGX4UQVTBOFUI.jpg'
  },

  {
    nombre: 'Finca Praderas & Corrales',
    ubicacion: 'Valle del Cauca',
    puntuacion: 4.4,
    imagen: 'https://imperioagroganadero.com.ar/wp-content/uploads/2025/09/carnes-6.jpg'
  }
  ]
};