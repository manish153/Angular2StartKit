import {Component, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {FormBuilder, Validators, ControlGroup} from "angular2/common";
import {SidebarComponent} from '../app/SidebarComponent'
import {ApartmentService} from '../apartment/ApartmentService'


@Component({
    selector: 'profile',
    template: `<h1>Profile Page</h1>
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()" #f="ngForm">
    <div *ngFor="#prof of profileObject">

      <label *ngIf="!isEdit" (click)="isEdit=true" from="name">Name: {{prof.userFirstName}}</label>
      <label *ngIf="isEdit" from="name">Name: </label> <input *ngIf="isEdit" (keydown.enter)="isEdit=false" [ngFormControl]="myForm.controls['name'] "type="text" id="name" #name="ngForm" [(ngModel)]="prof.userFirstName">

        <!--<span class="validator-error" *ngIf="!name.valid"> required</span>-->
    </div>
    <!--<button name="submit" type="submit" [disabled]="!f.valid">submit</button>-->
    <button name="submit" type="submit">submit</button>
    
    </form>
    
    <!--<div *ngFor="#prof of profileObject">
    {{prof.userFirstName}}
    </div>-->
    
    <a [routerLink]="['../Dashboard']">Back to Dash</a>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class ProfileComponent implements OnInit {
    myForm: ControlGroup;
    isEdit: boolean = false;
    userEmail = JSON.parse(localStorage.getItem('profile'));
    public profileObject: Object[];


    constructor(private fb: FormBuilder, private apartmentService: ApartmentService) {
        this.apartmentService = apartmentService;
    }


    onSubmit(form) {
        console.log(this.myForm);
        this.isEdit = false;
        //post to rest API
    };

    ngOnInit(): any {
        this.apartmentService.getProfile(this.userEmail.email).subscribe(res => this.profileObject = res);
        this.myForm = this.fb.group({
            'name': ['', Validators.required],
        });
    }
}
