import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';


const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo: 'iniciar-sesion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
