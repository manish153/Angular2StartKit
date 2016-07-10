import {Component, OnInit, Inject} from '@angular/core';
import {ROUTER_DIRECTIVES,RouteConfig} from "@angular/router-deprecated";
import {DashboardComponent} from "../app/DashboardComponent";
import {ApartmentComponent} from "./ApartmentComponent";
import {ApartmentService} from "./ApartmentService";


@Component({
    selector: 'business-unit',
  template: `
   <div *ngFor="#bu of businessUnits" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{bu.BusinessUnitName}}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                Non dolore elit adipisicing ea repre henderit consectetur culpa.
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a [routerLink]="['Apartment']" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{bu.BusinessUnitName}}</a>
              </div>
    </div>          
    `,

    directives: [ROUTER_DIRECTIVES]
    //,providers: [BusinessUnitService]
})

export class BusinessUnitComponent implements OnInit {
    public businessUnits: Object[];

    constructor(private apartmentService: ApartmentService) {
    this.apartmentService = apartmentService;
    }

    ngOnInit() {
    this.apartmentService.getBU().subscribe(res => this.businessUnits = res);    
    }
}