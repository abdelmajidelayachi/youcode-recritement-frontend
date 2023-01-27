import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
    
    // ReactiveFormsModule,
    // FormsModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
  
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthenticationModule { }
