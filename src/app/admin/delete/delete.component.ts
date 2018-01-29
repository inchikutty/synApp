// PostComponent - the parent component
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { Post } from '../../Post';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  private posts: Post[] = [];
  private errorMessage: any = '';

  constructor( private postService: PostService) {

  }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
   this.postService.getData()
          .subscribe(
              posts => this.posts = posts,
              error => this.errorMessage = <any>error);
  }
  deleteEvent(id){
    console.log(id);
    this.postService.deleteRecord(id)
           .subscribe(
               posts => this.posts = posts,
               error => this.errorMessage = <any>error);

  }

}
