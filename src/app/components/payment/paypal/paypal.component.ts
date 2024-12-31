import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

declare var paypal: any;

@Component({
  selector: "app-paypal",
  templateUrl: "./paypal.component.html",
  styleUrls: ["./paypal.component.scss"]
})

export class PaypalComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  @Input() total: any;
  @Input() cartItems: any[];
  public showPaypalButtons: boolean = false;
  private data: any;
  public totalCost: number = 0;
  public orderComplete: boolean = false;
  public showSuccess: boolean = false;

  constructor() {
    //this.cartItems.forEach(num => { this.totalCost += num.price });
  }

  ngOnInit() {
    this.initConfig();
  }
  
  private initConfig(): void {
    
    this.totalCost = this.total + 5;
    paypal.Buttons({

      createOrder: (data: any, actions: any) => {

        return actions.order.create({

          purchase_units: [{ 

            amount: {

              currency_code: 'USD',

              value: this.totalCost.toString()

            }

          }]

        });

      },

      onApprove: (data: any, actions: any) => {

        return actions.order.capture().then((details: any) => {

          // Handle successful payment on your backend server using the order details

        });

      }

    }).render('#paypal-button-container'); 

  }

    // this.payPalConfig = {
    //   currency: 'USD',
    //   clientId: 'sb',
    //   createOrderOnClient: (data) => <ICreateOrderRequest>{
    //     intent: 'CAPTURE',
    //     purchase_units: [
    //       {
    //         amount: {
    //           currency_code: 'USD',
    //           value: this.total,
    //           breakdown: {
    //             item_total: {
    //               currency_code: 'USD',
    //               value: this.totalCost.toString()
    //             }
    //           }
    //         },
    //         items: [
    //           {
    //             name: 'Enterprise Subscription',
    //             quantity: '1',
    //             category: 'DIGITAL_GOODS',
    //             unit_amount: {
    //               currency_code: 'USD',
    //               value: this.totalCost.toString(),
    //             },
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   advanced: {
    //     commit: 'true'
    //   },
    //   style: {
    //     label: 'paypal',
    //     layout: 'vertical'
    //   },
    //   onApprove: (data, actions) => {
    //     console.log('onApprove - transaction was approved, but not authorized', data, actions);
    //     actions.order.get().then((details: any) => {
    //       console.log('onApprove - you can get full order details inside onApprove: ', details);
    //     });
    //   },
    //   onClientAuthorization: (data) => {
    //     console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    //     this.showSuccess = true;
    //   },
    //   onCancel: (data, actions) => {
    //     console.log('OnCancel', data, actions);
    //   },
    //   onError: err => {
    //     console.log('OnError', err);
    //   },
    //   onClick: (data, actions) => {
    //     console.log('onClick', data, actions);
    //   },
    // };
//}
}
