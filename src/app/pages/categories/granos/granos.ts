import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-granos',
  styleUrl: './granos.css',
  templateUrl: './granos.html',
})
export class Granos {
   fincas = [

  {
    nombre: 'CerealesColombia Ltda.',
    ubicacion: 'leticia, Amazonas',
    puntuacion: 4.9,
    imagen: 'https://cache1.24chasa.bg/Images/cache/184/Image_6759184_811_0.jpg'
  },

  {
    nombre: 'Nuevo Horizonte SAS',
    ubicacion: 'Cundinamarca',
    puntuacion: 4.8,
    imagen: 'https://thumbs.dreamstime.com/b/rustic-still-life-celebration-legumes-cereals-urban-exploration-food-photography-featuring-peas-lentils-barley-377848310.jpg'
  },

  {
    nombre: 'Finca EL CIELO',
    ubicacion: 'bello, Antioquia',
    puntuacion: 4.6,
    imagen: 'https://media.istockphoto.com/id/668076794/es/foto/retrato-de-una-familia-colombiana-de-los-agricultores-en-el-campo.jpg?s=612x612&w=0&k=20&c=T8GfdXQR8WtMPSzQhUDDeXVAqOqwsERdXOyf-x4N6rY='
  },

  {
    nombre: 'Granos El Portal',
    ubicacion: 'Tolima',
    puntuacion: 4.4,
    imagen: 'https://tse1.mm.bing.net/th/id/OIP.2E9hVQzJo1KKX0MhIOjdGwHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3'
  }

];
}
