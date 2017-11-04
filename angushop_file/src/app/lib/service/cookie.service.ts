import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import * as _ from "lodash";

@Injectable()
export class CookieService {
    private productsOrder = [];
    private arrCompare = [];
    private promo: number;
    private promoValue: number;
    private subtotal: number;
    private payed: string = '';

    cookies: Object;
    keys: Array<string>;
    
    constructor() { 
        this.updateCookie();
        this.initCookie();  
    }

    // Update Cookie
    updateCookie() {
        this.cookies = Cookie.getAll();
        this.keys = Object.keys(this.cookies);
    }

    // Add Cookie
    addCookie(cName: string, cValue: string) {
        Cookie.set(cName, cValue);
        this.updateCookie();
        this.initCookie();          
    }

    // Remove Cookie
    removeCookie(name: string) {
        Cookie.delete(name);
        this.updateCookie();
        this.initCookie(); 
    }

    // Initialize Cookie
    initCookie(){
        if(!_.isEmpty(this.cookies)){
            this.productsOrder = [];
            this.arrCompare = [];

            // Products
            if(this.cookies['products'] != undefined){
                let productsCart = JSON.parse(this.cookies['products']);
                _.map(productsCart, (x)=>{
                    return this.productsOrder.push(x);
                });
            }
            
            // Promo
            if(this.cookies['promo'] != undefined){
                this.promo = this.cookies['promo'];
            }

            // Subtotal
            if(this.cookies['subtotal'] != undefined){
                this.subtotal = Number(this.cookies['subtotal']);
            }   

            // Promo Value
            if(this.cookies['promoValue'] != undefined){
                this.promoValue = Number(this.cookies['promoValue']);
            }

            // Payed
            if(this.cookies['payed'] != undefined){
                this.payed = this.cookies['payed'];
            }
        }
    }
}
