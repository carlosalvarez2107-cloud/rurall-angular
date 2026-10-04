import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pescados-y-productos-de-pesca',
  styleUrl: './pescados-y-productos-de-pesca.css',
  templateUrl: './pescados-y-productos-de-pesca.html',
})
export class PescadosYProductosDePesca {
  fincas = [

  {
    nombre: 'Distribuidora Mares & Ríos.',
    ubicacion: 'Barranquilla, Atlántico',
    puntuacion: 4.9,
    imagen: 'https://tse1.mm.bing.net/th/id/OIP.-127HmluG5Db-fjmKOmKRQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },

  {
    nombre: 'Pesca del Pacífico',
    ubicacion: 'buenaventura, Valle del Cauca',
    puntuacion: 4.8,
    imagen: 'https://tse2.mm.bing.net/th/id/OIP.BMO6efj3zklSgG2QnJ_gzgHaEE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },

  {
    nombre: 'Anzuelo & Marea',
    ubicacion: 'caucasia, Antioquia',
    puntuacion: 4.6,
    imagen: 'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/02/08/63e434b6ad69d.jpeg'
  },

  {
    nombre: 'Distribuidora Puerto Fresco',
    ubicacion: 'quibdó, Chocó',
    puntuacion: 4.4,
    imagen: 'https://alertaeconomica.com/wp-content/uploads/2020/02/pesca-peces-muelle-artesanal-veda-jurel-lisa.jpg'
  }

];
}
