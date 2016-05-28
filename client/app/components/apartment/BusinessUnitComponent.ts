import {Component, OnInit, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from "angular2/router";
import {DashboardComponent} from "../app/DashboardComponent";
import {BusinessUnitService} from "./BusinessUnitService";
import {ApartmentComponent} from "./ApartmentComponent";


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

    directives: [ROUTER_DIRECTIVES],
    providers: [BusinessUnitService]
})

export class BusinessUnitComponent implements OnInit {
    public businessUnits: Object[];

    constructor(private businessUnitService: BusinessUnitService) {
    this.businessUnitService = businessUnitService;
    }

    ngOnInit() {
    this.businessUnitService.getBU().subscribe(res => this.businessUnits = res);    
    }
}