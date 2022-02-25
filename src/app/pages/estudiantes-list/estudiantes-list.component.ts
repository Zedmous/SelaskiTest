import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estudiante } from 'src/app/core/models/Estudiante';
import { EstudiantesService } from 'src/app/core/services/estudiantes.service';

@Component({
  selector: 'app-estudiantes-list',
  templateUrl: './estudiantes-list.component.html',
  styleUrls: ['./estudiantes-list.component.css']
})
export class EstudiantesListComponent implements OnInit {
  listEstudiantes:Estudiante[]=[];
  constructor(
    private estudiantesService:EstudiantesService,
    private route:Router,
    private toastr: ToastrService
  ) {
    this.getAll();
   }

  ngOnInit(): void {
  }

  getAll(){
    this.estudiantesService.getEstudiantes().subscribe(data=>{
      this.listEstudiantes=data;
    },error=>{
      console.log(error);
    })
  }

  add(){
    this.route.navigate(['/crear-estudiante']);
  }
  delete(estudiante:Estudiante){
    console.log(estudiante)
    this.estudiantesService.eliminarEstudiante(estudiante.id).subscribe(()=>{
      this.toastr.success('Eliminado!', 'Registro Elimiando exitosamente!');
      this.getAll();
    },error=>{
      console.log(error);
    })
  }
}
