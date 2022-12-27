// using services we can connect front to back and work as REST , service major duty
//send data to the Server and get Responce


import { Injectable } from '@angular/core';
import { HttpClient}  from  '@angular/common/http' ;
import { ContactFeedbackInterface, ContactInterface } from '../models/contact-form.model';
import { Observable }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class ContactService {

  private api: string = 'https://angular-test.free.beeceptor.com/api/contact-form' ;

  constructor(private http: HttpClient) { }

  // when api is called  observable(wait till get the reuslt then go to the next line)  object returns in contact.ts
  sendContactForm(data:ContactInterface): Observable<ContactFeedbackInterface>  {
    return this.http.post(this.api, data) as Observable<ContactFeedbackInterface>
  }


}
