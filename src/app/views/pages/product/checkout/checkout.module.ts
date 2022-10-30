import { CheckoutRoutingModule } from "./checkout.routing";
import { SharedModule } from "../../../../shared/shared.module";
import { CheckoutNavbarComponent } from "./checkout-navbar/checkout-navbar.component";
import { ResultComponent } from "./result/result.component";
import { ProductsComponent } from "./products/products.component";
import { ShippingDetailsComponent } from "./shipping-details/shipping-details.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckoutComponent } from "./checkout.component";
import { BillingDetailsComponent } from "./billing-details/billing-details.component";
import { FroomCheckoutComponent } from './froom-checkout/froom-checkout.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

@NgModule({
  imports: [CommonModule, SharedModule, CheckoutRoutingModule],
  declarations: [
    CheckoutComponent,
    BillingDetailsComponent,
    ShippingDetailsComponent,
    ProductsComponent,
    ResultComponent,
    CheckoutNavbarComponent,
    FroomCheckoutComponent,
    PaymentSuccessComponent,
  ],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
