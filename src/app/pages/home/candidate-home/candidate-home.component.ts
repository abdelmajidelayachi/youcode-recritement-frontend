import { CandidateService } from './../../../services/candidate.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-home.component.html',
  styleUrls: ['./candidate-home.component.css'],
})
export class CandidateHomeComponent implements OnInit {
  constructor(private candidateService: CandidateService) {}

  cv: string = '';

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
    this.candidateService.getCV().subscribe({
      next: (response) => {
        // console.log(response);
        this.cv = response.path;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
