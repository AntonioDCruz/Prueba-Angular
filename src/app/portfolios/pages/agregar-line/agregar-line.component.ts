import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api/message';
import { switchMap } from 'rxjs/operators';
import { PortfolioLine } from '../../../interfaces/portfolio-line';
import { PortfoliosLinesService } from '../../../services/portfolios-lines.service';
import { CoinsService } from '../../../services/coins.service';
import { Coin } from 'src/app/interfaces/coin';
import { map } from 'rxjs';

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
    /* if (!this.router.url.includes('editarLine')) {
      return
    } */
    this.cs.getAllCoins()
      .subscribe(coins => this.coins = coins )

    this.activatedRoute.params
      .subscribe((({ id }) => this.portfolioId = id))

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


    const portfolioLine: PortfolioLine = {
      portfolioId: this.portfolioId,
      coinId: this.portfolioLineFormulario.get('coinId')?.value,
      amount: this.portfolioLineFormulario.get('amount')?.value,
    }
    this.pls
      .postPortfolioLine(portfolioLine)
      .subscribe((res) => this.router.navigate(['/portfolios']))
  }

  addMessages(name: string) {
    this.msgs = [
      {
        severity: 'success',
        summary: 'Update Coin',
        detail: `${name} portfolio has been updated`
      }
    ]
  }


}
