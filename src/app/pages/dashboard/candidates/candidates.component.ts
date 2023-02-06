import { Component } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { User } from 'src/app/shared/interfaces/User';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
})
export class CandidatesComponent {
  pagination = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
  };

  Candidates: User[] = [];

  // pagination
  handlePageChanged(event: any) {
    this.pagination.currentPage = event;
    this.CandidateService.getCandidates(event).subscribe((res: any) => {
      this.Candidates = res.data;
      this.pagination.totalItems = res.lastPage;
      this.pagination.itemsPerPage = 10;
      this.pagination.currentPage = res.pageNumber;
    });
  }

  constructor(private CandidateService: CandidateService) {}
  ngOnInit(): void {
    this.CandidateService.getCandidates().subscribe((res: any) => {
      console.log(res);
      this.Candidates = res.data;
      this.pagination.totalItems = res.lastPage;
      this.pagination.itemsPerPage = 10;
      this.pagination.currentPage = res.pageNumber;
    });
  }

  searchText: string = '';

  // create method call custom method
  onSerachTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText);
  }
}
