import { CandidateService } from './../../../services/candidate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-motivation',
  templateUrl: './letter-motivation.component.html',
  styleUrls: ['./letter-motivation.component.css'],
})
export class LetterMotivationComponent implements OnInit {
  constructor(private candidateService: CandidateService) {}

  motivation_letter: string = '';

  ngOnInit(): void {
    this.getMotivationLetter();
  }

  uploadMotivationLetter(event: any): void {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    this.candidateService.uploadMotivationLetter(formData).subscribe({
      next: (response) => {
        console.log(response);
        this.getMotivationLetter();
      },
      error: (error) => {
        console.log('error => : ', error);
      },
    });
  }

  getMotivationLetter(): void {
    this.candidateService.getMotivationLetter().subscribe({
      next: (response) => {
        // console.log(response);
        this.motivation_letter = response.path;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
