import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment.prod'
import { Observable } from 'rxjs'
import { PortfolioLine } from '../interfaces/portfolio-line'

@Injectable({
  providedIn: 'root'
})
export class PortfoliosLinesService {
  baseUrl: string = environment.api

  constructor(private http: HttpClient) {}

  getPortfolioLines(portfolioId: number): Observable<PortfolioLine[]> {
    const url = `${this.baseUrl}/portfolios/${portfolioId}/lines`
    return this.http.get<PortfolioLine[]>(url)
  }

  postPortfolioLine(portfolioLine: PortfolioLine): Observable<PortfolioLine> {
    const url = `${this.baseUrl}/portfolios/${portfolioLine.portfolioId}/lines/`
    return this.http.post<PortfolioLine>(url, portfolioLine)
  }

  updatePortfolioLine(portfolioLine: PortfolioLine): Observable<PortfolioLine> {
    const url = `${this.baseUrl}/lines/${portfolioLine.id}`
    return this.http.put<PortfolioLine>(url, portfolioLine)
  }

  deletePortfolioLine(
    idPortfolio: number,
    idPorftolioLine: number
  ): Observable<any> {
    const url = `${this.baseUrl}/portfolios/${idPortfolio}/lines/${idPorftolioLine}`
    return this.http.delete<any>(url)
  }
}
