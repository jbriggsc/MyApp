import { Component } from '@angular/core';
@Component({
  selector: 'app-agregar-gasto',
  templateUrl: './agregar-gasto.page.html',
})
export class AgregarGastoPage {
  nuevoGasto = { descripcion: '', monto: null, fecha: '' };
  agregarGasto() {
    const gastos = JSON.parse(localStorage.getItem('gastos') || '[]');
    gastos.push({ ...this.nuevoGasto });
    localStorage.setItem('gastos', JSON.stringify(gastos));
    alert('Gasto guardado');
    this.nuevoGasto = { descripcion: '', monto: null, fecha: '' };
  }
}