import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  localeES  from "@angular/common/locales/es";

import { PortfoliosRoutingModule } from './portfolios-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LinesComponent } from './components/lines/lines.component';
import { CoinsComponent } from './components/coins/coins.component';

import { registerLocaleData } from "@angular/common";
import { AgregarPortfolioComponent } from './pages/agregar-portfolio/agregar-portfolio.component';
import { AgregarLineComponent } from './pages/agregar-line/agregar-line.component';
registerLocaleData( localeES );



@NgModule({
  declarations: [
    ListadoComponent,
    LinesComponent,
    CoinsComponent,
    AgregarPortfolioComponent,
    AgregarLineComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  imports: [
    CommonModule,
    PortfoliosRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class PortfoliosModule { }
