import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
    selector: 'payments',
    styleUrls: ['../app/assets/app.css'],
    template: `<h1>Payments Page - work in progress </h1>
    
    <a [routerLink]="['../Dashboard']">Back to Dash</a>

    `,
    directives: [ROUTER_DIRECTIVES]
})

export class PaymentsComponent {
    constructor() { }
}
