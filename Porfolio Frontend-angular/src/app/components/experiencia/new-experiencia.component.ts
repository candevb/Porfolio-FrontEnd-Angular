import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  empresa: string = '';
  posicion: string = '';
  descripcion: string = '';
  inicio: string = '';
  fin: string = '';


  constructor(private sExperiencia: ExperienciaService, private router: Router) { }


  ngOnInit(): void {

  }

  onCreate(): void {
    const exp = new Experiencia(this.empresa, this.posicion, this.descripcion, this.inicio, this.fin);
    this.sExperiencia.crear(exp).subscribe(data => {
      alert("Nueva experiencia agregada");
      this.router.navigate(['/portfolio']);
    }, err => {
      alert("No se pudo agregar la experiencia");
      this.router.navigate(['/portfolio']);
    }
    )
  }



}
