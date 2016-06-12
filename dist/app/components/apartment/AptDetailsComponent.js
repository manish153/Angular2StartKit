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
                <a [routerLink]="['AptContent']" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{aptdetails.aptType}}</a>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcHREZXRhaWxzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQVFJLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQUUsTUFBbUI7b0JBQTdGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQzVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBR0QsUUFBUTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHO3dCQUMxRSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTt3QkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELGNBQWMsQ0FBQyxlQUFxQyxFQUFFLGVBQXFDO29CQUMzRixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNkLENBQUM7WUFDSCxDQUFDO1lBakREO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpQlA7b0JBRUQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7aUJBQ2xDLENBQUM7O21DQUFBO1lBRUYscURBeUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBhcnRtZW50L0FwdERldGFpbHNDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlUGFyYW1zLENhblJldXNlLENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwL0Rhc2hib2FyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuL0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaGFyZWRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvU2hhcmVkU2VydmljZVwiOyBcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXB0ZGV0YWlscycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICA8YSBbcm91dGVyTGlua109XCJbJ0FwYXJ0bWVudCddXCI+QmFjazwvYT5cclxuICAgICA8ZGl2ICpuZ0Zvcj1cIiNhcHRkZXRhaWxzIG9mIGFwdERldGFpbHNcIiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+e3thcHRkZXRhaWxzLmFwdElEfX08L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgIHt7YXB0ZGV0YWlscy5hcHREZXNjfX0gIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0FwdENvbnRlbnQnXVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+e3thcHRkZXRhaWxzLmFwdFR5cGV9fTwvYT5cclxuICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiYXB0ZGV0YWlscy5hcHRTdGF0dXM9PSdBdmFpbGFibGUnXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e2FwdGRldGFpbHMuYXB0U3RhdHVzfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImFwdGRldGFpbHMuYXB0U3RhdHVzPT0nTGVhc2VkJ1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+e3thcHRkZXRhaWxzLmxlYXNlRW5kRGF0ZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj4kIHt7YXB0ZGV0YWlscy5yZW50QW1vdW50fX08L2E+XHJcbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImFwdGRldGFpbHMuYXB0U3RhdHVzPT0nTGVhc2VkJ1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+e3thcHRkZXRhaWxzLnJlc2lkZW50RW1haWx9fTwvYT4gIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICBgLFxyXG5cclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHREZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDYW5SZXVzZSB7XHJcblxyXG4gICAgYXB0RGV0YWlsczogYW55O1xyXG4gICAgZGF0YTogYW55O1xyXG4gICAgYXB0U3RhdHVzOiBzdHJpbmc7XHJcbiAgICBVbml0VHlwZTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UsIHByaXZhdGUgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZSwgcGFyYW1zOiBSb3V0ZVBhcmFtcykge1xyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlID0gYXBhcnRtZW50U2VydmljZTtcclxuICAgIHRoaXMuYXB0U3RhdHVzID0gcGFyYW1zLmdldCgnYXB0U3RhdHVzJyk7XHJcbiAgICB0aGlzLlVuaXRUeXBlID0gcGFyYW1zLmdldCgnVW5pdFR5cGUnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXREZXRhaWxzKHRoaXMuVW5pdFR5cGUsdGhpcy5hcHRTdGF0dXMpLnN1YnNjcmliZShyZXMgPT5cclxuICAgICAgICB7dGhpcy5hcHREZXRhaWxzID0gcmVzXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYXB0RGV0YWlscykpOyBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXJDYW5SZXVzZShuZXh0SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
