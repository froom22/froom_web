import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { FroomService } from 'src/app/shared/services/froom/froom.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {

  products: Product[];
  selectedFroomZip: any[];
  selectedFroomLocation: any; 
  constructor(private productService: ProductService, private froomService: FroomService) { }

  ngOnInit(): void {

    this.products = this.productService.getLocalCartProducts();
    this.selectedFroomZip = this.productService.getSelectedFroomZipID();
    
    this.froomService.getFroomForUUID(this.selectedFroomZip[0])
    .subscribe(data=> {
      this.selectedFroomLocation = data;
      console.log(this.selectedFroomLocation);
    }); 
  }

  paymentDone() {
    console.log('payment Done ');
    
  }



}
