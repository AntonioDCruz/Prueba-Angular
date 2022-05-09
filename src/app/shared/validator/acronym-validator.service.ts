import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors
} from '@angular/forms'
import { map, Observable, of, switchMap } from 'rxjs'
import { CoinList } from '../../interfaces/coinList'

@Injectable({
  providedIn: 'root'
})
export class AcronymValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const acronym = control.value
    let acronyms: string[] = []
    return this.http
      .get<CoinList>('https://min-api.cryptocompare.com/data/all/coinlist')
      .pipe(
        switchMap((res) => (acronyms = Object.keys(res.Data))),
        map((acronymList) => {
          return acronyms.includes(acronym) ? null : { noExist: true }
        })
      )
  }
}

/* res => {
  const acronymList = Object.keys(res.Data)
  acronymList.forEach(acr => {
    if (acronym === acr) {
      return { usedAcronym: true }
    }else{
      return null
    }
  })
} */
