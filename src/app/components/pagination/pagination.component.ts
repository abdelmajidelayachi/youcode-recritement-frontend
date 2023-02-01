import { Component } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Output() pageChanged = new EventEmitter<number>();
  @Input() totalItems !: number;
  @Input() itemsPerPage = 10;
  @Input() currentPage = 1;
  
  handleArrayPages = (items:number) => Array(items).fill(0).map((x, i) => i+1)
  
  handlePageChanged(event: any) {
    this.pageChanged.emit(event);
  }

  handleNextPage() {
    if (this.currentPage < this.totalItems) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }

  handlePreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }
  
  constructor() {
    console.log(this.totalItems);
   }

}
