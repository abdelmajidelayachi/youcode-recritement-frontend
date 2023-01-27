import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private authService: AuthService) { 
   this.loginForm = new FormGroup({
    email: new FormControl(null,   [Validators.required,Validators.email]),
   password: new FormControl(null,[Validators.required, Validators.minLength(6), Validators.maxLength(20)])
   });
   }
  ngOnInit(): void {
   }
   
   get email(){
    return this.loginForm.get('email');
   }
    get password(){
    return this.loginForm.get('password');
    }

    submitLogin(){
      this.authService.loginAuth(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        (data:any) => {
          if(data){
            this.authService.setCredentials(data?.accessToken);
          }
        }
      );
      
    }

}
