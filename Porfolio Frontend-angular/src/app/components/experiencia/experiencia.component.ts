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


}
