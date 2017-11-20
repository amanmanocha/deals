import { Component } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { AuthService } from './../auth/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { Card } from 'app/lib/service/data/card';

@Component({
  selector: 'card-form',
  templateUrl: './card-form.component.html'
})
export class CardFormComponent {

  API_URL = 'http://apidealpelo.burrow.io';
  message: string;

  constructor(private router: Router, public auth: AuthService, public http: Http, public authHttp: AuthHttp, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }


  model = new Card('', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.message = '';
    this.model.location = 'Noida';
    this.spinnerService.show();
    this.authHttp.post(`${this.API_URL}/cards`, this.model)
      .map(res => res.json())
      .subscribe(
      data => {
        this.message = data;
        this.spinnerService.hide();
        this.model.bank = "";
        this.router.navigate(['/ping']);
      },
      error => {
        this.message = error;
        this.spinnerService.hide();
        this.router.navigate(['/ping']);        
      }
      );
  }
}