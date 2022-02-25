import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  route:string="/estudiantes";
  constructor(
    private http:HttpClient
    ) { }

    getEstudiantes():Observable<any>{
      console.log(`${environment.apiUrl}${this.route}`)
      return this.http.get(`${environment.apiUrl}${this.route}`);
    }

    getEstudiante(id:string):Observable<any>{
      return this.http.get(`${environment.apiUrl}${this.route}/${id}`);
    }

    agregarEstudiante(estudiante:Partial<Estudiante>):Observable<any>{
      return this.http.post(`${environment.apiUrl}${this.route}`,estudiante);
    }

    modificarEstudiante(id:string,estudiante:Partial<Estudiante>):Observable<any>{
      return this.http.put(`${environment.apiUrl}${this.route}/${id}`,estudiante);
    }

    eliminarEstudiante(id:string):Observable<any>{
      return this.http.delete(`${environment.apiUrl}${this.route}/${id}`);
    }
    
    
}
