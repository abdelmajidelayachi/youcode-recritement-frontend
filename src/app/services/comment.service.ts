import { Constants } from './../shared/Constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  addComment(idDocument: string, data: any): Observable<any> {
    return this.http.post(
      Constants.apiEndPoint.comment.addComment.replace(':id', idDocument),
      data
    );
  }

  getAllComments(idDocument: string): Observable<any> {
    return this.http.get(
      Constants.apiEndPoint.comment.getAllComments.replace(
        ':id',
        idDocument.toString()
      )
    );
  }
}
