import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { dealService } from 'app/lib/service/deal.service';
import { Card } from 'app/lib/service/data/card';

@Component({
  selector: 'app-contact-offer-holders',
  templateUrl: './contact-offer-holders.component.html',
  styleUrls: ['./contact-offer-holders.component.scss']
})
export class ContactOfferHoldersComponent implements OnInit {

  constructor(public auth: AuthService, public dealService:dealService) { }

  ngOnInit() {
  }

}
