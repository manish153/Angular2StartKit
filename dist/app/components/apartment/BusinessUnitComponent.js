System.register(['angular2/core', "angular2/router", "./ApartmentService"], function(exports_1, context_1) {
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
    var core_1, router_1, ApartmentService_1;
    var BusinessUnitComponent;
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
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService])
            ], BusinessUnitComponent);
            exports_1("BusinessUnitComponent", BusinessUnitComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1VuaXRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBR0ksWUFBb0IsZ0JBQWtDO29CQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQUN0RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsUUFBUTtvQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RSxDQUFDO1lBQ0wsQ0FBQztZQTlCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztLQVlQO29CQUVELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO2lCQUVsQyxDQUFDOztxQ0FBQTtZQUVGLHlEQVVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBhcnRtZW50L0J1c2luZXNzVW5pdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBhcnRtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9BcGFydG1lbnRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9BcGFydG1lbnRTZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2J1c2luZXNzLXVuaXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgIDxkaXYgKm5nRm9yPVwiI2J1IG9mIGJ1c2luZXNzVW5pdHNcIiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+e3tidS5CdXNpbmVzc1VuaXROYW1lfX08L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgTm9uIGRvbG9yZSBlbGl0IGFkaXBpc2ljaW5nIGVhIHJlcHJlIGhlbmRlcml0IGNvbnNlY3RldHVyIGN1bHBhLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0FwYXJ0bWVudCddXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e2J1LkJ1c2luZXNzVW5pdE5hbWV9fTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG4gICAgLy8scHJvdmlkZXJzOiBbQnVzaW5lc3NVbml0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc1VuaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGJ1c2luZXNzVW5pdHM6IE9iamVjdFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBhcnRtZW50U2VydmljZTogQXBhcnRtZW50U2VydmljZSkge1xyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlID0gYXBhcnRtZW50U2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRCVSgpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idXNpbmVzc1VuaXRzID0gcmVzKTsgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
