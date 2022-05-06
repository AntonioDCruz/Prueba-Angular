import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TabMenuModule } from 'primeng/tabmenu'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    TabMenuModule,
    CardModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule
  ]
})
export class PrimeNgModule {}
