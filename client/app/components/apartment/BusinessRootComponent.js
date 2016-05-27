System.register(['angular2/core', "angular2/router", "./BusinessUnitService", "./ApartmentComponent", "./BusinessUnitComponent"], function(exports_1, context_1) {
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
    var core_1, router_1, BusinessUnitService_1, ApartmentComponent_1, BusinessUnitComponent_1;
    var BusinessRootComponent;
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
            },
            function (ApartmentComponent_1_1) {
                ApartmentComponent_1 = ApartmentComponent_1_1;
            },
            function (BusinessUnitComponent_1_1) {
                BusinessUnitComponent_1 = BusinessUnitComponent_1_1;
            }],
        execute: function() {
            BusinessRootComponent = (function () {
                function BusinessRootComponent() {
                }
                BusinessRootComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: BusinessUnitComponent_1.BusinessUnitComponent, as: 'BusinessUnit', useAsDefault: true },
                        { path: '/apartment', component: ApartmentComponent_1.ApartmentComponent, as: 'Apartment' }
                    ]),
                    core_1.Component({
                        selector: 'business-unit',
                        template: "<router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [BusinessUnitService_1.BusinessUnitService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BusinessRootComponent);
                return BusinessRootComponent;
            }());
            exports_1("BusinessRootComponent", BusinessRootComponent);
        }
    }
});
//# sourceMappingURL=BusinessRootComponent.js.map