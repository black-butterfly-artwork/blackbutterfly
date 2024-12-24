import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public firstName!: string;
  public lastName!: string;
  public emailAddress!: string;
  public message!: string;
  http: any;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mdknjboz',
      { name: this.firstName, replyto: this.emailAddress, message: this.message },
      { 'headers': headers }).subscribe(
        (response: any) => {
          console.log(response);
        }
      );
  }

}
