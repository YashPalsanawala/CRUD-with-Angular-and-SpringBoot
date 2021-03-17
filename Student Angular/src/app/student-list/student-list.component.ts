import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { StudentService } from "../student.service";
import { Student } from "../student";
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  //Students!: Observable<Student[]>;
  students:Observable<Student[]>|undefined;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  
  reloadData() {
    this.students = this.studentService.getStudentList();    
  }

  deleteData(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  newStudent() {
    this.router.navigate(['newstudents']); 
  }

  logOut() {
    this.router.navigate(['']);
  }

}
