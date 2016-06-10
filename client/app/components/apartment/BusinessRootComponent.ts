import {Component, OnInit, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {DashboardComponent} from "../app/DashboardComponent";
import {ApartmentComponent} from "./ApartmentComponent";
import {BusinessUnitComponent} from "./BusinessUnitComponent";
import {AptDetailsComponent} from "./AptDetailsComponent";



@RouteConfig([
    { path: '/', component: BusinessUnitComponent, as: 'BusinessUnit', useAsDefault: true },
    { path: '/aptdetails', component: AptDetailsComponent, as: 'AptDetails' }, // not working as expected 
    { path: '/apartment', component: ApartmentComponent, as: 'Apartment' }
    
])

@Component({
    selector: 'business-unit',
    template: `<router-outlet></router-outlet>`,

    directives: [ROUTER_DIRECTIVES]
})

export class BusinessRootComponent {
  constructor() { }
}