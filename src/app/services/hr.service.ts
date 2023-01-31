import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../shared/Constants';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private http: HttpClient) { }

  getHrs() {
    return this.http.get(Constants.apiEndPoint.hr.getHrs);
  }
  
  getHr(id: number) {
    return this.http.get(Constants.apiEndPoint.hr.getHr.replace(':id', id.toString()));
  }

  addHr(hr: any) {
    hr.role = 'hr';
    return this.http.post(Constants.apiEndPoint.hr.addHr, hr);
  }

  updateHr(hr: any) {
    return this.http.put(Constants.apiEndPoint.hr.updateHr.replace(':id', hr.id.toString()), hr);
  }

  deleteHr(id: number) {
    return this.http.delete(Constants.apiEndPoint.hr.deleteHr.replace(':id', id.toString()));
  }
  
}
