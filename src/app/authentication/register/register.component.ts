import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {map} from "rxjs/operators"
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private authService: AuthService, private router : Router) { 
   this.registerForm = new FormGroup({
    firstName: new FormControl(null,   [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    lastName: new FormControl(null,   [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    email: new FormControl(null,   [Validators.required,Validators.email]),
   password: new FormControl(null,[Validators.required, Validators.minLength(6), Validators.maxLength(20)])
   });
   }
  ngOnInit(): void {
   }
   
   get firstName(){
    return this.registerForm.get('firstName');
    }
    get lastName(){
    return this.registerForm.get('lastName');
    }

   get email(){
    return this.registerForm.get('email');
   }
    get password(){
    return this.registerForm.get('password');
    }

    submitLogin(){
      this.authService.registerAuth(this.registerForm.value).subscribe(
        (data) => {
          this.router.navigate(['/auth/login']);
        },
        (error) => {
          alert(error.error.errors[0]);
        }
      );
      
    }

}
