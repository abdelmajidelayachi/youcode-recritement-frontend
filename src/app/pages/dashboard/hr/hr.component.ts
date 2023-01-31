import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/services/hr.service';
import { User } from 'src/app/shared/interfaces/User';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  showAddHrModal = false;
  hrs : User[] = [];

  handleShowAddHrModal() {
    this.showAddHrModal = !this.showAddHrModal;
  }
  
  handleHideAddHrModal() {
    this.showAddHrModal = false;
  }

  constructor(private hrService: HrService) { }
  ngOnInit(): void {
    this.hrService.getHrs().subscribe((res:any) => {
      console.log(res);
      this.hrs = res;
    })    
  }



}
