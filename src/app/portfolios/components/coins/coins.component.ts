import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoinsService } from '../../../services/coins.service';
import { HttpClient } from '@angular/common/http';
import { Value } from '../../../interfaces/value';
import { map } from 'rxjs';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  @Output() emitValue = new EventEmitter<Value>();

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
      .pipe(
        map(res => this.valor = res)
      )
      .subscribe((res) => {
        this.emitValue.emit(this.valor);
      });
    })
  }

}
