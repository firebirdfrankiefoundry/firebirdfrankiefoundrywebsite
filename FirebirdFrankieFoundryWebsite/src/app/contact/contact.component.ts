import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { ApiService } from '../api-service.service';
import { ContactRequest } from '../models/contact-request.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public name: string = "";
  public surname: string = "";
  public companyName: string = "";
  public email: string = "";
  public phonePrefix: string = "";
  public phoneNumber: string = "";
  public category: string = "";
  public message: string = "";
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild('nameInput') nameInput: ElementRef;

  constructor(private apiService: ApiService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  submit(): void {
    let contactRequest = new ContactRequest();
    contactRequest.Category = this.category;
    contactRequest.Name = this.name + " " + this.surname;
    contactRequest.CompanyName = this.companyName;
    contactRequest.PhoneNumber = this.phonePrefix + " " + this.phoneNumber;
    contactRequest.Email = this.email;
    contactRequest.Message = this.message;


    this.apiService.contact(contactRequest).subscribe(response => {
      this.openSnackBar();
    }, err => {
      console.log(err);
      this.openSnackBar();
    }, () => {
    });
  }

  openSnackBar() {
    const snackbarRef = this._snackBar.open('Your message has been sent. I\'ll get back to you ASAP.', 'OK', {
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

    snackbarRef.afterDismissed().subscribe(() => {
      location.reload();
    });
  }
}
