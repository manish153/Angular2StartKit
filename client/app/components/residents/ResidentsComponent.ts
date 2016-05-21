import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'residents',
    styleUrls: ['../app/assets/app.css'],
    template: `<h1>residents Page - work in progress </h1>
    
    <a [routerLink]="['../Dashboard']">Back to Dash</a>

    `,
    directives: [ROUTER_DIRECTIVES]
})

export class ResidentsComponent {
    constructor() { }
}
