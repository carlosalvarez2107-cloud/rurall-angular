import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lacteos-y-huevos',
  styleUrl: './lacteos-y-huevos.css',
  templateUrl: './lacteos-y-huevos.html',
})
export class LacteosYHuevos {
   fincas = [

  {
    nombre: 'Avícola Álvarez Ltda.',
    ubicacion: 'Montería, Córdoba',
    puntuacion: 4.9,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbI5iOlIgOs_pbX9sd-UGF9-okqAWGUX6X_mnmg9TUBOI_ZVMtvWazwc&s=10'
  },

  {
    nombre: 'Quesos y Lácteos De Colombia',
    ubicacion: 'Envigado, Antioquia',
    puntuacion: 4.8,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5P-scs2oxoWWgIXwifNhBQgAwUlDx-1OMyo6bipNeFe2Daw2ERYrfEp9&s=10'
  },

  {
    nombre: 'La Gallina Feliz',
    ubicacion: 'Santander',
    puntuacion: 4.6,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GiPraFzrQ-DUJRerF8yWd9U0LLerQhYxbDZWn42Li7oXCb7LqaxHVMNA&s=10'
  },

  {
    nombre: 'Huevos de Oro',
    ubicacion: 'Valle del Cauca',
    puntuacion: 4.4,
    imagen: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRKIspba1zi-nVKLyYQLLYAaJmAkQS8qAGXt2tbLb7KPsRjIU-8faHJfHHULBzYRVJn4UrDMB8ZMJhMOBmKahXrtlHo8guN20B4'
  }

];
}
