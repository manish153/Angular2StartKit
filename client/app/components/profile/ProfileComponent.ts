import {Component, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {FormBuilder, Validators, ControlGroup} from "angular2/common";
import {SidebarComponent} from '../app/SidebarComponent'
import {ApartmentService} from '../apartment/ApartmentService'
import {MDL} from '../app/MaterialDesignLiteUpgradeElement'


@Component({
    selector: 'profile',
    template: `<div mdl class="mdl-grid demo-content">
      
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <h3>Profile Page</h3>   
                <form action="#" [ngFormModel]="myForm" (ngSubmit)="onSubmit()" #f="ngForm">
                 <div class="mdl-textfield mdl-js-textfield" *ngFor="#prof of profileObject">

                  <label  *ngIf="!isEdit" (click)="isEdit=true" from="name">Name: {{prof.userFirstName}} </label> 
                  <label  *ngIf="isEdit" from="name">Name: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" [ngFormControl]="myForm.controls['name'] "type="text" id="name" #name="ngForm" [(ngModel)]="prof.userFirstName">

                    <!--<span class="validator-error" *ngIf="!name.valid"> required</span>-->
          </div>
          <!--<button name="submit" type="submit" [disabled]="!f.valid">submit</button>-->
                <br/>
                <button *ngIf="isEdit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" name="submit" type="submit">submit</button>    
            
                 </form>
    
          </div>
          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">Updates</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                Non dolore elit adipisicing ea reprehenderit consectetur culpa.
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect">Read More</a>
              </div>
            </div>
            <div class="demo-separator mdl-cell--1-col"></div>
            <div class="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__supporting-text mdl-color-text--blue-grey-50">
                <h3>View options</h3>
                <ul>
                  <li>
                    <label for="chkbox1" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox1" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Click per object</span>
                    </label>
                  </li>
                  <li>
                    <label for="chkbox2" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox2" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Views per object</span>
                    </label>
                  </li>
                  <li>
                    <label for="chkbox3" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox3" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Objects selected</span>
                    </label>
                  </li>
                  <li>
                    <label for="chkbox4" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox4" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Objects viewed</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50">Change location</a>
                <div class="mdl-layout-spacer"></div>
                <i class="material-icons">location_on</i>
              </div>
            </div>
          </div>
         </div>
    `,
    directives: [ROUTER_DIRECTIVES, MDL]
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
