import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from './../../../services/profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  updateForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(6),
      ]),
    });
    this.getProfile();
  }

  getProfile() {
    this.profileService
      .getOneCandidate(this.authService.getCurrentUserId())
      .subscribe(
        (res: any) => {
          this.updateForm.patchValue({
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateProfile(item: FormGroup) {
    console.log(item.value);
  }
}
