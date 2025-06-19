import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Resumen', url: '/resumen', icon: 'list' },
    { title: 'Agregar Gasto', url: '/agregar-gasto', icon: 'add' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' }
  ];
}