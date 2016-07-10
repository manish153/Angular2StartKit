import {Component, OnInit, Inject} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";
import {DashboardComponent} from "../app/DashboardComponent";
import {ApartmentComponent} from "./ApartmentComponent";
import {BusinessUnitComponent} from "./BusinessUnitComponent";
import {AptDetailsComponent} from "./AptDetailsComponent";
import {AptContentComponent} from "./AptContentComponent";



@RouteConfig([
    { path: '/', component: BusinessUnitComponent, as: 'BusinessUnit', useAsDefault: true },
    { path: '/aptdetails', component: AptDetailsComponent, as: 'AptDetails' }, 
    { path: '/apartment', component: ApartmentComponent, as: 'Apartment' },
    { path: '/aptcontent', component: AptContentComponent, as: 'AptContent' }
    
])

@Component({
    selector: 'business-unit',
    template: `<router-outlet></router-outlet>`,

    directives: [ROUTER_DIRECTIVES]
})

export class BusinessRootComponent {
  constructor() { }
}