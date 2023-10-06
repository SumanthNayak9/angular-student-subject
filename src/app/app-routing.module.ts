import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/list/list.component';
import { SubjectsComponent } from './subjects/list/list.component';
import { AddComponent as StudentAddComponent } from './students/add/add.component';
import { AddComponent as SubjectAddComponent } from './subjects/subadd/add.component';
import { UpdateComponent as StudentUpdateComponent } from './students/update/update.component';               
import { UpdateComponent as SubjectUpdateComponent } from './subjects/subupdate/update.component';
import { EditStudentComponent } from './students/edit/edit.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'students/add',
    component: StudentAddComponent
  },
  {
    path: 'students/update/:id',
    component: StudentUpdateComponent
  },
  {
    path: 'subjects/add',
    component: SubjectAddComponent
  },
  {
    path: 'subjects/update',
    component: SubjectUpdateComponent
  },
  {
    path: 'students/edit/:id',
    component: EditStudentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
