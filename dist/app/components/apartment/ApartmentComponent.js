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
    var ApartmentComponent;
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
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService])
            ], ApartmentComponent);
            exports_1("ApartmentComponent", ApartmentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBT0ksWUFBb0IsZ0JBQWtDLEVBQVUsYUFBNEI7b0JBQXhFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQzVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCxRQUFRO29CQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQzlFLHNFQUFzRTtvQkFDdEUsMENBQTBDO2dCQUMxQyxDQUFDO1lBa0JMLENBQUM7WUF2REQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7S0FlUDtvQkFFRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7a0NBQUE7WUFFRixtREFpQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXBhcnRtZW50Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUyxSb3V0ZUNvbmZpZ30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9EYXNoYm9hcmRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9BcGFydG1lbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge1NoYXJlZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9TaGFyZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXB0RGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vQXB0RGV0YWlsc0NvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcGFydG1lbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgIDxkaXYgKm5nRm9yPVwiI2FwYXJ0bWVudCBvZiBhcGFydG1lbnRzXCIgY2xhc3M9XCJkZW1vLXVwZGF0ZXMgbWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tNC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZCBtZGwtY29sb3ItLXRlYWwtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPnt7YXBhcnRtZW50LnVuaXRJRH19PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICAgIE5vbiBkb2xvcmUgZWxpdCBhZGlwaXNpY2luZyBlYSByZXByZSBoZW5kZXJpdCBjb25zZWN0ZXR1ciBjdWxwYS5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e2FwYXJ0bWVudC5Vbml0VHlwZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBcHREZXRhaWxzJywge1VuaXRUeXBlOiBhcGFydG1lbnQuVW5pdFR5cGUsIGFwdFN0YXR1czogJ0F2YWlsYWJsZSd9XVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgPkF2YWlsYWJsZTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQXB0RGV0YWlscycsIHtVbml0VHlwZTogYXBhcnRtZW50LlVuaXRUeXBlLCBhcHRTdGF0dXM6ICdMZWFzZWQnfV1cIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPkxlYXNlZCA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPk5leHQgYXZhaWxhYmlsaXR5IDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwYXJ0bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGFwYXJ0bWVudHM6IE9iamVjdFtdO1xyXG4gICAgcHVibGljIHRlbXA6IE9iamVjdFtdO1xyXG4gICAgYXB0RGV0YWlsczogYW55O1xyXG4gICAgZGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBhcnRtZW50U2VydmljZTogQXBhcnRtZW50U2VydmljZSwgcHJpdmF0ZSBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UgPSBhcGFydG1lbnRTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmdldEFwYXJ0bWVudHMoKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuYXBhcnRtZW50cyA9IHJlcyk7ICAgXHJcbiAgICAvLyB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0U3RhdHMoKS5zdWJzY3JpYmUocmVzID0+IHRoaXMudGVtcCA9IHJlcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnRlbXApKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRBdmFpbGFibGUoYXBhcnRtZW50KXtcclxuICAgIC8vICAgdGhpcy5kYXRhID0gYXBhcnRtZW50O1xyXG4gICAgLy8gICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0RGV0YWlscyh0aGlzLmRhdGEuVW5pdFR5cGUsJ0F2YWlsYWJsZScpLnN1YnNjcmliZShyZXMgPT4gXHJcbiAgICAvLyAgICAge3RoaXMuYXB0RGV0YWlscyA9IHJlc1xyXG4gICAgLy8gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmFwdERldGFpbHMpKTsgXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0TGVhc2VkKGFwYXJ0bWVudCl7XHJcbiAgICAvLyAgIHRoaXMuZGF0YSA9IGFwYXJ0bWVudDtcclxuICAgIC8vICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmdldERldGFpbHModGhpcy5kYXRhLlVuaXRUeXBlLCdMZWFzZWQnKS5zdWJzY3JpYmUocmVzID0+IFxyXG4gICAgLy8gICAgIHt0aGlzLmFwdERldGFpbHMgPSByZXNcclxuICAgIC8vICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5hcHREZXRhaWxzKSk7IFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
