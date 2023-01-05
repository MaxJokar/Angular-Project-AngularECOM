import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoInterface } from '../models/photo.model';
import { PostInterface } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})



export class GalleryService {

  //private api:string='https://contact-form.free.beeceptor.com/api/gallery/';
  private api: string = 'https://picsum.photos/v2/list?limit=10&page='


  constructor(private http: HttpClient) { }


  // get datas and  bring them
  getPhotos(page:number =1): Observable<PhotoInterface[]> {
    return this.http.get(this.api.concat(page.toString())) as Observable<PhotoInterface[]> ;
  }
}
// checked