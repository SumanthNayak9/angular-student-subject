import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/list/list.component';
import { SubjectsComponent } from './subjects/list/list.component';
import { AddComponent as StudentAddComponent } from './students/add/add.component';
import { AddComponent as SubjectAddComponent } from './subjects/subadd/add.component';
import { UpdateComponent as StudentUpdateComponent } from './students/update/update.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditStudentComponent } from './students/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    SubjectAddComponent,
    EditStudentComponent,
    
    // StudentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
