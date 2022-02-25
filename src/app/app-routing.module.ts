import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesFormComponent } from './pages/estudiantes-form/estudiantes-form.component';
import { EstudiantesListComponent } from './pages/estudiantes-list/estudiantes-list.component'


const routes: Routes = [
  {path:'',component:EstudiantesListComponent},
  {path:'list-estudiante',component:EstudiantesListComponent},
  {path:'crear-estudiante',component:EstudiantesFormComponent},
  {path:'form-estudiante/:id',component:EstudiantesFormComponent},
  { path: '**',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
