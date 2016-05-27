import {Component, OnInit, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {DashboardComponent} from "../app/DashboardComponent";
import {ApartmentService} from "./ApartmentService";
import {FormBuilder, Validators, ControlGroup} from "angular2/common";


@Component({
    selector: 'apartment',
    /*template: `<h1>Apartment Page - work in progress </h1>
         <ul>
          <li *ngFor="#apartment of apartments">{{apartment.UnitType}}</li>
         </ul> 

    <a [routerLink]="['../Dashboard']">Back to Dash</a>
    `,*/
  template: `
   <div *ngFor="#apartment of apartments" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{apartment.unitID}}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                Non dolore elit adipisicing ea repre henderit consectetur culpa.
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{apartment.UnitType}}</a>
              </div>
    </div>          
    `,

    directives: [ROUTER_DIRECTIVES]
    // ,providers: [ApartmentService]
})

export class ApartmentComponent implements OnInit {

    public apartments: Object[];

    constructor(private apartmentService: ApartmentService) {
    this.apartmentService = apartmentService;
    }

    ngOnInit() {
    this.apartmentService.getEntries().subscribe(res => this.apartments = res);
    console.log(this.apartments);
    }
}