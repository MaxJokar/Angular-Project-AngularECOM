import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { ContactService } from '../services/contact.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  //isCallingAPI: for bootstrap spinner I/O bond Operation fetching from server
  isCallingAPI: boolean = false ;
  // Determiner to get data True/False
  isSubmitted:boolean = false ;
  name:string = '' ;
  email:string = '' ;
  desc:string = '' ;
  // viewchild helps to introduce input in contact.comp.html to components
  @ViewChild('txtName') txtName?:ElementRef // can hold a reference to DOM
  @ViewChild('txtEmail') txtEmail?:ElementRef
  @ViewChild('txtDescription') txtDescription?:ElementRef

  constructor(private service:ContactService ,private  _snackBar:MatSnackBar) { }


  ngOnInit(): void {

  }


  sendForm() {

    this.isCallingAPI = true ;
    // api is called by :sendContactForm
    this.service.sendContactForm({
      name: this.txtName!.nativeElement.value,
      email: this.txtEmail!.nativeElement.value,
      description: this.txtDescription!.nativeElement.value,
    }).subscribe(output=> {
      console.log("server is working " , output); // we get data from Server in console
      this.isCallingAPI = false ;
      if(output.status) {
        this.name = this.txtName!.nativeElement.value ;
        this.email = this.txtEmail!.nativeElement.value ;
        this.desc = this.txtDescription!.nativeElement.value ;
        this.isSubmitted =true ;

        this._snackBar.open(output.message!,'dismiss' ,{
          duration:3000
        })



      }





      // to get the response of our contact-form

    });

  }
}
