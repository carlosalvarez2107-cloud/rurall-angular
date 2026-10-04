import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';

import { Subscription } from 'rxjs';

interface CampoDinamico {
  nombre: string;
  etiqueta: string;
  tipo: string;
  placeholder?: string;
  validators?: ValidatorFn[];
}

@Component({
  selector: 'app-trazabilidad',
  imports: [ReactiveFormsModule],
  templateUrl: './trazabilidad.html',
  styleUrl: './trazabilidad.css',
})

export class Trazabilidad implements OnInit, OnDestroy {
  formularioTrazabilidad!: FormGroup;
  camposDinamicos: CampoDinamico[] = [];
  private sub?: Subscription;
  
  private readonly configuracionCampos: Record<string, CampoDinamico[]> = {
    verduras: [
      { nombre: 'variedad', etiqueta: 'Variedad', tipo: 'text', placeholder: 'Ejemplo: Tomate chonto', validators: [Validators.required] },
      { nombre: 'fechaSiembra', etiqueta: 'Fecha de siembra', tipo: 'date', validators: [Validators.required] },
      { nombre: 'fechaCosecha', etiqueta: 'Fecha estimada de cosecha', tipo: 'date', validators: [Validators.required] },
      { nombre: 'areaCultivada', etiqueta: 'Área cultivada', tipo: 'number', placeholder: 'Ejemplo: 2', validators: [Validators.required, Validators.min(0.01)] },
      { nombre: 'sistemaCultivo', etiqueta: 'Sistema de cultivo', tipo: 'text', placeholder: 'Ejemplo: Campo abierto', validators: [Validators.required] },
    ],
    frutas: [
      { nombre: 'variedad', etiqueta: 'Variedad', tipo: 'text', placeholder: 'Ejemplo: Tommy', validators: [Validators.required] },
      { nombre: 'fechaSiembra', etiqueta: 'Fecha de siembra', tipo: 'date', validators: [Validators.required] },
      { nombre: 'fechaCosecha', etiqueta: 'Fecha de cosecha', tipo: 'date', validators: [Validators.required] },
      { nombre: 'areaCultivada', etiqueta: 'Área cultivada', tipo: 'number', placeholder: 'Ejemplo: 3', validators: [Validators.required, Validators.min(0.01)] },
      { nombre: 'sistemaCultivo', etiqueta: 'Sistema de cultivo', tipo: 'text', placeholder: 'Ejemplo: Campo abierto', validators: [Validators.required] },
    ],
    tuberculos: [
      { nombre: 'variedad', etiqueta: 'Variedad', tipo: 'text', placeholder: 'Ejemplo: Papa pastusa', validators: [Validators.required] },
      { nombre: 'fechaSiembra', etiqueta: 'Fecha de siembra', tipo: 'date', validators: [Validators.required] },
      { nombre: 'fechaCosecha', etiqueta: 'Fecha de cosecha', tipo: 'date', validators: [Validators.required] },
      { nombre: 'areaCultivada', etiqueta: 'Área cultivada', tipo: 'number', placeholder: 'Ejemplo: 2', validators: [Validators.required, Validators.min(0.01)] },
      { nombre: 'sistemaCultivo', etiqueta: 'Sistema de cultivo', tipo: 'text', placeholder: 'Ejemplo: Cultivo tradicional', validators: [Validators.required] },
    ],
    granos: [
      { nombre: 'variedad', etiqueta: 'Variedad', tipo: 'text', placeholder: 'Ejemplo: Arroz Fedearroz', validators: [Validators.required] },
      { nombre: 'fechaSiembra', etiqueta: 'Fecha de siembra', tipo: 'date', validators: [Validators.required] },
      { nombre: 'fechaCosecha', etiqueta: 'Fecha de cosecha', tipo: 'date', validators: [Validators.required] },
      { nombre: 'areaCultivada', etiqueta: 'Área cultivada', tipo: 'number', placeholder: 'Ejemplo: 5', validators: [Validators.required, Validators.min(0.01)] },
      { nombre: 'sistemaCultivo', etiqueta: 'Sistema de cultivo', tipo: 'text', placeholder: 'Ejemplo: Cultivo tradicional', validators: [Validators.required] },
    ],
    cafe: [
      { nombre: 'variedad', etiqueta: 'Variedad', tipo: 'text', placeholder: 'Ejemplo: Caturra', validators: [Validators.required] },
      { nombre: 'fechaSiembra', etiqueta: 'Fecha de siembra', tipo: 'date', validators: [Validators.required] },
      { nombre: 'fechaCosecha', etiqueta: 'Fecha de cosecha', tipo: 'date', validators: [Validators.required] },
      { nombre: 'areaCultivada', etiqueta: 'Área cultivada', tipo: 'number', placeholder: 'Ejemplo: 4', validators: [Validators.required, Validators.min(0.01)] },
      { nombre: 'tipoProcesamiento', etiqueta: 'Tipo de procesamiento', tipo: 'text', placeholder: 'Ejemplo: Lavado', validators: [Validators.required] },
      { nombre: 'fechaProcesamiento', etiqueta: 'Fecha de procesamiento', tipo: 'date', validators: [Validators.required] },
    ],
    aromaticas: [
      { nombre: 'variedad', etiqueta: 'Variedad', tipo: 'text', placeholder: 'Ejemplo: Hierbabuena', validators: [Validators.required] },
      { nombre: 'fechaSiembra', etiqueta: 'Fecha de siembra', tipo: 'date', validators: [Validators.required] },
      { nombre: 'fechaCosecha', etiqueta: 'Fecha de cosecha', tipo: 'date', validators: [Validators.required] },
      { nombre: 'areaCultivada', etiqueta: 'Área cultivada', tipo: 'number', placeholder: 'Ejemplo: 1', validators: [Validators.required, Validators.min(0.01)] },
      { nombre: 'sistemaCultivo', etiqueta: 'Sistema de cultivo', tipo: 'text', placeholder: 'Ejemplo: Cultivo tradicional', validators: [Validators.required] },
    ],
    carnes: [
      { nombre: 'tipoAnimal', etiqueta: 'Tipo de animal', tipo: 'text', placeholder: 'Ejemplo: Bovino', validators: [Validators.required] },
      { nombre: 'raza', etiqueta: 'Raza', tipo: 'text', placeholder: 'Ejemplo: Cebú', validators: [Validators.required] },
      { nombre: 'fechaNacimiento', etiqueta: 'Fecha de nacimiento', tipo: 'date', validators: [Validators.required] },
      { nombre: 'fechaIngreso', etiqueta: 'Fecha de ingreso al lote', tipo: 'date', validators: [Validators.required] },
      { nombre: 'cantidadAnimales', etiqueta: 'Cantidad de animales', tipo: 'number', placeholder: 'Ejemplo: 25', validators: [Validators.required, Validators.min(1)] },
      { nombre: 'pesoAproximado', etiqueta: 'Peso aproximado (kg)', tipo: 'number', placeholder: 'Ejemplo: 420', validators: [Validators.required, Validators.min(0.01)] },
      { nombre: 'sistemaProduccion', etiqueta: 'Sistema de producción', tipo: 'text', placeholder: 'Ejemplo: Ganadería extensiva', validators: [Validators.required] },
    ],
    pescados: [
      { nombre: 'especie', etiqueta: 'Especie', tipo: 'text', placeholder: 'Ejemplo: Tilapia roja', validators: [Validators.required] },
      { nombre: 'fechaSiembra', etiqueta: 'Fecha de siembra', tipo: 'date', validators: [Validators.required] },
      { nombre: 'cantidadInicial', etiqueta: 'Cantidad inicial', tipo: 'number', placeholder: 'Ejemplo: 2000', validators: [Validators.required, Validators.min(1)] },
      { nombre: 'tamanoInicial', etiqueta: 'Tamaño inicial (cm)', tipo: 'number', placeholder: 'Ejemplo: 5', validators: [Validators.required, Validators.min(0.1)] },
      { nombre: 'numeroEstanque', etiqueta: 'Número de estanque', tipo: 'text', placeholder: 'Ejemplo: E-03', validators: [Validators.required] },
      { nombre: 'sistemaProduccion', etiqueta: 'Sistema de producción', tipo: 'text', placeholder: 'Ejemplo: Estanque', validators: [Validators.required] },
      { nombre: 'fechaEstimadaCosecha', etiqueta: 'Fecha estimada de cosecha', tipo: 'date', validators: [Validators.required] },
    ],
    lacteos: [
      { nombre: 'tipoAnimal', etiqueta: 'Tipo de animal', tipo: 'text', placeholder: 'Ejemplo: Bovino', validators: [Validators.required] },
      { nombre: 'raza', etiqueta: 'Raza', tipo: 'text', placeholder: 'Ejemplo: Holstein', validators: [Validators.required] },
      { nombre: 'fechaProduccion', etiqueta: 'Fecha de producción', tipo: 'date', validators: [Validators.required] },
      { nombre: 'cantidadProducida', etiqueta: 'Cantidad producida', tipo: 'number', placeholder: 'Ejemplo: 50', validators: [Validators.required, Validators.min(0.01)] },
      { nombre: 'sistemaProduccion', etiqueta: 'Sistema de producción', tipo: 'text', placeholder: 'Ejemplo: Producción campesina', validators: [Validators.required] },
      { nombre: 'tipoProducto', etiqueta: 'Tipo de producto', tipo: 'text', placeholder: 'Ejemplo: Leche', validators: [Validators.required] },
      { nombre: 'fechaElaboracion', etiqueta: 'Fecha de elaboración', tipo: 'date', validators: [Validators.required] },
    ],
  };

