import { CandidateService } from './../../../services/candidate.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-home.component.html',
  styleUrls: ['./candidate-home.component.css'],
})
export class CandidateHomeComponent implements OnInit {
  cv : SafeResourceUrl = '';
  id_document: string = '';
  constructor(private candidateService: CandidateService, private sanitizer: DomSanitizer, private authService : AuthService) {}

  ngOnInit(): void {
    this.getCV();
  }

  uploadCV(event: any): void {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    this.candidateService.uploadCV(formData).subscribe({
      next: (response) => {
        // console.log(response);
        this.getCV();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getCV(): void {
    const id = this.authService.getCurrentUserId();
    this.candidateService.getCV(id).subscribe({
      next: (response) => {
        // console.log(response);
        this.cv = this.sanitizer.bypassSecurityTrustResourceUrl(response.path);
        this.id_document = response.id_document;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
