import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-medicinales',
  styleUrl: './medicinales.css',
  templateUrl: './medicinales.html',
})
export class Medicinales {
  fincas = [
    {
    nombre: 'Finca Verde Remedio.',
    ubicacion: 'Bello, Antioquia',
    puntuacion: 4.9,
    imagen: 'https://elhorticultor.org/wp-content/uploads/2019/06/befunky-collage7.jpg'
  },

  {
    nombre: 'Finca La Botica del Campo',
    ubicacion: 'Cundinamarca',
    puntuacion: 4.8,
    imagen: 'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2020/08/herbs-spices-1024x683.jpg'
  },

  {
    nombre: 'Finca Esencia Vital',
    ubicacion: 'guasca, Cundinamarca',
    puntuacion: 4.6,
    imagen: 'https://tse3.mm.bing.net/th/id/OIP.qSZL_971ItlyQUbYkVus6AHaEq?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },

  {
    nombre: 'Finca El Huerto Aromático',
    ubicacion: 'Cota, Cundinamarca',
    puntuacion: 4.4,
    imagen: 'https://tse3.mm.bing.net/th/id/OIP.gww125k3_0Q25h4dCNERiQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  }

];}

