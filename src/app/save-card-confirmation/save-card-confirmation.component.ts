import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { dealService } from 'app/lib/service/deal.service';
import { Card } from 'app/lib/service/data/card';

@Component({
  selector: 'app-save-card-confirmation',
  templateUrl: './save-card-confirmation.component.html',
  styleUrls: ['./save-card-confirmation.component.scss']
})
export class SaveCardConfirmationComponent implements OnInit {

  constructor(public auth: AuthService, public dealService:dealService) { }

  ngOnInit() {
  }

  shareCard() {
    var card = new Card(localStorage.getItem('email'), 'NCR', localStorage.getItem('cardType'));
    localStorage.removeItem('cardType');
    this.dealService.postCard(card);
  }
} 
