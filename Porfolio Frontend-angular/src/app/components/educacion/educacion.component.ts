import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacionList: Educacion[]=[];

  constructor(private sEducacion:EducacionService){}

  ngOnInit(): void{

    this.verEducacion();

  }

  verEducacion():void{
    this.sEducacion.ver().subscribe(data => {this.educacionList = data;})
    //console.log(this.educacionList);
    
  }
/* 
  delete(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.verEducacion();
        }, err =>{
          alert("Educacion no borrada");
        }
      )
    }
  } */
  

}
