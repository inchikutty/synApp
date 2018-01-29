import { Component, OnInit } from '@angular/core';
import { ExtPostService } from '../ext-post.service';
import { Post } from '../Post';

@Component({
  selector: 'app-ext-app-list',
  template: `
  <div>
        <mat-card *ngFor="let post of posts">
            <mat-card-title>{{post.title}}</mat-card-title>
            <mat-card-subtitle>{{post.venue}}</mat-card-subtitle>
            <mat-card-content>{{post.body}}</mat-card-content>
        </mat-card>
</div>
  `,
  styleUrls: ['./ext-app-event-list.component.scss']
})

export class ExtAppEventListComponent implements OnInit {
private posts: Post[] = [];
private errorMessage: any = '';
  constructor(private postService: ExtPostService) {

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
