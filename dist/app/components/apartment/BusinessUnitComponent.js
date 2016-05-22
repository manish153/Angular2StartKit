System.register(['angular2/core', "angular2/router", "./BusinessUnitService"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, BusinessUnitService_1;
    var BusinessUnitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (BusinessUnitService_1_1) {
                BusinessUnitService_1 = BusinessUnitService_1_1;
            }],
        execute: function() {
            // @RouteConfig([
            //     { path: '/bus', component: BusinessUnitComponent, as: 'BusinessUnit', useAsDefault:true},
            //     { path: '/apartment', component: ApartmentComponent, as: 'Apartment'}
            // ])
            BusinessUnitComponent = (function () {
                function BusinessUnitComponent(businessUnitService) {
                    this.businessUnitService = businessUnitService;
                    this.businessUnitService = businessUnitService;
                }
                BusinessUnitComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.businessUnitService.getBU().subscribe(function (res) { return _this.businessUnits = res; });
                };
                BusinessUnitComponent = __decorate([
                    core_1.Component({
                        selector: 'business-unit',
                        template: "\n   <div *ngFor=\"#bu of businessUnits\" class=\"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n              <div class=\"mdl-card__title mdl-card--expand mdl-color--teal-300\">\n                <h2 class=\"mdl-card__title-text\">{{bu.BusinessUnitName}}</h2>\n              </div>\n              <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\n                Non dolore elit adipisicing ea repre henderit consectetur culpa.\n              </div>\n              <div class=\"mdl-card__actions mdl-card--border\">\n                <a [routerLink]=\"['Apartment']\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">{{bu.BusinessUnitName}}</a>\n              </div>\n    </div>          \n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [BusinessUnitService_1.BusinessUnitService]
                    }), 
                    __metadata('design:paramtypes', [BusinessUnitService_1.BusinessUnitService])
                ], BusinessUnitComponent);
                return BusinessUnitComponent;
            })();
            exports_1("BusinessUnitComponent", BusinessUnitComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1VuaXRDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQnVzaW5lc3NVbml0Q29tcG9uZW50IiwiQnVzaW5lc3NVbml0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQnVzaW5lc3NVbml0Q29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQSxpQkFBaUI7WUFDakIsZ0dBQWdHO1lBQ2hHLDRFQUE0RTtZQUM1RSxLQUFLO1lBRUw7Z0JBd0JJQSwrQkFBb0JBLG1CQUF3Q0E7b0JBQXhDQyx3QkFBbUJBLEdBQW5CQSxtQkFBbUJBLENBQXFCQTtvQkFDNURBLElBQUlBLENBQUNBLG1CQUFtQkEsR0FBR0EsbUJBQW1CQSxDQUFDQTtnQkFDL0NBLENBQUNBO2dCQUVERCx3Q0FBUUEsR0FBUkE7b0JBQUFFLGlCQUVDQTtvQkFEREEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxHQUFHQSxFQUF4QkEsQ0FBd0JBLENBQUNBLENBQUNBO2dCQUM1RUEsQ0FBQ0E7Z0JBOUJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDM0JBLFFBQVFBLEVBQUVBLHF4QkFZUEE7d0JBRURBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7d0JBQy9CQSxTQUFTQSxFQUFFQSxDQUFDQSx5Q0FBbUJBLENBQUNBO3FCQUNuQ0EsQ0FBQ0E7OzBDQWFEQTtnQkFBREEsNEJBQUNBO1lBQURBLENBL0JBLEFBK0JDQSxJQUFBO1lBL0JELHlEQStCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1VuaXRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwL0Rhc2hib2FyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0J1c2luZXNzVW5pdFNlcnZpY2V9IGZyb20gXCIuL0J1c2luZXNzVW5pdFNlcnZpY2VcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRDb21wb25lbnR9IGZyb20gXCIuL0FwYXJ0bWVudENvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG4vLyBAUm91dGVDb25maWcoW1xyXG4vLyAgICAgeyBwYXRoOiAnL2J1cycsIGNvbXBvbmVudDogQnVzaW5lc3NVbml0Q29tcG9uZW50LCBhczogJ0J1c2luZXNzVW5pdCcsIHVzZUFzRGVmYXVsdDp0cnVlfSxcclxuLy8gICAgIHsgcGF0aDogJy9hcGFydG1lbnQnLCBjb21wb25lbnQ6IEFwYXJ0bWVudENvbXBvbmVudCwgYXM6ICdBcGFydG1lbnQnfVxyXG4vLyBdKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2J1c2luZXNzLXVuaXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgIDxkaXYgKm5nRm9yPVwiI2J1IG9mIGJ1c2luZXNzVW5pdHNcIiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+e3tidS5CdXNpbmVzc1VuaXROYW1lfX08L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgTm9uIGRvbG9yZSBlbGl0IGFkaXBpc2ljaW5nIGVhIHJlcHJlIGhlbmRlcml0IGNvbnNlY3RldHVyIGN1bHBhLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0FwYXJ0bWVudCddXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e2J1LkJ1c2luZXNzVW5pdE5hbWV9fTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0J1c2luZXNzVW5pdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NVbml0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgYnVzaW5lc3NVbml0czogT2JqZWN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBidXNpbmVzc1VuaXRTZXJ2aWNlOiBCdXNpbmVzc1VuaXRTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmJ1c2luZXNzVW5pdFNlcnZpY2UgPSBidXNpbmVzc1VuaXRTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5idXNpbmVzc1VuaXRTZXJ2aWNlLmdldEJVKCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ1c2luZXNzVW5pdHMgPSByZXMpOyAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
