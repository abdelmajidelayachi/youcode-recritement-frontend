import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/services/hr.service';

@Component({
  selector: 'app-add-hr-modal',
  templateUrl: './add-hr-modal.component.html',
  styleUrls: ['./add-hr-modal.component.css']
})
export class AddHrModalComponent {

  @Output() closeModalAddHr = new EventEmitter<boolean>();

  addHrForm !: FormGroup;
  
  constructor(private fb: FormBuilder, private hrService: HrService) { 
    this.addHrForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    },
    );
    
   }



   get firstName() {
      return this.addHrForm.get('firstName');
    }

    get lastName() {
      return this.addHrForm.get('lastName');
    }

    get email() {
      return this.addHrForm.get('email');
    }

    get password() {
      return this.addHrForm.get('password');
    }

    get confirmPassword() {
      return this.addHrForm.get('confirmPassword');
    }

    closeModal() {
    this.closeModalAddHr.emit();
  }

  handleSaveHr() {
    this.hrService.addHr(this.addHrForm.value).subscribe(res => {
      console.log(res)
    });
    
  }

}
