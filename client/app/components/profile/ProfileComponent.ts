import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HomeComponent} from "../home/HomeComponent";
import {FormBuilder, Validators, ControlGroup} from "angular2/common";


@Component({
    selector: 'profile',
    styleUrls: ['../app/assets/app.css'],
    template: `<h1>Profile Page - work in progress </h1>
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()" #f="ngForm">
    <div>
        <label from="name">Name</label>
        <input [ngFormControl]="myForm.controls['name'] "type="text" id="name" #name="ngForm">
        <span class="validator-error" *ngIf="!name.valid"> required</span>
    </div>
    <button type="submit" [disabled]="!f.valid">submit</button>
    </form>


    <a [routerLink]="['../Home']">Back to Home component</a>

    `,
    directives : [ROUTER_DIRECTIVES]
})

export class ProfileComponent implements OnInit {
    myForm: ControlGroup;

    constructor(private fb: FormBuilder) { }


    onSubmit(form){
       console.log(this.myForm);
    }

    ngOnInit():any { 
     this.myForm = this.fb.group({
       'name': ['', Validators.required],
     });
    }
}