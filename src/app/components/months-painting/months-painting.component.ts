import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-months-painting',
  templateUrl: './months-painting.component.html',
  styleUrls: ['./months-painting.component.scss']
})
export class MonthsPaintingComponent {
  date: string;
  date_strings: string[];
  thisMonthsID: number;
  productList: any;
  paintingOfTheMonth: any;
  constructor(private api: ApiService) { 
    this.date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.date_strings = this.date.split('/');
    if(this.date_strings[1] == '12') {
      this.thisMonthsID = 12;
    } else if(this.date_strings[1] == '1') {
      this.thisMonthsID = 1;
    } else if(this.date_strings[1] == '2') {
      this.thisMonthsID = 2;
    } else if(this.date_strings[1] == '2') {
      this.thisMonthsID = 3;
    }
  }

  ngOnInit() {
    
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a:any)=>{
        if(a.id === this.thisMonthsID){this.paintingOfTheMonth=a;}
        else{a.id=1}
        Object.assign(a,{quantity:1,total:a.price})
      });
    });
  }
}
