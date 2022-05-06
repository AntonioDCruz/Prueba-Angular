import { Component, OnInit } from '@angular/core'
import { ConfirmationService, Message } from 'primeng/api'
import { switchMap } from 'rxjs'
import { Coin } from '../../../interfaces/coin'
import { CoinsService } from '../../../services/coins.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [ConfirmationService]
})
export class ListadoComponent implements OnInit {
  msgs: Message[] = []
  coins: Coin[] = []

  constructor(
    private cs: CoinsService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.cs.getAllCoins().subscribe((allCoins) => {
      this.coins = allCoins
    })
  }

  confirm2(coin: Coin) {
    this.confirmationService.confirm({
      message: `Do you want to delete ${coin.name}, ${coin.acronym}?`,
      header: 'Delete Coin',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.cs
          .deleteCoin(coin.id!)
          .pipe(
            switchMap(
              (res) =>
                (this.msgs = [
                  {
                    severity: 'info',
                    summary: 'Confirmed',
                    detail: `${coin.name}, ${coin.acronym} deleted`
                  }
                ])
            )
          )
          .subscribe((res) => {
            this.cs.getAllCoins().subscribe((allCoins) => {
              this.coins = allCoins
            })
          })
      },
      reject: () => {
        this.msgs = [
          { severity: 'info', summary: 'Rejected', detail: 'You have rejected' }
        ]
      }
    })
  }
}
