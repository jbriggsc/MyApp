import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.page').then(m => m.Page) },
  { path: 'home', loadChildren: () => import('./pages/home/home.page').then(m => m.Page) },
  { path: 'resumen', loadChildren: () => import('./pages/resumen/resumen.page').then(m => m.ResumenPage) },
  { path: 'agregar-gasto', loadChildren: () => import('./pages/agregar-gasto/agregar-gasto.page').then(m => m.AgregarGastoPage) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}