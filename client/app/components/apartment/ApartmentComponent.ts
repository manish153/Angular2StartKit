import {Component, OnInit, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from "angular2/router";
import {DashboardComponent} from "../app/DashboardComponent";
import {ApartmentService} from "./ApartmentService";
import {FormBuilder, Validators, ControlGroup} from "angular2/common";
import {SharedService} from "../../services/SharedService";
import {AptDetailsComponent} from "./AptDetailsComponent";


@Component({
    selector: 'apartment',
  template: `
   <div *ngFor="#apartment of apartments" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{apartment.unitID}}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                Non dolore elit adipisicing ea repre henderit consectetur culpa.
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect">{{apartment.UnitType}}</a>
                <a [routerLink]="['AptDetails', {UnitType: apartment.UnitType, aptStatus: 'Available'}]" class="mdl-button mdl-js-button mdl-js-ripple-effect" >Available</a>
                <a [routerLink]="['AptDetails', {UnitType: apartment.UnitType, aptStatus: 'Leased'}]" class="mdl-button mdl-js-button mdl-js-ripple-effect">Leased </a>
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect">Next availability </a>
              </div>
    </div>          
    `,

    directives: [ROUTER_DIRECTIVES]
})

export class ApartmentComponent implements OnInit {

    public apartments: Object[];
    public temp: Object[];
    aptDetails: any;
    data: any;

    constructor(private apartmentService: ApartmentService, private sharedService: SharedService) {
    this.apartmentService = apartmentService;
    }

    ngOnInit() {
    this.apartmentService.getApartments().subscribe(res => this.apartments = res);   
    // this.apartmentService.getStats().subscribe(res => this.temp = res);
    // console.log(JSON.stringify(this.temp));
    }

    // getAvailable(apartment){
    //   this.data = apartment;
    //   this.apartmentService.getDetails(this.data.UnitType,'Available').subscribe(res => 
    //     {this.aptDetails = res
    //      console.log(JSON.stringify(this.aptDetails)); 
    //     });
    // }

    // getLeased(apartment){
    //   this.data = apartment;
    //   this.apartmentService.getDetails(this.data.UnitType,'Leased').subscribe(res => 
    //     {this.aptDetails = res
    //      console.log(JSON.stringify(this.aptDetails)); 
    //     });
    // }

}