import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/services/hr.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  showAddHrModal = false;
  pagination = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0
  }

  hrs : User[] = [];

  handleShowAddHrModal() {
    this.showAddHrModal = !this.showAddHrModal;
  }
  
  handleHideAddHrModal() {
    this.showAddHrModal = false;
  }

  handleHrAdded() {
    this.hrService.getHrs().subscribe((res:any) => {
      console.log(res);
      this.hrs = res;
      this.showAddHrModal = false;
    })
  }

  // pagination
  handlePageChanged(event: any) {
    this.pagination.currentPage = event;
    this.hrService.getHrs(event).subscribe((res:any) => {
      this.hrs = res.data;
      this.pagination.totalItems = res.lastPage;
      this.pagination.itemsPerPage = 10;
      this.pagination.currentPage = res.pageNumber;
    })
  }

  constructor(private hrService: HrService) { }
  ngOnInit(): void {
    this.hrService.getHrs().subscribe((res:any) => {
      console.log(res);
      this.hrs = res.data;
      this.pagination.totalItems = res.lastPage;
      this.pagination.itemsPerPage = 10;
      this.pagination.currentPage = res.pageNumber;
    })    
  }
    




}
