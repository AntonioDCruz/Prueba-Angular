import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarPortfolioComponent } from './pages/agregar-portfolio/agregar-portfolio.component';
import { AgregarLineComponent } from './pages/agregar-line/agregar-line.component';

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
        component: AgregarPortfolioComponent
      },
      {
        path: 'editar/:id',
        component: AgregarPortfolioComponent
      },
      {
        path: 'agregarLine/:id',
        component: AgregarLineComponent
      },
      {
        path: 'editarLine/:idPortfolio/:idLine',
        component: AgregarLineComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfoliosRoutingModule { }
