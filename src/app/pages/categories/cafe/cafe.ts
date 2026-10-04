import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cafe',
  styleUrl: './cafe.css',
  templateUrl: './cafe.html',
})
export class Cafe {
  fincas = [

  {
    nombre: 'Finca Aroma de la Montaña.',
    ubicacion: 'Antioquia',
    puntuacion: 4.9,
    imagen: 'https://natura.org.co/wp-content/uploads/2025/10/Transformacion-de-cacao-una-tradicion-en-las-familias-de-Santander-Fudnacion-natura-1.webp'
  },

  {
    nombre: 'Finca El Tostadero',
    ubicacion: 'manizales',
    puntuacion: 4.8,
    imagen: 'https://apasionadosporelcafe.com/wp-content/uploads/2022/11/Bebida-favorita-destacada.jpg'
  },

  {
    nombre: 'Finca Herencia Campesina',
    ubicacion: 'Santander',
    puntuacion: 4.6,
    imagen: 'https://i.pinimg.com/736x/67/a1/d0/67a1d0a8e4107690ea8894f04be2dfcf.jpg'
  },

  {
    nombre: 'Finca Cacao & Cosecha',
    ubicacion: 'Valle del Cauca',
    puntuacion: 4.4,
    imagen: 'https://www.shutterstock.com/image-photo/gorontalo-may-1-2019-farmers-260nw-1727127367.jpg'
  }

];
}


