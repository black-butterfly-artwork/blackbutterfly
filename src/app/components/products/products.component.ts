import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public productList: any;
  public filterCategory : any;
  searchKey:string = "";
  subjectArray: any[] = ["abstract", "animals", "religious", "nature", "figures"];
  public selectedSubject: string;
  sizeArray: any[] = ["small", "medium", "large", "extra large"];
  public selectedSize: string;
  filterFlag: boolean;

  
  constructor(private api: ApiService,private cartService : CartService) {
  }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any)=>{
        if(a.subject ==="Nature"){a.subject='Nature';}
        else if(a.subject ==="Figures"){a.subject='Figures';}
        else if(a.subject ==="Birds"){a.subject='Birds';}
        else if(a.subject ==="Animals"){a.subject='Animals';}
        else if(a.subject ==="Religious"){a.subject='Religious';}
        else{a.subject='Unknown'}
        Object.assign(a,{quantity:1,total:a.price})
      });
    });
    
    this.cartService.search.subscribe((val:any) => {
      this.searchKey = val;
    })
    this.selectedSubject = 'all';
    this.selectedSize = 'all';
    this.filterFlag = false;
  }

  addToCart(item :any){
   this.cartService.addtoCart(item)
  }

  setFilterFlag(){
    if(this.filterFlag == true) {
      this.filterFlag = false;
    } else {
      this.filterFlag = true;
    }
  }

  filter(){
    this.filterCategory = [];
    this.filterCategory = this.productList.filter((a:any)=>{
      if(a.subject == this.selectedSubject || this.selectedSubject=='All Subjects'){
        return a;
      }
    });
  }

  setSubjectFilter(subject: string){
    this.selectedSubject = subject;
  }
  
  setSizeFilter(size: string){
    this.selectedSize = size;
  }
}

