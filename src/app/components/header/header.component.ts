import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

declare interface RouteInfo {
  path: string;
  title: string;
  //icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'home',  /*icon: 'dashboard',*/ class: '' },
  { path: '/products', title: 'available artwork',  /*icon:'content_paste',*/ class: '' },
  { path: '/months-painting', title: 'painting of the month',  /*icon:'content_paste',*/ class: '' },
  { path: '/contact', title: 'contact',  /*icon:'location_on',*/ class: '' },
//  { path: '/user-profile', title: 'Contact',  /*icon:'person',*/ class: '' },
];

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {  
    public menuItems: any[];
    public totalItem : number =0;
    public searchTerm : string = '';

  constructor(private cartService :CartService) {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  ngOnInit():void{
    this.cartService.getProducts()
    .subscribe(res =>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}






// import { CartService } from 'src/app/services/cart.service';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {

//   public totalItem : number =0;
//   public searchTerm : string = '';

// constructor(private cartService :CartService) {
// }

// ngOnInit():void{
//   this.cartService.getProducts()
//   .subscribe(res =>{
//     this.totalItem = res.length;
//   })
// }

// search(event:any){
//   this.searchTerm = (event.target as HTMLInputElement).value;
//   console.log(this.searchTerm);
//   this.cartService.search.next(this.searchTerm);
// }


// }