  constructor(private fb: FormBuilder) {
    this.formularioTrazabilidad = this.fb.group({
      categoria: ['', Validators.required],
      producto: ['', [Validators.required, Validators.minLength(2)]],
      lote: ['', [Validators.required, Validators.minLength(2)]],
      fechaProduccion: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(0.01)]],
      unidad: ['', Validators.required],
    });

    // Escucha los cambios de categoría de forma reactiva //
    this.sub = this.formularioTrazabilidad
      .get('categoria')!
      .valueChanges.subscribe((categoria: string) => {
        this.actualizarCampos(categoria);
      });
  }

  private actualizarCampos(categoria: string): void {
    
    this.camposDinamicos.forEach((campo) => {
      this.formularioTrazabilidad.removeControl(campo.nombre);
    });
    this.camposDinamicos = [];

    // Obtiene la configuración de la categoría //
    const campos = this.configuracionCampos[categoria];
    if (!campos) return;

    //  Agrega los  controles al FormGroup //
    campos.forEach((campo) => {
      this.formularioTrazabilidad.addControl(
        campo.nombre,
        new FormControl('', campo.validators ?? [])
      );
    });

    this.camposDinamicos = campos;
  }

  ngOnInit(): void {}

generarQR(): void {
  if (this.formularioTrazabilidad.invalid) {
    this.formularioTrazabilidad.markAllAsTouched();
    return;
  }

  // TODO: generar QR real y enviar los datos al backend
}

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}