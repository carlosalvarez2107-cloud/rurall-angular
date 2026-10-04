import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { CarruselRurral } from '../../components/carrusel-rurral/carrusel-rurral';
import { Noticias } from '../../components/noticias/noticias';

@Component({
  imports: [Hero, CarruselRurral, Noticias],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}