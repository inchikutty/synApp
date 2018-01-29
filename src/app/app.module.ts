import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { ExtPostService } from './ext-post.service';
import{ AdminComponent} from './admin/admin.component';
import { ExtAppEventListComponent } from './exteventlist/ext-app-event-list.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './admin/auth/auth.component';
import { CreateComponent } from './admin/create/create.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { UpdateComponent } from './admin/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    AdminComponent,
    ExtAppEventListComponent,
    AuthComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [PostService, ExtPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
