import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from "lodash";
import { MatSnackBar } from '@angular/material';

// Object Type
import { Deal } from './data/deal';
import { Logo } from './data/logo';
import { Category } from './data/category';
import { Size } from './data/size';
import { Color } from './data/color';
import { Card } from 'app/lib/service/data/card';
import { AuthService } from 'app/auth/auth.service';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class dealService {
    API_URL = 'http://apidealpelo.burrow.io';
    private base: string = './assets/json/';

    constructor(private router: Router, private http: Http, public auth: AuthService, public authHttp: AuthHttp,
        public snackBar: MatSnackBar
    ) { }

    // Get Products 
    getProduct(): Observable<Deal[]> {
        return this.http.get(this.base + 'product.json').map((res: Response) => res.json());
    }

    // Get Product By Id
    getIdProduct(id: number): Observable<Deal> {
        return this.getProduct().map(products => products.find(product => product.id === id));
    }

    // Get Product By Slug
    getSlugProduct(slug: string): Observable<Deal> {
        return this.getProduct().map(products => products.find(product => product.slug === slug));
    }

    // Get Logo
    getLogo(): Observable<Logo[]> {
        return this.http.get(this.base + 'logo.json').map((res: Response) => res.json());
    }

    // Get Category
    getCategory(): Observable<Category[]> {
        return this.http.get(this.base + 'category.json').map((res: Response) => res.json());
    }

    // Get Size
    getSize(): Observable<Size[]> {
        return this.http.get(this.base + 'size.json').map((res: Response) => res.json());
    }

    // Get Color
    getColor(): Observable<Color[]> {
        return this.http.get(this.base + 'color.json').map((res: Response) => res.json());
    }

    postCard(card: Card) {
        this.authHttp.post(`${this.API_URL}/cards`, card)
            .map(res => res.json())
            .subscribe(
            data => {
                this.openSnackBar(card.bank, 'shared with DealPelo users');
                this.router.navigate(['/home'])
            },
            error => {
                alert('Error');
            }
            );
    }

    getCards(): Observable<Card[]> {
        return this.http.get(`${this.API_URL}/cards`).map((res: Response) => res.json());
    }

    getCardsByType(type: string): Observable<Card[]> {
        return this.http.get(`${this.API_URL}/cards?bank=` + type).map((res: Response) => {
            return res.json()._embedded.cards;
        });
    }

    // Snack Bar
    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
