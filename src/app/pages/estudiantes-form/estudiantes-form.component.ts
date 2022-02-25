import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estudiante } from 'src/app/core/models/Estudiante';
import { EstudiantesService } from 'src/app/core/services/estudiantes.service';

@Component({
  selector: 'app-estudiantes-form',
  templateUrl: './estudiantes-form.component.html',
  styleUrls: ['./estudiantes-form.component.css']
})
export class EstudiantesFormComponent implements OnInit {
  id:string|any;
  form:FormGroup;
  titulo="Registrando Estudiante";
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private toastr: ToastrService,
    private estudianteService:EstudiantesService,
    private aRoute:ActivatedRoute
    ) { 
    this.form=this.fb.group({
      nombre:['',Validators.required],
      edad:['',Validators.required],
      apellido:['',Validators.required],
      carrera:['',Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');

  }
  ngOnInit(): void {
    this.esEditar();
  }


  agregar(){
    const DATOS:Partial<Estudiante>={
      nombre:this.form.get('nombre')?.value,
      apellido:this.form.get('apellido')?.value,
      edad:this.form.get('edad')?.value,
      carrera:this.form.get('carrera')?.value
    };

    if(this.id!==null){
      this.estudianteService.modificarEstudiante(this.id,DATOS).subscribe(
        data=>{
          this.toastr.info('Datos del estudiante actualizados exitosamente', 'Estudiante Actualizado');
          this.router.navigate(['/']);
        },error=>{
          console.log(error);
          this.form.reset();
        }
      )
    }else{
      this.estudianteService.agregarEstudiante(DATOS).subscribe(
        data=>{
          this.toastr.info('Datos del estudiante guardados exitosamente', 'Estudiante Guardado');
          this.router.navigate(['/']);
        },error=>{
          console.log(error);
          this.form.reset();
        }
      )
    }


    
  }

  esEditar(){
    if(this.id!==null){//este metodo servira para cargar los datos del contacto que editaremos
      this.titulo="Editando Estudiante";
      this.estudianteService.getEstudiante(this.id).subscribe(data=>{
        this.form.setValue({
          nombre:data.nombre,
          apellido:data.apellido,
          edad:data.edad,
          carrera:data.carrera
        });
      });
    }
  }
}
