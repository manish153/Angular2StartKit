System.register(['@angular/core', "@angular/router-deprecated", "./ApartmentService"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, ApartmentService_1;
    var BusinessUnitComponent;
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
            }],
        execute: function() {
            let BusinessUnitComponent = class BusinessUnitComponent {
                constructor(apartmentService) {
                    this.apartmentService = apartmentService;
                    this.apartmentService = apartmentService;
                }
                ngOnInit() {
                    this.apartmentService.getBU().subscribe(res => this.businessUnits = res);
                }
            };
            BusinessUnitComponent = __decorate([
                core_1.Component({
                    selector: 'business-unit',
                    template: `
   <div *ngFor="#bu of businessUnits" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{bu.BusinessUnitName}}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                Non dolore elit adipisicing ea repre henderit consectetur culpa.
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a [routerLink]="['Apartment']" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{bu.BusinessUnitName}}</a>
              </div>
    </div>          
    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService])
            ], BusinessUnitComponent);
            exports_1("BusinessUnitComponent", BusinessUnitComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1VuaXRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBR0ksWUFBb0IsZ0JBQWtDO29CQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQUN0RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsUUFBUTtvQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RSxDQUFDO1lBQ0wsQ0FBQztZQTlCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztLQVlQO29CQUVELFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO2lCQUVsQyxDQUFDOztxQ0FBQTtZQUVGLHlEQVVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBhcnRtZW50L0J1c2luZXNzVW5pdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVDb25maWd9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZFwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9EYXNoYm9hcmRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRDb21wb25lbnR9IGZyb20gXCIuL0FwYXJ0bWVudENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuL0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYnVzaW5lc3MtdW5pdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgPGRpdiAqbmdGb3I9XCIjYnUgb2YgYnVzaW5lc3NVbml0c1wiIGNsYXNzPVwiZGVtby11cGRhdGVzIG1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTQtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmQgbWRsLWNvbG9yLS10ZWFsLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj57e2J1LkJ1c2luZXNzVW5pdE5hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWdyZXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICBOb24gZG9sb3JlIGVsaXQgYWRpcGlzaWNpbmcgZWEgcmVwcmUgaGVuZGVyaXQgY29uc2VjdGV0dXIgY3VscGEuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQXBhcnRtZW50J11cIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPnt7YnUuQnVzaW5lc3NVbml0TmFtZX19PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbiAgICAvLyxwcm92aWRlcnM6IFtCdXNpbmVzc1VuaXRTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzVW5pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgYnVzaW5lc3NVbml0czogT2JqZWN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UgPSBhcGFydG1lbnRTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmdldEJVKCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ1c2luZXNzVW5pdHMgPSByZXMpOyAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
