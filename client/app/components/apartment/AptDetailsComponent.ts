import {Component, OnInit, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams} from "angular2/router";
import {DashboardComponent} from "../app/DashboardComponent";
import {ApartmentService} from "./ApartmentService";
import {SharedService} from "../../services/SharedService"; 


@Component({
    selector: 'aptdetails',
  template: `
     <a [routerLink]="['Apartment']">Back</a>
     <div *ngFor="#aptdetails of aptDetails" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{aptdetails.aptID}}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
              {{aptdetails.aptDesc}}  
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect">{{aptdetails.aptType}}</a>
                <a *ngIf="aptdetails.aptStatus=='Available'" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{aptdetails.aptStatus}}</a>
                <a *ngIf="aptdetails.aptStatus=='Leased'" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{aptdetails.leaseEndDate}}</a>
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect">$ {{aptdetails.rentAmount}}</a>
                <a *ngIf="aptdetails.aptStatus=='Leased'" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{aptdetails.residentEmail}}</a>  
              </div>
    </div>         
    `,

    directives: [ROUTER_DIRECTIVES]
})

export class AptDetailsComponent implements OnInit {

    aptDetails: any;
    data: any;
    aptStatus: string;
    UnitType: string;


    constructor(private apartmentService: ApartmentService, private sharedService: SharedService, params: RouteParams) {
    this.apartmentService = apartmentService;
    this.aptStatus = params.get('aptStatus');
    this.UnitType = params.get('UnitType');
    }


    ngOnInit(){
       this.apartmentService.getDetails(this.UnitType,this.aptStatus).subscribe(res =>
        {this.aptDetails = res
         console.log(JSON.stringify(this.aptDetails)); 
        });
    }
}