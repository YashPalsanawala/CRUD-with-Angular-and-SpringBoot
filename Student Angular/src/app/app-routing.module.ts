import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NewStudentComponent } from './new-student/new-student.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'studentlist', component : StudentListComponent},
  {path : 'newstudents', component : NewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
