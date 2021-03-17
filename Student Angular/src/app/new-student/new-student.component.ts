import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})

export class NewStudentComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private studentService:StudentService,private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      owner: new  FormControl('',[Validators.required])
    })
  }

  insertData() {
    console.log("In insert Data");
    if(this.formGroup.valid) {
        this.studentService.createStudent(this.formGroup.value).subscribe(result => {
          if(result != null) {
            alert("Inserted Successfully " + result);
            this.router.navigate(['studentlist']);
          }
          else {
            alert("Error: " + result);
          }
        });
        //this.router.navigate(['studentlist']);
    }
    
  }

}