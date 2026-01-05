import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gestionde-citas',
    loadComponent: () => import('./Paginas/gestionde-citas/gestionde-citas.page').then( m => m.GestiondeCitasPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./Paginas/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
];
