import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaList: Experiencia[]=[];

  constructor(private sExperiencia:ExperienciaService){}

  ngOnInit(): void{

    this.verExperiencia();

  }

  verExperiencia():void{
    this.sExperiencia.ver().subscribe(data => {this.experienciaList = data;})   
    
    
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.verExperiencia();
        }, err =>{
          alert("Experiencia no borrada");
        }
      )
    }
  }


  //-------------TODO------
  /* modificar(id?: number){
    if(id != undefined){
      this.sExperiencia.modificar(id).subscribe(
        data => {
          this.verExperiencia();
        }, err =>{
          alert("Experiencia no borrada");
        }
      )
    } */
  }



