import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
})
export class ResumenPage implements OnInit {
  listaGastos: any[] = [];

  ngOnInit() {
    const gastosGuardados = JSON.parse(localStorage.getItem('gastos') || '[]');
    this.listaGastos = gastosGuardados;
  }
}