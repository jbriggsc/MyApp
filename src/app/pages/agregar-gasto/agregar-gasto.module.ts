import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AgregarGastoPage } from './agregar-gasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AgregarGastoPage }])
  ],
  declarations: [AgregarGastoPage]
})
export class AgregarGastoPageModule {}