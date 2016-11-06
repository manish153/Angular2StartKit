import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
    selector: 'adminpayments',
   
    template: `<h1>Admin Payments Page - work in progress</h1>
    
    <a [routerLink]="['../Dashboard']">Back to Dash</a>

    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AdminPaymentsComponent {
    constructor() { }
}
