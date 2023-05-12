import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

/* @Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent {
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

} */

////----martin----------------------

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  form: FormGroup;
  experiencia: Experiencia[] = []

  constructor(private fb: FormBuilder,
    private sExperiencia: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.fb.group({
      id: [''],
      empresa: [''],
      posicion: [''],
      descripcion: [''],
      inicio: [''],
      fin: ['']

    });
  }

  ngOnInit(): void {
    //Obtengo el curso para editar desde la base de datos usando el parámetro id de la ruta
    const experienciaId = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.ver().subscribe(data => {
      this.experiencia = data;
      //Una vez que accede a los datos, encuentra el elemento con la misma identificación
      //para parchear los campos de formulario con su información.
      const element = this.experiencia.find(item => item.id === parseInt(experienciaId));
      this.form.patchValue({
        id: element?.id,
        empresa: element?.empresa,
        posicion: element?.posicion,
        descripcion: element?.descripcion,
        inicio: element?.inicio,
        fin: element?.fin,
      });
    });
  }


  get Experiencia() {
    return this.form.get("experiencia")
  }

  get Empresa() {
    return this.form.get("empresa")
  }

  get Posicion() {
    return this.form.get("posicion")
  }

  get Descripcion() {
    return this.form.get("descripcion")
  }

  get Inicio() {
    return this.form.get("inicio")
  }

  get Fin() {
    return this.form.get("fin")
  }

  onEnviar() {
    const experiencia: Experiencia = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      empresa: this.form.value.empresa,
      posicion: this.form.value.posicion,
      descripcion: this.form.value.descripcion,
      inicio: this.form.value.inicio,
      fin: this.form.value.fin,
    };
    this.sExperiencia.modificar(experiencia).subscribe(() => {
      console.log(experiencia);
    })
    alert("Experiencia cargada correctamente!")
    this.router.navigate(['portfolio']);
  }

}
