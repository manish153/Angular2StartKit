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
            }],
        execute: function() {
            ApartmentComponent = (function () {
                function ApartmentComponent(apartmentService) {
                    this.apartmentService = apartmentService;
                    this.apartmentService = apartmentService;
                }
                ApartmentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.apartmentService.getEntries().subscribe(function (res) { return _this.apartments = res; });
                    console.log(this.apartments);
                };
                ApartmentComponent = __decorate([
                    core_1.Component({
                        selector: 'apartment',
                        /*template: `<h1>Apartment Page - work in progress </h1>
                             <ul>
                              <li *ngFor="#apartment of apartments">{{apartment.UnitType}}</li>
                             </ul>
                    
                        <a [routerLink]="['../Dashboard']">Back to Dash</a>
                        `,*/
                        template: "\n   <div *ngFor=\"#apartment of apartments\" class=\"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n              <div class=\"mdl-card__title mdl-card--expand mdl-color--teal-300\">\n                <h2 class=\"mdl-card__title-text\">{{apartment.unitID}}</h2>\n              </div>\n              <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\n                Non dolore elit adipisicing ea repre henderit consectetur culpa.\n              </div>\n              <div class=\"mdl-card__actions mdl-card--border\">\n                <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">{{apartment.UnitType}}</a>\n              </div>\n    </div>          \n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [ApartmentService_1.ApartmentService])
                ], ApartmentComponent);
                return ApartmentComponent;
            }());
            exports_1("ApartmentComponent", ApartmentComponent);
        }
    }
});
//# sourceMappingURL=ApartmentComponent.js.map