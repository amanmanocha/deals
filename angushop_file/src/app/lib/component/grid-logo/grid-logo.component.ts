import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Logo } from '../../service/data/logo';
import { dealService } from '../../service/deal.service';

@Component({
    selector: 'grid-logo',
    templateUrl: './grid-logo.component.html',
    styleUrls: ['./grid-logo.component.scss'],
    animations:[
        trigger('fade', [
            state('shown' , style({ opacity: 1 })), 
            state('hidden', style({ opacity: 0 })),
            transition('* => *', animate('.5s'))
        ]),
    ]
})
export class GridLogoComponent implements OnInit {
    private logos : Logo[] = [];
    private limit: number;

    @Input() setlimit;
    
    constructor(
        private mainService: dealService
    ){ }

    ngOnInit() {
        this.fetch();
    }
    
    // Limit
    limitLogo(logo){
        if(this.setlimit === undefined){
            this.limit = logo.length;
        }else{
            this.limit = this.setlimit;
        }
    }

    // Fetching
    fetch(){
        this.mainService.getLogo().subscribe(data => {
            this.logos = data;
            this.limitLogo(data);
        });
    }
}
