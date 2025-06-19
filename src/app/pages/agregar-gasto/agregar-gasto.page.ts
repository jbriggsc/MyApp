import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-gasto',
  templateUrl: './agregar-gasto.page.html',
})
export class AgregarGastoPage {
  nuevoGasto = { descripcion: '', monto: null, fecha: '' };

  agregarGasto() {
    const gastosGuardados = JSON.parse(localStorage.getItem('gastos') || '[]');
    gastosGuardados.push({ ...this.nuevoGasto });
    localStorage.setItem('gastos', JSON.stringify(gastosGuardados));
    this.nuevoGasto = { descripcion: '', monto: null, fecha: '' };
    alert('✅ Gasto guardado correctamente');
  }
}