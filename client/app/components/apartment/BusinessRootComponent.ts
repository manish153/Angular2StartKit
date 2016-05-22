import {Component, OnInit, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {DashboardComponent} from "../app/DashboardComponent";
import {BusinessUnitService} from "./BusinessUnitService";
import {ApartmentComponent} from "./ApartmentComponent";
import {BusinessUnitComponent} from "./BusinessUnitComponent";



@RouteConfig([
    { path: '/', component: BusinessUnitComponent, as: 'BusinessUnit', useAsDefault: true },
    { path: '/apartment', component: ApartmentComponent, as: 'Apartment' }
])

@Component({
    selector: 'business-unit',
  template: `<router-outlet></router-outlet>
    `,

    directives: [ROUTER_DIRECTIVES],
    providers: [BusinessUnitService]
})

export class BusinessRootComponent {
  constructor() { }
}