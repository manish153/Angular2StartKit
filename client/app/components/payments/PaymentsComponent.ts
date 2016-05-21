import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

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
