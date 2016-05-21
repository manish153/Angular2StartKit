import {Component, OnInit} from 'angular2/core';

import {ROUTER_DIRECTIVES, CanActivate} from "angular2/router";
import {DashboardComponent} from "../app/DashboardComponent";
import {LoginComponent} from '../login/LoginComponent'

@Component({
    selector: 'home',
    template: `
    <div>
    <div class="input">
        <label for="Name">Name</label>
        <input type="text" id="name" #name>
    </div>
    <button (click)="onGetAll(name.value)">GET Request
    </button>
    <p>Response: {{response}}</p>
    </div>
    <a [routerLink]="['../Dashboard']">link to DASH </a>
    `,
    templateUrl: '../app/templates/home.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {
    response: string;
    sidebartemp1 = JSON.parse(localStorage.getItem('profile'));

    constructor() {
    }

    ngOnInit() { }

    onGetAll(name: string) {
        console.log("Button clicked.. more code goes here " + name);
    }
}