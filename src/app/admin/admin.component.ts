// PostComponent - the parent component


import { Component, OnInit } from '@angular/core';
//import { PostListComponent } from '../post-list/post-list.component';
//import { PostService } from '../post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  show: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
