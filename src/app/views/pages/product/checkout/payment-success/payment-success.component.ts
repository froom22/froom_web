import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FroomService } from 'src/app/shared/services/froom/froom.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShippingService } from 'src/app/shared/services/shipping.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {

  products: Product[];
  selectedFroomZip: any[];
  selectedFroomLocation: any; 
  shippingDetails: any; 
  merchantDetails: {
    "merchantName": "Sterling Company",
    "merchantDetails": "Testing Details "
  }

  // froomOrderObj = {zipUUID: any, }
  froomOrderObj:  {
    zipUUID: any,
    transactionID: any,
    orderDetails: any[], 
    customerDetails: any,
    merchantDetails: any
  };
  orderDetails:  {
    productDetails: any
  };
  custDtls : {
    "userName": "Sharath",
    "userEmail": "catchshar@gmail.com",
    "userConsent": "Y",
    "userPhoneNumber": "908989800",
    "userAddress": "HNO 222, Test, Hyderabad",
    "userRemarks": "Noything"
  };
  isPaymentDone = false; 
  transactionID: number;
  froomReferenceID: any;
  constructor(private productService: ProductService, private froomService: FroomService,
    private shipDtls: ShippingService, private toast: ToastrService) { }

  ngOnInit(): void {

    this.products = this.productService.getLocalCartProducts();
    this.selectedFroomZip = this.productService.getSelectedFroomZipID();
    // this.shippingDetails = this.shipDtls.getshippings();
    
    
    this.froomService.getFroomForUUID(this.selectedFroomZip[0])
    .subscribe(data=> {
      this.selectedFroomLocation = data;
      console.log(this.selectedFroomLocation);
    }); 
  }

  paymentDone() {
   this.custDtls = {
    "userName": "Sharath",
    "userEmail": "catchshar@gmail.com",
    "userConsent": "Y",
    "userPhoneNumber": "908989800",
    "userAddress": "HNO 222, Test, Hyderabad",
    "userRemarks": "Noything"
  };
  this.merchantDetails = {
    "merchantName": "Sterling Company",
    "merchantDetails": "Testing Details "
  }
    this.orderDetails = {"productDetails": JSON.stringify(this.products)};
    // console.log(this.shippingDetails.getUser());
    this.transactionID = Math.random();
    this.froomOrderObj = {"zipUUID": this.selectedFroomZip[0], "transactionID": this.transactionID, "customerDetails": this.custDtls, 
  "merchantDetails": this.merchantDetails, "orderDetails": [this.orderDetails]}
    
 
  console.log('user final object ');
  console.log(this.froomOrderObj); 
   this.froomService.addFroomOrder(this.froomOrderObj)
   .subscribe(data=>{console.log(data);
    this.isPaymentDone = true; 
    this.froomReferenceID = data;
    this.toast.success("Sent Request to Froom", true);
   }, error=> {console.error(error);
    this.toast.error("Failed to Send Request to Froom. Try again later.", false);
   });
    
    
    
  }



}
