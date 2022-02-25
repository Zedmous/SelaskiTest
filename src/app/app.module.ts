import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudiantesListComponent } from './pages/estudiantes-list/estudiantes-list.component';
import { EstudiantesFormComponent } from './pages/estudiantes-form/estudiantes-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesListComponent,
    EstudiantesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
