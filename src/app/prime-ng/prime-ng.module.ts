import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TabMenuModule } from 'primeng/tabmenu'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { MessagesModule } from 'primeng/messages'
import { InputTextModule } from 'primeng/inputtext'
import {MessageModule} from 'primeng/message';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    InputNumberModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    TabMenuModule,
  ]
})
export class PrimeNgModule {}
