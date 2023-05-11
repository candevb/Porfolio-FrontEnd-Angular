import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';



const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'skills', component: HardAndSoftSkillsComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path:'', redirectTo: 'iniciar-sesion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
