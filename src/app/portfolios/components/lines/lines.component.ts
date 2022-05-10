import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfoliosLinesService } from '../../../services/portfolios-lines.service';
import { PortfolioLine } from '../../../interfaces/portfolio-line';
import { CoinsService } from '../../../services/coins.service';
import { Value } from '../../../interfaces/value';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {

  @Output() emitValue = new EventEmitter<number[]>();
  @Input() portfolioId!: number;

  totalValues: number[] = [];
  lines: PortfolioLine[] = [];

  constructor(private pls: PortfoliosLinesService,
              private cs: CoinsService) { }

  ngOnInit(): void {
    this.pls.getPortfolioLines(this.portfolioId)
      .subscribe(lines =>  this.lines = lines)
  }

  pushValues(value: Value, index:number){
    this.totalValues.push(this.lines[index].amount * value.EUR);
    /* console.log(value); */
    if (this.totalValues.length === this.lines.length) {
      this.emitValue.emit(this.totalValues);
    }
  }

}
