import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list',
  template: `
  <div>
        <mat-card *ngFor="let post of posts">
            <mat-card-title>{{post.title}}</mat-card-title>
            <mat-card-subtitle>{{post.venue}}</mat-card-subtitle>
            <mat-card-subtitle>USD {{post.price}}</mat-card-subtitle>
            <mat-card-subtitle>{{post.date}}</mat-card-subtitle>
            <mat-card-content>{{post.body}}</mat-card-content>
        </mat-card>
</div>
  `,
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
private posts: Post[] = [];
private errorMessage: any = '';
  constructor(private postService: PostService) {

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
}
