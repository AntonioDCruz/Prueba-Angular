import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api'
import { Portfolio } from '../../../interfaces/portfolio';
import { PortfoliosService } from '../../../services/portfolios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private ps: PortfoliosService) { }

  portfolios: Portfolio[] = [];

  ngOnInit(): void {
    this.ps.getAllPortfolios()
      .subscribe(res => {
        this.portfolios = res;
      })
  }

}
