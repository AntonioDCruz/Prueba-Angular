import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api/message';
import { PortfolioLine } from '../../../interfaces/portfolio-line';
import { PortfoliosLinesService } from '../../../services/portfolios-lines.service';
import { CoinsService } from '../../../services/coins.service';
import { Coin } from 'src/app/interfaces/coin';

@Component({
  selector: 'app-agregar-line',
  templateUrl: './agregar-line.component.html',
  styleUrls: ['./agregar-line.component.css']
})
export class AgregarLineComponent implements OnInit {

  portfolioLineFormulario: FormGroup = this.fb.group({
    coinId: [ , [Validators.required]],
    amount: [ , [Validators.required, Validators.min(0)]]
  })

  portfolioLine: PortfolioLine | undefined
  portfolioId!: number
  coins: Coin[] = [];
  msgs: Message[] = []

  constructor(
    private pls: PortfoliosLinesService,
    private fb: FormBuilder,
    private cs: CoinsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('editarLine')) {
      const portforlioLineId = Number(this.activatedRoute.snapshot.params['idLine'])
      this.portfolioId = Number(this.activatedRoute.snapshot.params['idPortfolio'])
      this.pls.getPortfolioLines(this.portfolioId)
        .subscribe(lines => {
          lines.forEach(line => {
            if (line.id === portforlioLineId) {
              this.portfolioLine = line
              this.portfolioLineFormulario.reset({
                coinId: this.portfolioLine.coinId,
                amount: this.portfolioLine.amount
              })
            }
          })
        })
    }else if (this.router.url.includes('agregarLine')) {
      this.activatedRoute.params
        .subscribe((({ id }) => this.portfolioId = Number(id)))
    }else{
      return
    }
    this.cs.getAllCoins()
      .subscribe(coins => this.coins = coins )
  }

  get coinMsg() {
    const errors = this.portfolioLineFormulario.get('coinId')?.errors
    if (errors?.['required']) {
      return 'Seleccione una moneda'
    }
    return ''
  }

  error(campo: string) {
    return (
      this.portfolioLineFormulario.controls?.[campo]?.errors &&
      this.portfolioLineFormulario.controls?.[campo]?.touched
    )
  }

  guardar() {
    if (this.portfolioLineFormulario.invalid) {
      this.portfolioLineFormulario.markAllAsTouched()
      return
    }

    if (this.portfolioLine?.id) {
      this.portfolioLine.coinId = Number(this.portfolioLineFormulario.get('coinId')?.value)
      this.portfolioLine.amount = this.portfolioLineFormulario.get('amount')?.value
      console.log(this.portfolioLine);

      this.pls.updatePortfolioLine(this.portfolioLine)
        .subscribe(res => {
          this.addMessages();
        })
    }else{
      const portfolioLine: PortfolioLine = {
        portfolioId: Number(this.portfolioId),
        coinId: Number(this.portfolioLineFormulario.get('coinId')?.value),
        amount: this.portfolioLineFormulario.get('amount')?.value
      }
      this.pls
        .postPortfolioLine(portfolioLine)
        .subscribe((res) => this.router.navigate(['/portfolios']))
    }


  }

  addMessages() {
    this.msgs = [
      {
        severity: 'success',
        summary: 'Update Line',
        detail: `Portfolio line has been updated`
      }
    ]
  }


}
