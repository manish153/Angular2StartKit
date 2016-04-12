import {Component, OnInit} from 'angular2/core';
import {AboutComponent} from "../about/AboutComponent";
import {ROUTER_DIRECTIVES} from "angular2/router";

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
    <a [routerLink]="['../About']">link to About component</a>
    `,
    directives : [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {
    response: string;

    constructor() {}

    ngOnInit() {}

    onGetAll(name: string){
       console.log("Button clicked.. more code goes here " + name);  
    }
}