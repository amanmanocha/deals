import { Component } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import * as _ from "lodash";

@Component({
    selector: 'deal-element',
    templateUrl: './deal.component.html',
    styleUrls: ['./deal.component.scss']
})
export class DealElement {
    private objectNavigation = {};

    constructor(
        private router: Router
    ){}

    // Detail Product
    detailProduct(e){
        let product = _.kebabCase(e.slug);
        this.router.navigate(['p/' + product]);
    }
}
