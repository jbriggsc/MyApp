import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'resumen', loadChildren: () => import('./pages/resumen/resumen.module').then(m => m.ResumenPageModule) },
  { path: 'agregar-gasto', loadChildren: () => import('./pages/agregar-gasto/agregar-gasto.module').then(m => m.AgregarGastoPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}