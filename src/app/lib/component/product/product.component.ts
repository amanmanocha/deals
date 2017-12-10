import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import * as _ from "lodash";

import { Deal } from '../../service/data/deal';
import { dealService } from '../../service/deal.service';
import { Card } from 'app/lib/service/data/card';

@Component({
    selector: 'app-deal',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    animations: [
        trigger('fade', [
            state('shown', style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('hidden => show', animate('.5s')),
            transition('show => hidden', animate('.1s'))
        ]),
        trigger('visibility', [
            state('shown', style({
                transform: 'scale(1)',
                opacity: 1
            })),
            state('hidden', style({
                transform: 'scale(0)',
                opacity: 0
            })),
            transition('hidden => shown', animate('.2s')),
            transition('shown => hidden', animate('.1s'))
        ])
    ]
})
export class DealComponent implements OnInit {
    // Property
    private products: Deal[] = [];
    private cards: Card[] = [];
    
    private productUpdated;
    private selectProduct = Deal;
    private limit: number;
    private togglezoom: boolean = false;
    private getId: number;
    private loadingState: boolean = true;
    private productState: boolean = false;
    private blurproduct: boolean = false;

    @ViewChild('row') row: ElementRef;

    // Input
    @Input() setlimit: number;
    @Input() showBtnClose: boolean = false;
    @Input() paginate: boolean = false;
    @Input() filter: Deal;
    @Input() column: string = 'l3 s6';
    @Input() currentPage: number = 1;

    // Out Put
    @Output() detail = new EventEmitter;
    @Output() pageChange = new EventEmitter;
    @Output() onRemove = new EventEmitter;

    constructor(
        private mainService: dealService
    ) { }

    // Lifecycle
    ngOnInit() {
        this.fetch();
        this.fetchCards();
    }

    ngAfterViewInit() {
        this.updateProduct();
    }

    ngOnChanges() {
        this.updateProduct();
    }

    @HostListener('window:load', ['$event']) onLoad(event) {
        this.updateProduct();
    }

    // Update product filtered & on init
    updateProduct() {
        this.productUpdated = [];
        setTimeout(() => {
            if (this.row !== undefined) {
                let children = this.row.nativeElement.children;
                for (let i = 0; i < children.length; i++) {
                    if (this.productUpdated.indexOf(children[i].id) !== -1) {
                        return false;
                    }
                    this.productUpdated.push(children[i].id);
                }
            }
        }, 1000);
    }

    // Fetching
    fetch() {
        this.mainService.getProduct().subscribe(data => {
            this.products = data;
            this.limitProduct(data);

            setTimeout(() => {
                this.loadingState = false;
                this.productState = true;
            }, 500)
        });
    }

    fetchCards() {
        this.mainService.getCards().subscribe(data => {
            this.cards = data;
            setTimeout(() => {
                this.loadingState = false;
                this.productState = true;
            }, 500)
        });
    }

    // Set Limit    
    limitProduct(product) {
        if (this.setlimit === undefined) {
            this.limit = product.length;
        } else {
            this.limit = this.setlimit;
        }
    }

    // Hover Product
    onHover(product) {
        this.selectProduct = product;
    }

    // Zoom Image
    viewProduct(id) {
        this.togglezoom = true;
        this.getId = id;
        this.blurproduct = true;
    }

    // Close Zoom
    closeZoom() {
        this.togglezoom = false;
        this.getId = null;
        this.blurproduct = false;
    }

    // Page Change
    onPageChange(e) {
        window.scrollTo(0, 0);
        this.updateProduct();
        this.pageChange.emit(e);
    }

    // buton close on click
    selectClose(e) {
        this.onRemove.emit(e);
        this.updateProduct();
    }

    // Detail Product
    detailProduct(product) {
        this.detail.emit(product);
    }

}
