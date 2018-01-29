
//AdminComponent - the parent component
import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin.component';
import { PostService } from '../../post.service';
import { Post } from '../../post';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private posts: Post[] = [];
  private errorMessage: any = '';

  constructor( private postService: PostService) {

  }
  //post = new PostService


  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
   this.postService.getData()
          .subscribe(
              posts => this.posts = posts,
              error => this.errorMessage = <any>error);
  }
  onSubmit(data, id){
    this.postService.updateRecord(data, id)
           .subscribe(
               posts => this.posts = posts,
               error => this.errorMessage = <any>error);
   }
}
