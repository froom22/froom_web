import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { FroomService } from 'src/app/shared/services/froom/froom.service';

@Component({
  selector: 'app-froom-orders',
  templateUrl: './froom-orders.component.html',
  styleUrls: ['./froom-orders.component.scss']
})
export class FroomOrdersComponent implements OnInit {

  orders: any;
  orderDetails: any;
  productDetails: Product[];
  finalProductDetails: Product[];
  froomLocationsData: any[];

	constructor(private froomService: FroomService) {
		
	}

  ngOnInit(): void {
    this.froomService.getAllFroomOrders()
    .subscribe(data=> 
      {
        if(data) {
          
          this.orders = data; 
        }
      }, error=> {
        console.error(error);
        
      }
      );
    
  }

  fetchOrderDetails(orderData) {
    this.froomService.getFroomOrderForUUID(orderData.uuID)
    .subscribe(data=> {
      this.orderDetails = {};
      if(data) {
        this.orderDetails = data;
        this.productDetails = JSON.parse("["+this.orderDetails.froomOrderDetails.productDetails+"]"); 
        this.productDetails.forEach(data=> {this.finalProductDetails = [];
          this.finalProductDetails.push(data); }); 
        this.finalProductDetails = JSON.parse ("["+this.finalProductDetails+"]");
        console.log(this.orderDetails);
        this.fetchLocations(this.orderDetails.froomZipId);
        
      }
    }, error=> {console.error(error);
    });
  }

  refreshFroomStatus(orderDetails) {
    alert("Fetching the latest Status of the Order "); 
    this.fetchOrderDetails(orderDetails);
  }

  fetchLocations(zipID){
    this.froomService.getFroomLocations(zipID).subscribe(data=>
      {
        if(data) {
          this.froomLocationsData = Object.values(data) ; 
          this.froomLocationsData.map(d=>d.stores = JSON.parse(d.stores));
          // if(this.froomLocationsData.length > 0) {
          //   this.zipSelection = false; 
          // }

          // this.toast.success('Froom Locations found',this.froomLocationsData.length + ' Location(s) Found for the Zip '+this.zipID);
        }
      }, error => {
        console.error(error);
        // this.toast.error('ERROR','Error occurred while getting the Froom Locations');
      });
    
  }

  fetchLatestStatus() {
    alert('Fetch Latest Status');
  }

}
