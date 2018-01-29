//AdminComponent - the parent component


import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin.component';
import { PostService } from '../../post.service';
import { Post } from '../../post';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  private posts: Post[] = [];
  private errorMessage: any = '';

  constructor( private postService: PostService) {

  }
  //post = new PostService


  ngOnInit() {

  }
  onSubmit(form: NgForm){
    this.postService.submitted(form.value)
           .subscribe(
               posts => this.posts = posts,
               error => this.errorMessage = <any>error);
   }
}
