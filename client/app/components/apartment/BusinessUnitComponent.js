System.register(['angular2/core', "angular2/router", "./BusinessUnitService"], function(exports_1, context_1) {
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
            }());
            exports_1("BusinessUnitComponent", BusinessUnitComponent);
        }
    }
});
//# sourceMappingURL=BusinessUnitComponent.js.map