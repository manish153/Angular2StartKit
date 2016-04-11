import {Component, OnInit} from 'angular2/core';

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
    `
})

export class HomeComponent implements OnInit {
    response: string;

    constructor() {}

    ngOnInit() {}

    onGetAll(name: string){
       console.log("Button clicked.. more code goes here " + name);  
    }
}