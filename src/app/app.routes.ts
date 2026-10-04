import { Routes } from '@angular/router';
import { Legal } from './pages/legal/legal';
import { Home } from './pages/home/home';
import { Categories } from './pages/categories/categories';
import { Frutas } from './pages/categories/frutas/frutas';
import { VerdurasYHortalizas } from './pages/categories/verduras-y-hortalizas/verduras-y-hortalizas';
import { Tuberculos } from './pages/categories/tuberculos/tuberculos';
import { LacteosYHuevos } from './pages/categories/lacteos-y-huevos/lacteos-y-huevos';
import { PescadosYProductosDePesca } from './pages/categories/pescados-y-productos-de-pesca/pescados-y-productos-de-pesca';
import { Granos } from './pages/categories/granos/granos';
import { Cafe } from './pages/categories/cafe/cafe';
import { Medicinales } from './pages/categories/medicinales/medicinales';
import { Carnes } from './pages/categories/carnes/carnes';
import { Productos } from './pages/productos/productos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Trazabilidad } from './pages/trazabilidad/trazabilidad';
import { Login } from './pages/auth/login/login';
import { Registro } from './pages/auth/registro/registro';
import { Recuperar } from './pages/auth/recuperar/recuperar';
import { Cuenta } from './pages/auth/registro/cuenta/cuenta';
import { Perfil } from './pages/auth/registro/perfil/perfil';
import { Completar } from './pages/auth/registro/completar/completar';
import { Comprador } from './pages/auth/registro/comprador/comprador';
import { Confirmacion } from './pages/auth/registro/confirmacion/confirmacion';
import { Productor } from './pages/auth/registro/productor/productor';
import { Logistica } from './pages/auth/registro/logistica/logistica';
import { Perfil as PerfilUsuario } from './pages/perfil/perfil';
import { Panel } from './pages/panel/panel';
import { authGuard } from './core/guards/auth-guard';
import { Carrito } from './pages/carrito/carrito';

export const routes: Routes = [

 {
    path: 'auth',
    children: [
      { path: 'login', component: Login },
      {
        path: 'registro',
        component: Registro,
        children: [
          { path: '', component: Cuenta },
          { path: 'perfil', component: Perfil },
          { path: 'productor', component: Productor },
          { path: 'logistica', component: Logistica },
          { path: 'comprador', component: Comprador },
          { path: 'confirmacion', component: Confirmacion },
          { path: 'completar', component: Completar }
        ]
      },
      { path: 'recuperar', component: Recuperar },
    ]
  },

  {
    path: '',
    component: Home
  },

  {
    path: 'trazabilidad',
    component: Trazabilidad
  },

  {
    path: 'nosotros',
    component: Nosotros
  },

  {
    path: 'productos',
    component: Productos
  },

  {
    path: 'legal',
    component: Legal
  },

  {
  path: 'perfil',
  component: PerfilUsuario,
  canActivate: [authGuard]
},
{
  path: 'panel',
  component: Panel,
  canActivate: [authGuard]
},
{
  path: 'carrito',
  component: Carrito,
  canActivate: [authGuard]
},


  {
    path: 'categories',
    component: Categories,
    children: [
      { path: 'frutas', component: Frutas },
      { path: 'verduras-y-hortalizas', component: VerdurasYHortalizas },
      { path: 'tuberculos', component: Tuberculos },
      { path: 'lacteos-y-huevos', component: LacteosYHuevos },
      { path: 'pescados-y-productos-de-pesca', component: PescadosYProductosDePesca },
      { path: 'granos', component: Granos },
      { path: 'cafe', component: Cafe },
      { path: 'medicinales', component: Medicinales },
      { path: 'carnes', component: Carnes },
    ]
  },

];