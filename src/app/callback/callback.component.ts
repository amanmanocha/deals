import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html'
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events
      .filter(event => (event instanceof NavigationEnd))
      .subscribe((routeData: any) => {
        if (this.router.url.startsWith('/callback#')) {
          if (localStorage.getItem('cardType') != null) {
            this.router.navigate(['/save-card-confirmation']);
          } else {
            this.router.navigate(['/home']);
          }
        }
      });
  }

  ngOnInit() {
  }

}
