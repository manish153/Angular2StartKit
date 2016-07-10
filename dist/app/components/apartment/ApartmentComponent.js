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
    var ApartmentComponent;
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
            let ApartmentComponent = class ApartmentComponent {
                constructor(apartmentService, sharedService) {
                    this.apartmentService = apartmentService;
                    this.sharedService = sharedService;
                    this.apartmentService = apartmentService;
                }
                ngOnInit() {
                    this.apartmentService.getApartments().subscribe(res => this.apartments = res);
                    // this.apartmentService.getStats().subscribe(res => this.temp = res);
                    // console.log(JSON.stringify(this.temp));
                }
            };
            ApartmentComponent = __decorate([
                core_1.Component({
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
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService])
            ], ApartmentComponent);
            exports_1("ApartmentComponent", ApartmentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBT0ksWUFBb0IsZ0JBQWtDLEVBQVUsYUFBNEI7b0JBQXhFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQzVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCxRQUFRO29CQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQzlFLHNFQUFzRTtvQkFDdEUsMENBQTBDO2dCQUMxQyxDQUFDO1lBa0JMLENBQUM7WUF2REQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7S0FlUDtvQkFFRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7a0NBQUE7WUFFRixtREFpQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXBhcnRtZW50Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUyxSb3V0ZUNvbmZpZ30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkXCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwL0Rhc2hib2FyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuL0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7U2hhcmVkU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1NoYXJlZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtBcHREZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9BcHREZXRhaWxzQ29tcG9uZW50XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwYXJ0bWVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgPGRpdiAqbmdGb3I9XCIjYXBhcnRtZW50IG9mIGFwYXJ0bWVudHNcIiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+e3thcGFydG1lbnQudW5pdElEfX08L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgTm9uIGRvbG9yZSBlbGl0IGFkaXBpc2ljaW5nIGVhIHJlcHJlIGhlbmRlcml0IGNvbnNlY3RldHVyIGN1bHBhLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPnt7YXBhcnRtZW50LlVuaXRUeXBlfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0FwdERldGFpbHMnLCB7VW5pdFR5cGU6IGFwYXJ0bWVudC5Vbml0VHlwZSwgYXB0U3RhdHVzOiAnQXZhaWxhYmxlJ31dXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIiA+QXZhaWxhYmxlPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBcHREZXRhaWxzJywge1VuaXRUeXBlOiBhcGFydG1lbnQuVW5pdFR5cGUsIGFwdFN0YXR1czogJ0xlYXNlZCd9XVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+TGVhc2VkIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+TmV4dCBhdmFpbGFiaWxpdHkgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBhcnRtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgYXBhcnRtZW50czogT2JqZWN0W107XHJcbiAgICBwdWJsaWMgdGVtcDogT2JqZWN0W107XHJcbiAgICBhcHREZXRhaWxzOiBhbnk7XHJcbiAgICBkYXRhOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlLCBwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2UpIHtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZSA9IGFwYXJ0bWVudFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0QXBhcnRtZW50cygpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5hcGFydG1lbnRzID0gcmVzKTsgICBcclxuICAgIC8vIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRTdGF0cygpLnN1YnNjcmliZShyZXMgPT4gdGhpcy50ZW1wID0gcmVzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudGVtcCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldEF2YWlsYWJsZShhcGFydG1lbnQpe1xyXG4gICAgLy8gICB0aGlzLmRhdGEgPSBhcGFydG1lbnQ7XHJcbiAgICAvLyAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXREZXRhaWxzKHRoaXMuZGF0YS5Vbml0VHlwZSwnQXZhaWxhYmxlJykuc3Vic2NyaWJlKHJlcyA9PiBcclxuICAgIC8vICAgICB7dGhpcy5hcHREZXRhaWxzID0gcmVzXHJcbiAgICAvLyAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYXB0RGV0YWlscykpOyBcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXRMZWFzZWQoYXBhcnRtZW50KXtcclxuICAgIC8vICAgdGhpcy5kYXRhID0gYXBhcnRtZW50O1xyXG4gICAgLy8gICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0RGV0YWlscyh0aGlzLmRhdGEuVW5pdFR5cGUsJ0xlYXNlZCcpLnN1YnNjcmliZShyZXMgPT4gXHJcbiAgICAvLyAgICAge3RoaXMuYXB0RGV0YWlscyA9IHJlc1xyXG4gICAgLy8gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmFwdERldGFpbHMpKTsgXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
