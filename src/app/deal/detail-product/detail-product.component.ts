import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from "lodash";
import { CookieService } from '../../lib/service/cookie.service';

import { Cookie } from 'ng2-cookies';
import { MatSnackBar } from '@angular/material';

import { Deal } from '../../lib/service/data/deal';
import { dealService } from '../../lib/service/deal.service';
import { Card } from 'app/lib/service/data/card';
import { AuthService } from 'app/auth/auth.service';

@Component({
    selector: 'app-detail-product',
    templateUrl: './detail-product.component.html',
    styleUrls: ['./detail-product.component.scss']
})
export class DetailDealComponent implements OnInit {
    private productName: string;
    private product: Deal;
    private cards: Card[] = [];
    private cloneProduct: Deal[] = [];
    private productImage: string;
    private selectedImage: any;
    private objectOrder: any;
    private productsOrder = [];
    private productCompare = [];
    private procustCount: number = 0;


    productState: boolean = false;
    loadingState: boolean = true;

    constructor(
        private activeRoute: ActivatedRoute,
        private productService: dealService,
        public snackBar: MatSnackBar,
        private cookie: CookieService,
        private authService: AuthService,
        private router: Router
    ) {
        this.productsOrder = this.cookie['productsOrder'];
        this.productCompare = this.cookie['arrCompare'];
    }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this.productName = params["detail"];
            this.productService.getSlugProduct(this.productName).subscribe(product => {
                this.product = product;
                this.productState = true;
                this.productImage = product.image;
                this.productService.getCardsByType(this.product.card).subscribe(data => {
                    this.cards = data;


                    // Set Object Order Product
                    this.objectOrder = {
                        id: product.id,
                        slug: product.slug,
                        quantity: 1,
                        linkTitle: product.linkTitle,
                        offerUrl: product.offerUrl,
                        image: product.image,
                        productName: product.productName
                    };

                    // Init Demo Image
                    this.selectedImage = _.find(product.gallery, (o) => {
                        return o.images == product.image
                    });

                    // Init Counter product button
                    this.buttonCounter(product.id);

                },

                    error => {
                        alert('Error' + error);
                    });

            });

        });
        setTimeout(() => {
            this.loadingState = false;
        }, 500);
    }

    // Button Counter
    buttonCounter(idProduct: number) {
        var findObj = _.find(this.cookie['productsOrder'], ['id', idProduct]);
        if (findObj != undefined) {
            this.procustCount = findObj.quantity;
        }
    }


    postCard(type) {
        localStorage.setItem('cardType', type);
        if (!this.authService.isAuthenticated()) {
            this.openSnackBar("please login to continue", "");
        } else {
            this.router.navigate(['save-card-confirmation']);
        }
    }

    notify(type) {
        if (this.authService.isAuthenticated()) {
            this.productService.notify(type, localStorage.getItem('email'));
        } else {
            this.openSnackBar("please login to continue", "");
        }
    }

    // Snack Bar
    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    // Image Gallery
    selectImage(gallery) {
        this.selectedImage = gallery;
        this.productImage = gallery.images;
    }
}
