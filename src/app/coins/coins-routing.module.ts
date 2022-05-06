import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListadoComponent } from './pages/listado/listado.component'
import { AgregarCoinComponent } from './pages/agregar-coin/agregar-coin.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarCoinComponent
      },
      {
        path: 'editar/:id',
        component: AgregarCoinComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinsRoutingModule {}
