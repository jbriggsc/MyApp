import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
})
export class ResumenPage implements OnInit {
  listaGastos: any[] = [];
  ngOnInit() {
    this.listaGastos = JSON.parse(localStorage.getItem('gastos') || '[]');
  }
}