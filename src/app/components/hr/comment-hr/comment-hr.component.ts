import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-hr',
  templateUrl: './comment-hr.component.html',
  styleUrls: ['./comment-hr.component.css']
})
export class CommentHrComponent {
  @Input() idDocument: string = '';
  comments: any = [];
  currentUser: any = this.authService.getCurrentUserFromLocal();
  formComment !: FormGroup;

  constructor(
    private commentService: CommentService,
    private authService: AuthService, private formBuilder: FormBuilder
  ) {
    this.formComment = this.formBuilder.group({
      body: ['', Validators.required],
    });

    
  }

  ngOnChanges(changes: any) {
    if (changes.idDocument && this.idDocument != '') {
      this.getAllComments();
    } else {
      console.log('id still empty');
    }
  }


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

  addComment() {
    if (this.formComment.valid) {
      let data = {
        body: this.formComment.value.body,
      };
      this.commentService.addComment(this.idDocument, data).subscribe(
        (res: any) => {
          console.log(res);
          this.getAllComments();
          this.formComment.reset();
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

}
