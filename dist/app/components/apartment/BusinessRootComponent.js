System.register(['angular2/core', "angular2/router", "./ApartmentComponent", "./BusinessUnitComponent", "./AptDetailsComponent", "./AptContentComponent"], function(exports_1, context_1) {
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
    var core_1, router_1, ApartmentComponent_1, BusinessUnitComponent_1, AptDetailsComponent_1, AptContentComponent_1;
    var BusinessRootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ApartmentComponent_1_1) {
                ApartmentComponent_1 = ApartmentComponent_1_1;
            },
            function (BusinessUnitComponent_1_1) {
                BusinessUnitComponent_1 = BusinessUnitComponent_1_1;
            },
            function (AptDetailsComponent_1_1) {
                AptDetailsComponent_1 = AptDetailsComponent_1_1;
            },
            function (AptContentComponent_1_1) {
                AptContentComponent_1 = AptContentComponent_1_1;
            }],
        execute: function() {
            let BusinessRootComponent = class BusinessRootComponent {
                constructor() {
                }
            };
            BusinessRootComponent = __decorate([
                router_1.RouteConfig([
                    { path: '/', component: BusinessUnitComponent_1.BusinessUnitComponent, as: 'BusinessUnit', useAsDefault: true },
                    { path: '/aptdetails', component: AptDetailsComponent_1.AptDetailsComponent, as: 'AptDetails' },
                    { path: '/apartment', component: ApartmentComponent_1.ApartmentComponent, as: 'Apartment' },
                    { path: '/aptcontent', component: AptContentComponent_1.AptContentComponent, as: 'AptContent' }
                ]),
                core_1.Component({
                    selector: 'business-unit',
                    template: `<router-outlet></router-outlet>`,
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], BusinessRootComponent);
            exports_1("BusinessRootComponent", BusinessRootComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQ0U7Z0JBQWdCLENBQUM7WUFDbkIsQ0FBQztZQWpCRDtnQkFBQyxvQkFBVyxDQUFDO29CQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsNkNBQXFCLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO29CQUN2RixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHlDQUFtQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUU7b0JBQ3pFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsdUNBQWtCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRTtvQkFDdEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSx5Q0FBbUIsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFO2lCQUU1RSxDQUFDO2dCQUVELGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxpQ0FBaUM7b0JBRTNDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO2lCQUNsQyxDQUFDOztxQ0FBQTtZQUVGLHlEQUVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBhcnRtZW50L0J1c2luZXNzUm9vdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwL0Rhc2hib2FyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudENvbXBvbmVudH0gZnJvbSBcIi4vQXBhcnRtZW50Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7QnVzaW5lc3NVbml0Q29tcG9uZW50fSBmcm9tIFwiLi9CdXNpbmVzc1VuaXRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcHREZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9BcHREZXRhaWxzQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXB0Q29udGVudENvbXBvbmVudH0gZnJvbSBcIi4vQXB0Q29udGVudENvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogQnVzaW5lc3NVbml0Q29tcG9uZW50LCBhczogJ0J1c2luZXNzVW5pdCcsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG4gICAgeyBwYXRoOiAnL2FwdGRldGFpbHMnLCBjb21wb25lbnQ6IEFwdERldGFpbHNDb21wb25lbnQsIGFzOiAnQXB0RGV0YWlscycgfSwgXHJcbiAgICB7IHBhdGg6ICcvYXBhcnRtZW50JywgY29tcG9uZW50OiBBcGFydG1lbnRDb21wb25lbnQsIGFzOiAnQXBhcnRtZW50JyB9LFxyXG4gICAgeyBwYXRoOiAnL2FwdGNvbnRlbnQnLCBjb21wb25lbnQ6IEFwdENvbnRlbnRDb21wb25lbnQsIGFzOiAnQXB0Q29udGVudCcgfVxyXG4gICAgXHJcbl0pXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYnVzaW5lc3MtdW5pdCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5gLFxyXG5cclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc1Jvb3RDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
