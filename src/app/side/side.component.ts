import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from '../lib/service/cookie.service';
import { AuthService } from 'app/auth/auth.service';

@Component({
    selector: 'app-side',
    templateUrl: './side.component.html',
    styleUrls: ['./side.component.scss'],
    animations:[
        trigger('slideUp', [
            state('void', style({
                height: '*'
            })),
            transition('void => *', [
                animate(500, keyframes([
                    style({opacity:0, offset: 0, height: 0}),
                    style({opacity:0.2, offset: 0.2, height: '*'}),
                    style({opacity:1, offset: 1.0, height: 'auto'})
                ]))
            ]),
            transition('* => void',[
                animate(200, keyframes([
                    style({opacity:1, offset: 0, height: 'auto'}),
                    style({opacity:0.2, offset: 0.2, height: '*'}),
                    style({opacity:0, offset: 1.0, height: 0})
                ]))
            ])
        ])
    ],
    providers: [CookieService]
})
export class SideComponent implements OnInit {
    private selectedMenu: any = null;

    // Menus
    private menus = [
        {
            label: 'Home', 
            link: '/home'            
        },
        {
            label: 'Deals', 
            link: '/product3'
        },
        {
            label: 'Contact Us', 
            link: '/contact'
        }
    ];
    
    private comapreLength: number;

    @ViewChild('navmenu') nav:ElementRef;        
    
    constructor(
        private router: Router,
        private cookie: CookieService,
        public auth: AuthService
    ){  
        setInterval(()=>{
            this.cookie.updateCookie();
            this.cookie.initCookie();
        }, 1000);
    }

    ngOnInit() {
        console.log("onInit");
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.activebar = false;
        });
    }

    ngAfterViewInit(){
        this.nav.nativeElement.style.height = window.innerHeight + 'px';        
    }

    // Event Listener
    @HostListener('window:resize', ['$event']) onResize(event) { 
        this.nav.nativeElement.style.height = window.innerHeight + 'px';                
    }

    // On Select Menu
    selectMenu(menu){
        if(menu == this.selectedMenu){
            this.selectedMenu = null;
        }else{
            this.selectedMenu = menu;
        }
    }

    activebar = false;
    @Output() toggle = new EventEmitter();
    
    // Toggle Bar
    toggleBar() {
        this.toggle.emit();
        this.activebar = !this.activebar;
    }
}
