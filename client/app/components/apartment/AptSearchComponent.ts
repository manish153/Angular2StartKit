import {Component, OnInit, Inject,NgZone,OnChanges, ChangeDetectionStrategy,Input} from '@angular/core';
import {ROUTER_DIRECTIVES,CanReuse,ComponentInstruction} from "@angular/router-deprecated";
import {DashboardComponent} from "../app/DashboardComponent";
import {ApartmentService} from "./ApartmentService";
import {SharedService} from "../../services/SharedService";
import {HeaderComponent} from "../app/HeaderComponent";


@Component({
    selector: 'aptsearch',  
  template: `    
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

export class AptSearchComponent implements OnInit {
    @Input() model:string;


    aptDetails: any;
    
    constructor(private apartmentService: ApartmentService, private sharedService: SharedService,private zone:NgZone) {
    this.apartmentService = apartmentService;        
    }


    ngOnInit(){}

    ngOnChanges(changes: any) {
    console.log('Inside the Search Component from parent -->' +this.model);
    this.apartmentService.searchApt2(this.model).subscribe(res => {this.aptDetails = res});
    }

}