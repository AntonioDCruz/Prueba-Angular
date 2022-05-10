import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Message } from 'primeng/api/message'
import { switchMap } from 'rxjs/operators'
import { Portfolio } from '../../../interfaces/portfolio'
import { PortfoliosService } from '../../../services/portfolios.service'

@Component({
  selector: 'app-agregar-portfolio',
  templateUrl: './agregar-portfolio.component.html',
  styleUrls: ['./agregar-portfolio.component.css']
})
export class AgregarPortfolioComponent implements OnInit {
  portfolioFormulario: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '[a-zA-ZÀ-ÖØ-öø-ÿ0-9]+.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ0-9]+.?)*'
        )
      ]
    ]
  })

  portfolio: Portfolio | undefined
  msgs: Message[] = []

  constructor(
    private ps: PortfoliosService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.ps.getPortfolio(id)))
      .subscribe((portfolio) => {
        this.portfolio = portfolio
        this.portfolioFormulario.reset({
          name: this.portfolio.name
        })
      })
  }

  get nameMsg() {
    const errors = this.portfolioFormulario.get('name')?.errors
    if (errors?.['required']) {
      return 'Introduce un nombre'
    } else if (errors?.['pattern']) {
      return 'Introduce un formato de nombre valido'
    }
    return ''
  }

  error(campo: string) {
    return (
      this.portfolioFormulario.controls?.[campo]?.errors &&
      this.portfolioFormulario.controls?.[campo]?.touched
    )
  }

  guardar() {
    if (this.portfolioFormulario.invalid) {
      this.portfolioFormulario.markAllAsTouched()
      return
    }

    if (this.portfolio?.id) {
      this.portfolio.name = this.portfolioFormulario.get('name')?.value
      this.ps.updatePortfolio(this.portfolio).subscribe((res) => {
        this.addMessages(this.portfolio?.name!)
      })
    } else {
      const portfolio: Portfolio = {
        name: this.portfolioFormulario.get('name')?.value
      }
      this.ps
        .postPortfolio(portfolio)
        .subscribe((res) => this.router.navigate(['/portfolios']))
    }
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
