import { IndexComponent } from "../../base/index/index.component";
import { CartProductsComponent } from "./cart-products/cart-products.component";
import { FavouriteProductsComponent } from "./favourite-products/favourite-products.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { Routes } from "@angular/router";

import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { FroomAdminComponent } from "./froom-admin/froom-admin.component";
import { FroomOrdersComponent } from "./froom-admin/components/froom-orders/froom-orders.component";

export const ProductRoutes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        component: IndexComponent,
      },
      {
        path: "all-products",
        component: ProductListComponent,
      },
      {
        path: "froom-admin",
        component: FroomAdminComponent,
      },
      {
        path: "favourite-products",
        component: FavouriteProductsComponent,
      },
      {
        path: "cart-items",
        component: CartProductsComponent,
      },
      {
        path: "froom-orders",
        component: FroomOrdersComponent,
      },
      {
        path: "checkouts",
        loadChildren: () =>
          import("./checkout/checkout.module").then((m) => m.CheckoutModule),
      },
      {
        path: "product/:id",
        component: ProductDetailComponent,
      },
    ],
  },
];
