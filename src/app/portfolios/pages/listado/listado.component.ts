import { Component, OnInit } from '@angular/core'
import { ConfirmationService, Message } from 'primeng/api'
import { Portfolio } from '../../../interfaces/portfolio'
import { PortfoliosService } from '../../../services/portfolios.service'
import { Value } from '../../../interfaces/value'
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [ConfirmationService]
})
export class ListadoComponent implements OnInit {
  constructor(
    private ps: PortfoliosService,
    private confirmationService: ConfirmationService
  ) {}

  portfolios: Portfolio[] = []
  values: Value[] = []
  total: number[] = []
  msgs: Message[] = []

  ngOnInit(): void {
    this.ps.getAllPortfolios().subscribe((res) => {
      this.portfolios = res
    })
  }

  calcularValue(values: number[]) {
    this.total.push(values.reduce((prev, curr) => prev + curr, 0))
  }

  confirm2(portfolio: Portfolio) {
    this.confirmationService.confirm({
      message: `Do you want to delete ${portfolio.name}?`,
      header: 'Delete portfolio',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.ps
          .deletePortfolio(portfolio.id!)
          .pipe(
            switchMap(
              (res) =>
                (this.msgs = [
                  {
                    severity: 'info',
                    summary: 'Confirmed',
                    detail: `${portfolio.name} deleted`
                  }
                ])
            )
          )
          .subscribe((res) => {
            this.ps.getAllPortfolios().subscribe((allPortfolios) => {
              this.portfolios = allPortfolios
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
