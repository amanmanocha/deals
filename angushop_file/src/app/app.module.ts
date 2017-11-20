import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  Http, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PathLocationStrategy, LocationStrategy } from "@angular/common";
import { RouterModule } from '@angular/router';

// Dependencies
import { MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import 'hammerjs';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

// Compoenent
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { AppComponent } from './app.component';
import { SideComponent } from './side/side.component';
import { HomeModule } from './home/home.module';
import { DealModule } from './deal/deal.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { contactModule } from './contact/contact.module';

import { ElementModule } from './element/element.module';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

// Routing MOdule
import { AppRoutingModule } from './routing.module';

// Directive Height
import { FullscreenDirective } from './lib/directive/fullscreen.directive';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}
@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    NotFoundComponent,
    FullscreenDirective,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule,
    HomeModule,
    DealModule,
    ElementModule,
    contactModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    AuthService,
        {
          provide: AuthHttp,
          useFactory: authHttpServiceFactory,
          deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
