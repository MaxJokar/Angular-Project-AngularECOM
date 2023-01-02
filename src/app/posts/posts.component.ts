import { Component,OnInit } from '@angular/core';
import { PostInterface } from '../models/post.model';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})



export class PostsComponent implements OnInit{

  posts?: Observable<PostInterface[]>;

  constructor(private service:PostsService) { }

  ngOnInit(): void {
    this.posts = this.service.getPosts(); //checked

  }
}
