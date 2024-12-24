import { CartService } from 'src/app/services/cart.service';
import { Component, Output} from '@angular/core';
import { PaypalComponent } from 'src/app/components/payment/paypal/paypal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  /**
   *
   */
  public products: any = []
  public cartItems: any = []
  public grandTotal: number = 0;
  public showCheckoutView: boolean;

  constructor(public cartService : CartService) {
    this.showCheckoutView = false;
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res =>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    this.cartItems = this.cartService.getCartItems();
  }
  removeItem(item : any){
   this.cartService.removeCartItem(item)
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
  readyToCheckout(){
    this.showCheckoutView = !this.showCheckoutView;
  }
}
