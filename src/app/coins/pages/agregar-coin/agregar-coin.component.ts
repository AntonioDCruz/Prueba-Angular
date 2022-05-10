import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Message } from 'primeng/api/message'
import { switchMap } from 'rxjs/operators'
import { Coin } from 'src/app/interfaces/coin'
import { CoinsService } from '../../../services/coins.service'
import { AcronymValidatorService } from '../../../shared/validator/acronym-validator.service'

@Component({
  selector: 'app-agregar-coin',
  templateUrl: './agregar-coin.component.html',
  styleUrls: ['./agregar-coin.component.css']
})
export class AgregarCoinComponent implements OnInit {
  coinFormulario: FormGroup = this.fb.group({
    acronym: [
      '',
      [Validators.required, Validators.pattern('[A-Z0-9]{2,4}')],
      [this.acrValidator]
    ],
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

  coin: Coin | undefined;
  msgs: Message[] = [];

  constructor(
    private cs: CoinsService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private acrValidator: AcronymValidatorService
  ) {}

  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.cs.getCoin(id) )
    )
    .subscribe( coin => {
      this.coin = coin
      this.coinFormulario.reset({
        acronym: this.coin.acronym,
        name: this.coin.name
      })
    });
  }

  get acronymMsg() {
    const errors = this.coinFormulario.get('acronym')?.errors
    if (errors?.['required']) {
      return 'Introduce un acrónimo'
    } else if (errors?.['pattern']) {
      return 'Introduce un formato de acrónimo valido'
    } else if (errors?.['noExist']) {
      return 'El acrónimo introducido no corresponde a ninguna moneda existente'
    }

    return ''
  }

  get nameMsg() {
    const errors = this.coinFormulario.get('name')?.errors
    if (errors?.['required']) {
      return 'Introduce un acronimo'
    } else if (errors?.['pattern']) {
      return 'Introduce un formato de adronimo valido'
    }
    return ''
  }

  error(campo: string) {
    return (
      this.coinFormulario.controls?.[campo]?.errors &&
      this.coinFormulario.controls?.[campo]?.touched
    )
  }

  guardar() {
    if (this.coinFormulario.invalid) {
      this.coinFormulario.markAllAsTouched()
      return
    }

    if (this.coin?.id) {
      this.coin.acronym = this.coinFormulario.get('acronym')?.value
      this.coin.name = this.coinFormulario.get('name')?.value
      this.cs.updateCoin(this.coin)
        .subscribe(res => {
          this.addMessages(this.coin?.acronym!);
        })
    }else{
      const coin: Coin = {
        acronym: this.coinFormulario.get('acronym')?.value,
        name: this.coinFormulario.get('name')?.value
      }
      this.cs.postCoin(coin)
        .subscribe(res => this.router.navigate(['/coins']));
    }
  }

  addMessages(acronym: string) {
    this.msgs = [
        {severity:'success', summary:'Update Coin', detail:`${acronym} coin has been updated`},
    ];
}
}
