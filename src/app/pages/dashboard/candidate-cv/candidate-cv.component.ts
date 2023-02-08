import { CandidateService } from '../../../services/candidate.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-cv.component.html',
  styleUrls: ['./candidate-cv.component.css'],
})
export class CandidateCvComponent implements OnInit {
  cv: string = '';
  id_document: string = '';
  constructor(private candidateService: CandidateService,private sanitizer: DomSanitizer ) {}

  ngOnInit(): void {
    this.getCV();
  }
  

  getCV(): void {
    const url = window.location.pathname;
    const id =  url.split('/')[3];
    this.candidateService.getCV(id).subscribe({
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
  
  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
