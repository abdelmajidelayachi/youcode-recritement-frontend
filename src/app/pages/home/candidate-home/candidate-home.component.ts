import { CandidateService } from './../../../services/candidate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-home.component.html',
  styleUrls: ['./candidate-home.component.css'],
})
export class CandidateHomeComponent implements OnInit {
  cv: string = '';
  id_document: string = '';
  constructor(private candidateService: CandidateService) {}

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
        this.id_document = response.id_document;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
