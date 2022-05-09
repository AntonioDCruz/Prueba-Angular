import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliosRoutingModule } from './portfolios-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    PortfoliosRoutingModule
  ]
})
export class PortfoliosModule { }
