System.register(['angular2/core', "angular2/router", "./ApartmentService"], function(exports_1) {
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
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [ApartmentService_1.ApartmentService]
                    }), 
                    __metadata('design:paramtypes', [ApartmentService_1.ApartmentService])
                ], ApartmentComponent);
                return ApartmentComponent;
            })();
            exports_1("ApartmentComponent", ApartmentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBhcnRtZW50Q29tcG9uZW50IiwiQXBhcnRtZW50Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBhcnRtZW50Q29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkErQklBLDRCQUFvQkEsZ0JBQWtDQTtvQkFBbENDLHFCQUFnQkEsR0FBaEJBLGdCQUFnQkEsQ0FBa0JBO29CQUN0REEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxnQkFBZ0JBLENBQUNBO2dCQUN6Q0EsQ0FBQ0E7Z0JBRURELHFDQUFRQSxHQUFSQTtvQkFBQUUsaUJBR0NBO29CQUZEQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEdBQUdBLEVBQXJCQSxDQUFxQkEsQ0FBQ0EsQ0FBQ0E7b0JBQzNFQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQXRDTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3JCQTs7Ozs7OzRCQU1JQTt3QkFDTkEsUUFBUUEsRUFBRUEsaXdCQVlQQTt3QkFFREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTt3QkFDL0JBLFNBQVNBLEVBQUVBLENBQUNBLG1DQUFnQkEsQ0FBQ0E7cUJBQ2hDQSxDQUFDQTs7dUNBY0RBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0F2Q0EsQUF1Q0NBLElBQUE7WUF2Q0QsbURBdUNDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBhcnRtZW50L0FwYXJ0bWVudENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBhcnRtZW50U2VydmljZX0gZnJvbSBcIi4vQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBhcnRtZW50JyxcclxuICAgIC8qdGVtcGxhdGU6IGA8aDE+QXBhcnRtZW50IFBhZ2UgLSB3b3JrIGluIHByb2dyZXNzIDwvaDE+XHJcbiAgICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaSAqbmdGb3I9XCIjYXBhcnRtZW50IG9mIGFwYXJ0bWVudHNcIj57e2FwYXJ0bWVudC5Vbml0VHlwZX19PC9saT5cclxuICAgICAgICAgPC91bD4gXHJcblxyXG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9EYXNoYm9hcmQnXVwiPkJhY2sgdG8gRGFzaDwvYT5cclxuICAgIGAsKi9cclxuICB0ZW1wbGF0ZTogYFxyXG4gICA8ZGl2ICpuZ0Zvcj1cIiNhcGFydG1lbnQgb2YgYXBhcnRtZW50c1wiIGNsYXNzPVwiZGVtby11cGRhdGVzIG1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTQtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmQgbWRsLWNvbG9yLS10ZWFsLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj57e2FwYXJ0bWVudC51bml0SUR9fTwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWdyZXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICBOb24gZG9sb3JlIGVsaXQgYWRpcGlzaWNpbmcgZWEgcmVwcmUgaGVuZGVyaXQgY29uc2VjdGV0dXIgY3VscGEuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e2FwYXJ0bWVudC5Vbml0VHlwZX19PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbQXBhcnRtZW50U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGFydG1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBhcGFydG1lbnRzOiBPYmplY3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UpIHtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZSA9IGFwYXJ0bWVudFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0RW50cmllcygpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5hcGFydG1lbnRzID0gcmVzKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYXBhcnRtZW50cyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
