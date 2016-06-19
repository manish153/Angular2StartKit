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
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService, router_1.RouteParams])
            ], AptDetailsComponent);
            exports_1("AptDetailsComponent", AptDetailsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHREZXRhaWxzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQVFJLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQUUsTUFBbUI7b0JBQTdGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQzVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBR0QsUUFBUTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHO3dCQUMxRSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTt3QkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELE9BQU8sQ0FBQyxVQUFVO29CQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBQyxVQUFVLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBRUQsY0FBYyxDQUFDLGVBQXFDLEVBQUUsZUFBcUM7b0JBQzNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztZQUNILENBQUM7WUF0REQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUDtvQkFFRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7bUNBQUE7WUFFRixxREE4QkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXB0RGV0YWlsc0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVQYXJhbXMsQ2FuUmV1c2UsQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBhcnRtZW50U2VydmljZX0gZnJvbSBcIi4vQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge1NoYXJlZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9TaGFyZWRTZXJ2aWNlXCI7IFxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHRkZXRhaWxzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQXBhcnRtZW50J11cIj5CYWNrPC9hPlxyXG4gICAgIDxkaXYgKm5nRm9yPVwiI2FwdGRldGFpbHMgb2YgYXB0RGV0YWlsc1wiIGNsYXNzPVwiZGVtby11cGRhdGVzIG1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTQtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmQgbWRsLWNvbG9yLS10ZWFsLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj57e2FwdGRldGFpbHMuYXB0SUR9fTwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWdyZXktNjAwXCI+XHJcbiAgICAgICAgICAgICAge3thcHRkZXRhaWxzLmFwdERlc2N9fSAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQXB0Q29udGVudCddXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIiAoY2xpY2spPVwib25DbGljayhhcHRkZXRhaWxzKVwiPnt7YXB0ZGV0YWlscy5hcHRUeXBlfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImFwdGRldGFpbHMuYXB0U3RhdHVzPT0nQXZhaWxhYmxlJ1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+e3thcHRkZXRhaWxzLmFwdFN0YXR1c319PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJhcHRkZXRhaWxzLmFwdFN0YXR1cz09J0xlYXNlZCdcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPnt7YXB0ZGV0YWlscy5sZWFzZUVuZERhdGV9fTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+JCB7e2FwdGRldGFpbHMucmVudEFtb3VudH19PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJhcHRkZXRhaWxzLmFwdFN0YXR1cz09J0xlYXNlZCdcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPnt7YXB0ZGV0YWlscy5yZXNpZGVudEVtYWlsfX08L2E+ICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXB0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ2FuUmV1c2Uge1xyXG5cclxuICAgIGFwdERldGFpbHM6IGFueTtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIGFwdFN0YXR1czogc3RyaW5nO1xyXG4gICAgVW5pdFR5cGU6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlLCBwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2UsIHBhcmFtczogUm91dGVQYXJhbXMpIHtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZSA9IGFwYXJ0bWVudFNlcnZpY2U7XHJcbiAgICB0aGlzLmFwdFN0YXR1cyA9IHBhcmFtcy5nZXQoJ2FwdFN0YXR1cycpO1xyXG4gICAgdGhpcy5Vbml0VHlwZSA9IHBhcmFtcy5nZXQoJ1VuaXRUeXBlJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0RGV0YWlscyh0aGlzLlVuaXRUeXBlLHRoaXMuYXB0U3RhdHVzKS5zdWJzY3JpYmUocmVzID0+XHJcbiAgICAgICAge3RoaXMuYXB0RGV0YWlscyA9IHJlc1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmFwdERldGFpbHMpKTsgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhhcHRkZXRhaWxzKXtcclxuICAgICAgdGhpcy5zaGFyZWRTZXJ2aWNlLnRlbXA9YXB0ZGV0YWlscztcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5zaGFyZWRTZXJ2aWNlLnRlbXApKTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXJDYW5SZXVzZShuZXh0SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
