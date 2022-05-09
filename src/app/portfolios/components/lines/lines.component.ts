import { Component, Input, OnInit } from '@angular/core';
import { PortfoliosLinesService } from '../../../services/portfolios-lines.service';
import { PortfolioLine } from '../../../interfaces/portfolio-line';
import { CoinsService } from '../../../services/coins.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {

  @Input() portfolioId!: number;
  lines: PortfolioLine[] = [];
  constructor(private pls: PortfoliosLinesService,
              private cs: CoinsService) { }

  ngOnInit(): void {
    this.pls.getPortfolioLines(this.portfolioId)
      .subscribe(lines =>  this.lines = lines)

  }

}
