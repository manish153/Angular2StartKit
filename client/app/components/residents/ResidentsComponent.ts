import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

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
