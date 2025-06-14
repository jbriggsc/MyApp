
import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-gasto',
  templateUrl: './agregar-gasto.page.html',
})
export class AgregarGastoPage {
  nuevoGasto = {
    descripcion: '',
    monto: null,
    fecha: ''
  };

  agregarGasto() {
    console.log('Nuevo gasto agregado:', this.nuevoGasto);
    alert('Gasto agregado: ' + JSON.stringify(this.nuevoGasto));
    this.nuevoGasto = { descripcion: '', monto: null, fecha: '' };
  }
}
