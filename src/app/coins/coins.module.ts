import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsRoutingModule } from './coins-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarCoinComponent } from './pages/agregar-coin/agregar-coin.component';


@NgModule({
  declarations: [
    ListadoComponent,
    AgregarCoinComponent
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule
  ]
})
export class CoinsModule { }
