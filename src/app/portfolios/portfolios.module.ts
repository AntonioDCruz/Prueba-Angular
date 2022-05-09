import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliosRoutingModule } from './portfolios-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LinesComponent } from './components/lines/lines.component';
import { CoinsComponent } from './components/coins/coins.component';


@NgModule({
  declarations: [
    ListadoComponent,
    LinesComponent,
    CoinsComponent
  ],
  imports: [
    CommonModule,
    PortfoliosRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class PortfoliosModule { }
