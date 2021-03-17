import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  loginProcess() {
    if(this.formGroup.valid) {
      this.auth.login(this.formGroup.value).subscribe(result=>{
        if(result != null) {
          //console.log(result);
          alert("Login Successfully: " + result);
          this.router.navigate(['studentlist']);
        }
        else {
          //console.log(result);
          alert("Errors: " + result);
        }
      })
    }

  }

}
