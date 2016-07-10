System.register(['@angular/core', "@angular/router-deprecated", "./ApartmentService", "../../services/SharedService"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, ApartmentService_1, SharedService_1;
    var AptDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
                onClick(aptdetails) {
                    this.sharedService.temp = aptdetails;
                    console.log(JSON.stringify(this.sharedService.temp));
                }
                routerCanReuse(nextInstruction, prevInstruction) {
                    return true;
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
                <a [routerLink]="['AptContent']" class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="onClick(aptdetails)">{{aptdetails.aptType}}</a>
                <a *ngIf="aptdetails.aptStatus=='Available'" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{aptdetails.aptStatus}}</a>
                <a *ngIf="aptdetails.aptStatus=='Leased'" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{aptdetails.leaseEndDate}}</a>
                <a class="mdl-button mdl-js-button mdl-js-ripple-effect">$ {{aptdetails.rentAmount}}</a>
                <a *ngIf="aptdetails.aptStatus=='Leased'" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{aptdetails.residentEmail}}</a>  
              </div>
    </div>         
    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService, router_deprecated_1.RouteParams])
            ], AptDetailsComponent);
            exports_1("AptDetailsComponent", AptDetailsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHREZXRhaWxzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQVFJLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQUUsTUFBbUI7b0JBQTdGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQzVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBR0QsUUFBUTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHO3dCQUMxRSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTt3QkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELE9BQU8sQ0FBQyxVQUFVO29CQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBQyxVQUFVLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBRUQsY0FBYyxDQUFDLGVBQXFDLEVBQUUsZUFBcUM7b0JBQzNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztZQUNILENBQUM7WUF0REQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUDtvQkFFRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7bUNBQUE7WUFFRixxREE4QkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXB0RGV0YWlsc0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVQYXJhbXMsQ2FuUmV1c2UsQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gXCJAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZFwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9EYXNoYm9hcmRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9BcGFydG1lbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2hhcmVkU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1NoYXJlZFNlcnZpY2VcIjsgXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwdGRldGFpbHMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBcGFydG1lbnQnXVwiPkJhY2s8L2E+XHJcbiAgICAgPGRpdiAqbmdGb3I9XCIjYXB0ZGV0YWlscyBvZiBhcHREZXRhaWxzXCIgY2xhc3M9XCJkZW1vLXVwZGF0ZXMgbWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tNC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZCBtZGwtY29sb3ItLXRlYWwtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPnt7YXB0ZGV0YWlscy5hcHRJRH19PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICB7e2FwdGRldGFpbHMuYXB0RGVzY319ICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBcHRDb250ZW50J11cIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIChjbGljayk9XCJvbkNsaWNrKGFwdGRldGFpbHMpXCI+e3thcHRkZXRhaWxzLmFwdFR5cGV9fTwvYT5cclxuICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiYXB0ZGV0YWlscy5hcHRTdGF0dXM9PSdBdmFpbGFibGUnXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e2FwdGRldGFpbHMuYXB0U3RhdHVzfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImFwdGRldGFpbHMuYXB0U3RhdHVzPT0nTGVhc2VkJ1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+e3thcHRkZXRhaWxzLmxlYXNlRW5kRGF0ZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj4kIHt7YXB0ZGV0YWlscy5yZW50QW1vdW50fX08L2E+XHJcbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImFwdGRldGFpbHMuYXB0U3RhdHVzPT0nTGVhc2VkJ1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+e3thcHRkZXRhaWxzLnJlc2lkZW50RW1haWx9fTwvYT4gIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICBgLFxyXG5cclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHREZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDYW5SZXVzZSB7XHJcblxyXG4gICAgYXB0RGV0YWlsczogYW55O1xyXG4gICAgZGF0YTogYW55O1xyXG4gICAgYXB0U3RhdHVzOiBzdHJpbmc7XHJcbiAgICBVbml0VHlwZTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UsIHByaXZhdGUgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZSwgcGFyYW1zOiBSb3V0ZVBhcmFtcykge1xyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlID0gYXBhcnRtZW50U2VydmljZTtcclxuICAgIHRoaXMuYXB0U3RhdHVzID0gcGFyYW1zLmdldCgnYXB0U3RhdHVzJyk7XHJcbiAgICB0aGlzLlVuaXRUeXBlID0gcGFyYW1zLmdldCgnVW5pdFR5cGUnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXREZXRhaWxzKHRoaXMuVW5pdFR5cGUsdGhpcy5hcHRTdGF0dXMpLnN1YnNjcmliZShyZXMgPT5cclxuICAgICAgICB7dGhpcy5hcHREZXRhaWxzID0gcmVzXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYXB0RGV0YWlscykpOyAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGFwdGRldGFpbHMpe1xyXG4gICAgICB0aGlzLnNoYXJlZFNlcnZpY2UudGVtcD1hcHRkZXRhaWxzO1xyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnNoYXJlZFNlcnZpY2UudGVtcCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlckNhblJldXNlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXZJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
