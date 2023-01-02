import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PostsComponent } from './posts/posts.component';

// an array of objects
const routes: Routes = [
  { path:'',component:MainComponent },
  { path:'home',component:HomeComponent },
  { path:'about',component:AboutComponent },
  { path:'contact',component:ContactComponent },
  { path:'posts',component:PostsComponent },
  { path:'gallery',component:GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
