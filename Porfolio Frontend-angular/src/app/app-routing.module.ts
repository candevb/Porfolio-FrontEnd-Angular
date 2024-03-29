import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';



const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'skills', component: HardAndSoftSkillsComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'new-experiencia', component: NewExperienciaComponent},
  {path: 'edit-experiencia/:id', component: EditExperienciaComponent},
  {path:'', redirectTo: 'portfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
