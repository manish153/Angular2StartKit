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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQ0U7Z0JBQWdCLENBQUM7Z0JBZm5CO29CQUFDLG9CQUFXLENBQUM7d0JBQ1QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSw2Q0FBcUIsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQ3ZGLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsdUNBQWtCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRTtxQkFDekUsQ0FBQztvQkFFRCxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUMzQixRQUFRLEVBQUUsdUNBQ1A7d0JBRUQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLHlDQUFtQixDQUFDO3FCQUNuQyxDQUFDOzt5Q0FBQTtnQkFJRiw0QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQseURBRUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQnVzaW5lc3NSb290Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QnVzaW5lc3NVbml0U2VydmljZX0gZnJvbSBcIi4vQnVzaW5lc3NVbml0U2VydmljZVwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudENvbXBvbmVudH0gZnJvbSBcIi4vQXBhcnRtZW50Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7QnVzaW5lc3NVbml0Q29tcG9uZW50fSBmcm9tIFwiLi9CdXNpbmVzc1VuaXRDb21wb25lbnRcIjtcclxuXHJcblxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEJ1c2luZXNzVW5pdENvbXBvbmVudCwgYXM6ICdCdXNpbmVzc1VuaXQnLCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcclxuICAgIHsgcGF0aDogJy9hcGFydG1lbnQnLCBjb21wb25lbnQ6IEFwYXJ0bWVudENvbXBvbmVudCwgYXM6ICdBcGFydG1lbnQnIH1cclxuXSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdidXNpbmVzcy11bml0JyxcclxuICB0ZW1wbGF0ZTogYDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0J1c2luZXNzVW5pdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NSb290Q29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
