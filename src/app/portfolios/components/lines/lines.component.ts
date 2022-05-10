import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { PortfoliosLinesService } from '../../../services/portfolios-lines.service'
import { PortfolioLine } from '../../../interfaces/portfolio-line'
import { Value } from '../../../interfaces/value'
import { ConfirmationService, Message } from 'primeng/api'
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css'],
  providers: [ConfirmationService]
})
export class LinesComponent implements OnInit {
  @Output() emitValue = new EventEmitter<number[]>()
  @Input() portfolioId!: number

  totalValues: number[] = []
  lines: PortfolioLine[] = []
  msgs: Message[] = []

  constructor(
    private pls: PortfoliosLinesService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.pls
      .getPortfolioLines(this.portfolioId)
      .subscribe((lines) => (this.lines = lines))
  }

  pushValues(value: Value, index: number) {
    this.totalValues.push(this.lines[index].amount * value.EUR)
    /* console.log(value); */
    if (this.totalValues.length === this.lines.length) {
      this.emitValue.emit(this.totalValues)
    }
  }

  confirm2(portfolioLine: PortfolioLine) {
    this.confirmationService.confirm({
      message: `Do you want to delete this line?`,
      header: 'Delete portfolio',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.pls
          .deletePortfolioLine(portfolioLine.id!)
          .pipe(
            switchMap(
              (res) =>
                (this.msgs = [
                  {
                    severity: 'info',
                    summary: 'Confirmed',
                    detail: `Line deleted`
                  }
                ])
            )
          )
          .subscribe((res) => {
            this.pls
              .getPortfolioLines(this.portfolioId)
              .subscribe((lines) => (this.lines = lines))
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
