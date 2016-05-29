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
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [ApartmentService_1.ApartmentService])
                ], ApartmentComponent);
                return ApartmentComponent;
            })();
            exports_1("ApartmentComponent", ApartmentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBhcnRtZW50Q29tcG9uZW50IiwiQXBhcnRtZW50Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBhcnRtZW50Q29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkE4QklBLDRCQUFvQkEsZ0JBQWtDQTtvQkFBbENDLHFCQUFnQkEsR0FBaEJBLGdCQUFnQkEsQ0FBa0JBO29CQUN0REEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxnQkFBZ0JBLENBQUNBO2dCQUN6Q0EsQ0FBQ0E7Z0JBRURELHFDQUFRQSxHQUFSQTtvQkFBQUUsaUJBR0NBO29CQUZEQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEdBQUdBLEVBQXJCQSxDQUFxQkEsQ0FBQ0EsQ0FBQ0E7b0JBQzNFQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQXJDTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3JCQTs7Ozs7OzRCQU1JQTt3QkFDTkEsUUFBUUEsRUFBRUEsaXdCQVlQQTt3QkFFREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtxQkFDbENBLENBQUNBOzt1Q0FjREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQXRDQSxBQXNDQ0EsSUFBQTtZQXRDRCxtREFzQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXBhcnRtZW50Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9EYXNoYm9hcmRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tIFwiLi9BcGFydG1lbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcGFydG1lbnQnLFxyXG4gICAgLyp0ZW1wbGF0ZTogYDxoMT5BcGFydG1lbnQgUGFnZSAtIHdvcmsgaW4gcHJvZ3Jlc3MgPC9oMT5cclxuICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpICpuZ0Zvcj1cIiNhcGFydG1lbnQgb2YgYXBhcnRtZW50c1wiPnt7YXBhcnRtZW50LlVuaXRUeXBlfX08L2xpPlxyXG4gICAgICAgICA8L3VsPiBcclxuXHJcbiAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL0Rhc2hib2FyZCddXCI+QmFjayB0byBEYXNoPC9hPlxyXG4gICAgYCwqL1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgIDxkaXYgKm5nRm9yPVwiI2FwYXJ0bWVudCBvZiBhcGFydG1lbnRzXCIgY2xhc3M9XCJkZW1vLXVwZGF0ZXMgbWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tNC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZCBtZGwtY29sb3ItLXRlYWwtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPnt7YXBhcnRtZW50LnVuaXRJRH19PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICAgIE5vbiBkb2xvcmUgZWxpdCBhZGlwaXNpY2luZyBlYSByZXByZSBoZW5kZXJpdCBjb25zZWN0ZXR1ciBjdWxwYS5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPnt7YXBhcnRtZW50LlVuaXRUeXBlfX08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICBgLFxyXG5cclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGFydG1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBhcGFydG1lbnRzOiBPYmplY3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UpIHtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZSA9IGFwYXJ0bWVudFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0RW50cmllcygpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5hcGFydG1lbnRzID0gcmVzKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYXBhcnRtZW50cyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
