import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Coin } from '../interfaces/coin'
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  baseUrl: string = environment.api

  constructor(private http: HttpClient) {}

  getAllCoins(): Observable<Coin[]> {
    const url = `${this.baseUrl}/coins`
    return this.http.get<Coin[]>(url)
  }

  getCoin(id: number): Observable<Coin> {
    const url = `${this.baseUrl}/coins/${id}`
    return this.http.get<Coin>(url)
  }

  postCoin(coin: Coin): Observable<Coin> {
    const url = `${this.baseUrl}/coins/`
    return this.http.post<Coin>(url, coin)
  }

  updateCoin(coin: Coin): Observable<Coin> {
    const url = `${this.baseUrl}/coins/${coin.id}`
    return this.http.put<Coin>(url, coin)
  }

  deleteCoin(id: number): Observable<any> {
    const url = `${this.baseUrl}/coins/${id}`
    return this.http.delete<any>(url)
  }
}
