import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsRoutingModule } from './coins-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarCoinComponent } from './pages/agregar-coin/agregar-coin.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ListadoComponent,
    AgregarCoinComponent
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule,
    PrimeNgModule
  ]
})
export class CoinsModule { }
