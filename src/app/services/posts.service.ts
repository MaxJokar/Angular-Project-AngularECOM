import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { PostInterface } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class PostsService {
  private api:string='https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<PostInterface[]> {
    return this.http.get(this.api) as  Observable<PostInterface[]> ;
  }


}
