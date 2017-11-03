import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Home
import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';

// Products
import { DashboardProdut } from './deal/dashboard/dashboard.component';
import { DetailProductComponent } from './deal/detail-product/detail-product.component';
import { product1Component } from './deal/product1/product1.component';
import { Product2Component } from './deal/product2/product2.component';
import { Product3Component } from './deal/product3/product3.component';
import { Product4Component } from './deal/product4/product4.component';
import { Product5Component } from './deal/product5/product5.component';
import { CartComponent } from './deal/cart/cart.component';
import { ShippingComponent } from './deal/shipping/shipping.component';
import { ReceiptComponent } from './deal/receipt/receipt.component';
import { WishlistComponent } from './deal/wishlist/wishlist.component';
import { CompareComponent } from './deal/compare/compare.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';

// ELements
import { DashboardELementComponent } from './element/dashboard-element/dashboard-element.component';
import { DealElement } from './element/product/product.component';
import { FormControlComponent } from './element/form-control/form-control.component';
import { LayoutComponent } from './element/layout/layout.component';
import { ButtonComponent } from './element/button/button.component';
import { GridComponent } from './element/grid/grid.component';
import { TyphographyComponent } from './element/typhography/typhography.component';
import { HelperComponent } from './element/helper/helper.component';
import { CallbackComponent } from './callback/callback.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: Home1Component },
    { path: 'callback',  component: CallbackComponent },
    { path: 'home2',  component: Home2Component },
    { path: 'product3', component: Product3Component },
    { path: 'p/:detail', component: DetailProductComponent },
    // { path: 'shop',  component: DashboardProdut, 
    //   children : [
    //     { path: '', redirectTo: '/shop/product1', pathMatch: 'full'  },
    //     { path: 'product3', component: Product3Component },
    //     { path: 'p/:detail', component: DetailProductComponent }
    //   ]  
    // },
    { path: 'element',  component: DashboardELementComponent, 
      children : [
        { path: '', redirectTo: '/element/product', pathMatch: 'full'  },
        { path: 'product', component: DealElement },
        { path: 'form', component: FormControlComponent },
        { path: 'layout', component: LayoutComponent },
        { path: 'button', component: ButtonComponent },
        { path: 'grid', component: GridComponent },
        { path: 'typography', component: TyphographyComponent },
        { path: 'helper', component: HelperComponent },
      ]  
    },
    { path: 'contact',  component: ContactComponent },
    
    { path: '404',  component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}