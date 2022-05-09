import { Component, Input, OnInit, LOCALE_ID } from '@angular/core';
import { CoinsService } from '../../../services/coins.service';
import { HttpClient } from '@angular/common/http';
import { Value } from '../../../interfaces/value';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  @Input() coinId!: number;
  nombre: string = '';
  valor!: Value;
  constructor(private cs: CoinsService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.cs.getCoin(this.coinId)
    .subscribe(coin => {
      this.nombre = coin.name
      this.http.get<Value>(`https://min-api.cryptocompare.com/data/price?fsym=${coin.acronym}&tsyms=EUR`)
        .subscribe((res) => this.valor = res);
    })
  }

}
