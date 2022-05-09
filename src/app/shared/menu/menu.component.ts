import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api/menuitem'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = []

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Coins', icon: 'pi pi-fw pi-globe', routerLink: '/coins' },
      { label: 'Portfolios', icon: 'pi pi-fw pi-wallet', routerLink: '/portfolios' }
    ]
  }
}
