import { Component, Input, OnInit } from '@angular/core';
import { CoinsService } from '../../../services/coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  @Input() coinId!: number;
  nombre: string = '';
  constructor(private cs: CoinsService) { }

  ngOnInit(): void {
    this.cs.getCoin(this.coinId)
    .subscribe(coin => this.nombre = coin.name)
  }

}
