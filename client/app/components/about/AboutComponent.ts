import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HomeComponent} from "../home/HomeComponent";


@Component({
    selector: 'about',
    template: `<h1>About</h1>
    <a [routerLink]="['../Home']">Back to Home component</a>

    `,
    directives : [ROUTER_DIRECTIVES]
})

export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}