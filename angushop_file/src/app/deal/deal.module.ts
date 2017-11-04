import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Dependencies
import { 
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSliderModule,
    MatTabsModule,
    MatInputModule,
    MatSnackBarModule
} from '@angular/material';
import 'hammerjs';
import { CustomFormsModule } from 'ng2-validation';

// Angushop Library module
import { libModule } from '../lib/lib.module';
import { dealService } from '../lib/service/deal.service';
import { MatchHeightDirective } from '../lib/directive/match-height.directive';

// Product Component
import { DashboardProdut } from './dashboard/dashboard.component';
import { DetailDealComponent } from './detail-product/detail-product.component';
import { Product3Component } from './product3/product3.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { CookieService } from '../lib/service/cookie.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatChipsModule,
        MatSliderModule,
        MatTabsModule,
        MatInputModule,
        FormsModule,
        libModule,
        RouterModule,
        MatSnackBarModule,
        CustomFormsModule  
    ],
    declarations: [ 
        DashboardProdut,
        DetailDealComponent,
        Product3Component,
        ReceiptComponent
    ],
    providers: [CookieService],        
    exports: [ 
        DashboardProdut
    ]
})
export class DealModule { }
