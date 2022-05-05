import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment.prod'
import { Observable } from 'rxjs'
import { Portfolio } from '../interfaces/portfolio'

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  baseUrl: string = environment.api

  constructor(private http: HttpClient) {}

  getPortfolio(id: number): Observable<Portfolio> {
    const url = `${this.baseUrl}/portfolios/${id}`
    return this.http.get<Portfolio>(url)
  }

  getAllPortfolios(): Observable<Portfolio[]> {
    const url = `${this.baseUrl}/portfolios`
    return this.http.get<Portfolio[]>(url)
  }

  postPortfolio(portfolio: Portfolio): Observable<Portfolio> {
    const url = `${this.baseUrl}/portfolios`
    return this.http.post<Portfolio>(url, portfolio)
  }

  updatePortfolio(portfolio: Portfolio): Observable<Portfolio> {
    const url = `${this.baseUrl}/portfolios/${portfolio.id}`
    return this.http.put<Portfolio>(url, portfolio)
  }

  deletePortfolio(id: number): Observable<any> {
    const url = `${this.baseUrl}/portfolios/${id}`
    return this.http.delete<any>(url)
  }
}
