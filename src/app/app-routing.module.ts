import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { AdminComponent} from './admin/admin.component';
import { AuthComponent } from './admin/auth/auth.component';
import { CreateComponent } from './admin/create/create.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { UpdateComponent } from './admin/update/update.component';
import { ExtAppEventListComponent } from './exteventlist/ext-app-event-list.component';

const routes: Routes = [
  { path: 'home-events', component: PostListComponent },
  //{ path: 'home-event/:id',      component: PostDetailComponent },
  {
    path: 'home-events',
    component: PostListComponent,
    data: { title: 'Home Events List' }
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'auth', component: AuthComponent },
      { path: 'create', component: CreateComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'delete', component: DeleteComponent },
    ],
    data: { title: 'Admin' }
  },
  {
    path: 'external-app-events',
    component: ExtAppEventListComponent,
    data: { title: 'External App Events' }
  },
  { path: '',
    redirectTo: '/home-events',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
