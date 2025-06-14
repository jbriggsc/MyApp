
import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
})
export class ResumenPage {
  listaGastos = [
    { descripcion: 'Internet', monto: 25990, fecha: new Date('2025-06-30') },
    { descripcion: 'Luz', monto: 18700, fecha: new Date('2025-06-18') }
  ];
}
