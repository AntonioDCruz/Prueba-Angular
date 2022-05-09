import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'coins',
    loadChildren: () =>
      import('./coins/coins.module').then((m) => m.CoinsModule)
  },
  {
    path: 'portfolios',
    loadChildren: () =>
      import('./portfolios/portfolios.module').then((m) => m.PortfoliosModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
