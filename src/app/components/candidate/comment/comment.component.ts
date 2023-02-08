import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommentService } from './../../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit, OnChanges {
  @Input() idDocument: string = '';
  comments: any = [];
  currentUser: any = this.authService.getCurrentUserFromLocal();

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) {}

  ngOnChanges(changes: any) {
    if (changes.idDocument && this.idDocument != '') {
      this.getAllComments();
    } else {
      console.log('id still empty');
    }
  }

  ngOnInit(): void {}

  getAllComments() {
    this.commentService.getAllComments(this.idDocument).subscribe(
      (res: any) => {
        this.comments = res;
        // console.log(this.comments);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  formGroupComment: FormGroup = new FormGroup({
    body: new FormControl('', [Validators.required]),
  });

  addComment(formGroup: FormGroup) {
    if (formGroup.valid) {
      let data = {
        body: formGroup.value.body,
      };
      this.commentService.addComment(this.idDocument, data).subscribe(
        (res: any) => {
          console.log(res);
          this.getAllComments();
          formGroup.reset();
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
