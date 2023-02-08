import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from '../../../services/profile.service';
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
    private authService: AuthService,
  ) {}

  imageFile: any = null;
  currentUser: any = null;

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
      .getProfileData()
      .subscribe(
        (res: any) => {
          console.log("res", res);
          this.updateForm.patchValue({
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
          });
          this.imageFile = res.image;
          this.currentUser = {
            id: res.id,
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            image: res.image,
          };
          if(this.currentUser!==null){
              localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateProfile(items: FormGroup) {
    this.profileService
      .updateCandidate(this.authService.getCurrentUserId(), items.value)
      .subscribe(
        (res: any) => {
          this.getProfile();
          // console.log(res);
          items.reset();
        },
        (error) => {
          this.getProfile();
          console.log(error);
        }
      );
  }

  uploadImage(event: any) {
    const formData = new FormData();
    formData.append('imageFile', event.target.files[0]);
    this.profileService.updateCandidateImage(formData).subscribe(
      (res: any) => {
        // console.log(res);
        this.getProfile();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
