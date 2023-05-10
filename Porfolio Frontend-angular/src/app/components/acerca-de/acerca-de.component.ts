import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  persona: Persona = new Persona(" "," "," ",);

    constructor(public spersona:PersonaService){}

    ngOnInit(): void{

      this.verPersona();

    }

    verPersona():void{

      this.spersona.getPersonas().subscribe(data => 
        {this.persona = data})
    }

    }

   


