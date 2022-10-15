import { Component, OnInit } from '@angular/core';
import { FroomService } from 'src/app/shared/services/froom/froom.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-froom-checkout',
  templateUrl: './froom-checkout.component.html',
  styleUrls: ['./froom-checkout.component.scss']
})
export class FroomCheckoutComponent implements OnInit {

  policyDisplay: boolean;
  zipSelection: boolean;
  zipID: any;
  froomLocationsData: any[];
  constructor(private froomService: FroomService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.policyDisplay = true;
    this.zipSelection = false; 
  }

  acceptPolicy() {
    this.policyDisplay = false; 
    this.zipSelection = true;
  } 

  fetchLocations(){
    this.froomService.getFroomLocations(this.zipID).subscribe(data=>
      {
        if(data) {
          this.froomLocationsData = Object.values(data) ; 
          this.froomLocationsData.map(d=>d.stores = JSON.parse(d.stores));
          if(this.froomLocationsData.length > 0) {
            this.zipSelection = false; 
          }

          this.toast.success('Froom Locations found',this.froomLocationsData.length + ' Location(s) Found for the Zip '+this.zipID);
        }
      }, error => {
        console.error(error);
        this.toast.error('ERROR','Error occurred while getting the Froom Locations');
      });
    
  }

}
