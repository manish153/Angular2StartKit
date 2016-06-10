System.register(['angular2/core', "angular2/router", "./ApartmentService", "../../services/SharedService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ApartmentService_1, SharedService_1;
    var AptDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            },
            function (SharedService_1_1) {
                SharedService_1 = SharedService_1_1;
            }],
        execute: function() {
            let AptDetailsComponent = class AptDetailsComponent {
                constructor(apartmentService, sharedService, params) {
                    this.apartmentService = apartmentService;
                    this.sharedService = sharedService;
                    this.apartmentService = apartmentService;
                    this.aptStatus = params.get('aptStatus');
                    this.UnitType = params.get('UnitType');
                }
                ngOnInit() {
                    this.apartmentService.getDetails(this.UnitType, this.aptStatus).subscribe(res => {
                        this.aptDetails = res;
                        console.log(JSON.stringify(this.aptDetails));
                    });
                }
            };
            AptDetailsComponent = __decorate([
                core_1.Component({
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
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService, router_1.RouteParams])
            ], AptDetailsComponent);
            exports_1("AptDetailsComponent", AptDetailsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHREZXRhaWxzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQVFJLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQUUsTUFBbUI7b0JBQTdGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQzVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBR0QsUUFBUTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHO3dCQUMxRSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTt3QkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQTdDRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUJQO29CQUVELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO2lCQUNsQyxDQUFDOzttQ0FBQTtZQUVGLHFEQXFCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHREZXRhaWxzQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUyxSb3V0ZVBhcmFtc30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9EYXNoYm9hcmRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9BcGFydG1lbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2hhcmVkU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1NoYXJlZFNlcnZpY2VcIjsgXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwdGRldGFpbHMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBcGFydG1lbnQnXVwiPkJhY2s8L2E+XHJcbiAgICAgPGRpdiAqbmdGb3I9XCIjYXB0ZGV0YWlscyBvZiBhcHREZXRhaWxzXCIgY2xhc3M9XCJkZW1vLXVwZGF0ZXMgbWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tNC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZCBtZGwtY29sb3ItLXRlYWwtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPnt7YXB0ZGV0YWlscy5hcHRJRH19PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICB7e2FwdGRldGFpbHMuYXB0RGVzY319ICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e2FwdGRldGFpbHMuYXB0VHlwZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJhcHRkZXRhaWxzLmFwdFN0YXR1cz09J0F2YWlsYWJsZSdcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPnt7YXB0ZGV0YWlscy5hcHRTdGF0dXN9fTwvYT5cclxuICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiYXB0ZGV0YWlscy5hcHRTdGF0dXM9PSdMZWFzZWQnXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e2FwdGRldGFpbHMubGVhc2VFbmREYXRlfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPiQge3thcHRkZXRhaWxzLnJlbnRBbW91bnR9fTwvYT5cclxuICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiYXB0ZGV0YWlscy5hcHRTdGF0dXM9PSdMZWFzZWQnXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e2FwdGRldGFpbHMucmVzaWRlbnRFbWFpbH19PC9hPiAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gICAgICAgICBcclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwdERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGFwdERldGFpbHM6IGFueTtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIGFwdFN0YXR1czogc3RyaW5nO1xyXG4gICAgVW5pdFR5cGU6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlLCBwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2UsIHBhcmFtczogUm91dGVQYXJhbXMpIHtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZSA9IGFwYXJ0bWVudFNlcnZpY2U7XHJcbiAgICB0aGlzLmFwdFN0YXR1cyA9IHBhcmFtcy5nZXQoJ2FwdFN0YXR1cycpO1xyXG4gICAgdGhpcy5Vbml0VHlwZSA9IHBhcmFtcy5nZXQoJ1VuaXRUeXBlJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0RGV0YWlscyh0aGlzLlVuaXRUeXBlLHRoaXMuYXB0U3RhdHVzKS5zdWJzY3JpYmUocmVzID0+XHJcbiAgICAgICAge3RoaXMuYXB0RGV0YWlscyA9IHJlc1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmFwdERldGFpbHMpKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
