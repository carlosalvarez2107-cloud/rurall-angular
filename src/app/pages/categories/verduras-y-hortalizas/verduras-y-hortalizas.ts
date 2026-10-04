import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-verduras-y-hortalizas',
  styleUrl: './verduras-y-hortalizas.css',
  templateUrl: './verduras-y-hortalizas.html',
})
export class VerdurasYHortalizas {
  fincas = [

  {
    nombre: 'lindatierra Ltda.',
    ubicacion: 'moñitos, Córdoba',
    puntuacion: 4.9,
    imagen: 'https://images.unsplash.com/photo-1703589535874-4fbb03d93479?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },

  {
    nombre: 'finca la esperanza',
    ubicacion: 'rionegro, Antioquia',
    puntuacion: 4.8,
    imagen: 'https://jiffygroup.com/es/wp-content/uploads/2023/10/img-e0071_715cd8cc09eb2dee62939b5f1a444eee_2000.JPG'
  },

  {
    nombre: 'Finca La cosecha',
    ubicacion: 'nariño, Pasto',
    puntuacion: 4.6,
    imagen: 'https://plus.unsplash.com/premium_photo-1661902195336-996462e0d1d6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlJTIwZmllbGR8ZW58MHx8MHx8fDA%3D'
  },

  {
    nombre: 'la huerta de mi abuelo',
    ubicacion: 'Valle del Cauca',
    puntuacion: 4.4,
    imagen: 'https://images.unsplash.com/photo-1755253351931-c0f7f0e44d21?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }

  ];
}