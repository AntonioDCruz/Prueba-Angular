import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    TabMenuModule,
  ]
})
export class PrimeNgModule { }
