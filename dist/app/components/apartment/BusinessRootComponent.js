System.register(['angular2/core', "angular2/router", "./BusinessUnitService", "./ApartmentComponent", "./BusinessUnitComponent"], function(exports_1) {
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
            })();
            exports_1("BusinessRootComponent", BusinessRootComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQnVzaW5lc3NSb290Q29tcG9uZW50IiwiQnVzaW5lc3NSb290Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFlRUE7Z0JBQWdCQyxDQUFDQTtnQkFmbkJEO29CQUFDQSxvQkFBV0EsQ0FBQ0E7d0JBQ1RBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLDZDQUFxQkEsRUFBRUEsRUFBRUEsRUFBRUEsY0FBY0EsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7d0JBQ3ZGQSxFQUFFQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxTQUFTQSxFQUFFQSx1Q0FBa0JBLEVBQUVBLEVBQUVBLEVBQUVBLFdBQVdBLEVBQUVBO3FCQUN6RUEsQ0FBQ0E7b0JBRURBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7d0JBQzNCQSxRQUFRQSxFQUFFQSx1Q0FDUEE7d0JBRURBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7d0JBQy9CQSxTQUFTQSxFQUFFQSxDQUFDQSx5Q0FBbUJBLENBQUNBO3FCQUNuQ0EsQ0FBQ0E7OzBDQUlEQTtnQkFBREEsNEJBQUNBO1lBQURBLENBaEJBLEFBZ0JDQSxJQUFBO1lBaEJELHlEQWdCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZ30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9EYXNoYm9hcmRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtCdXNpbmVzc1VuaXRTZXJ2aWNlfSBmcm9tIFwiLi9CdXNpbmVzc1VuaXRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXBhcnRtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9BcGFydG1lbnRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtCdXNpbmVzc1VuaXRDb21wb25lbnR9IGZyb20gXCIuL0J1c2luZXNzVW5pdENvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogQnVzaW5lc3NVbml0Q29tcG9uZW50LCBhczogJ0J1c2luZXNzVW5pdCcsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG4gICAgeyBwYXRoOiAnL2FwYXJ0bWVudCcsIGNvbXBvbmVudDogQXBhcnRtZW50Q29tcG9uZW50LCBhczogJ0FwYXJ0bWVudCcgfVxyXG5dKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2J1c2luZXNzLXVuaXQnLFxyXG4gIHRlbXBsYXRlOiBgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbQnVzaW5lc3NVbml0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc1Jvb3RDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
