System.register(['@angular/core', "@angular/router-deprecated", "./ApartmentComponent", "./BusinessUnitComponent", "./AptDetailsComponent", "./AptContentComponent"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, ApartmentComponent_1, BusinessUnitComponent_1, AptDetailsComponent_1, AptContentComponent_1;
    var BusinessRootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
                router_deprecated_1.RouteConfig([
                    { path: '/', component: BusinessUnitComponent_1.BusinessUnitComponent, name: 'BusinessUnit', useAsDefault: true },
                    { path: '/aptdetails', component: AptDetailsComponent_1.AptDetailsComponent, name: 'AptDetails' },
                    { path: '/apartment', component: ApartmentComponent_1.ApartmentComponent, name: 'Apartment' },
                    { path: '/aptcontent', component: AptContentComponent_1.AptContentComponent, name: 'AptContent' }
                ]),
                core_1.Component({
                    selector: 'business-unit',
                    template: `<router-outlet></router-outlet>`,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], BusinessRootComponent);
            exports_1("BusinessRootComponent", BusinessRootComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQ0U7Z0JBQWdCLENBQUM7WUFDbkIsQ0FBQztZQWpCRDtnQkFBQywrQkFBVyxDQUFDO29CQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsNkNBQXFCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO29CQUN6RixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHlDQUFtQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7b0JBQzNFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsdUNBQWtCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtvQkFDeEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSx5Q0FBbUIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2lCQUU5RSxDQUFDO2dCQUVELGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxpQ0FBaUM7b0JBRTNDLFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO2lCQUNsQyxDQUFDOztxQ0FBQTtZQUVGLHlEQUVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBhcnRtZW50L0J1c2luZXNzUm9vdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBhcnRtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9BcGFydG1lbnRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtCdXNpbmVzc1VuaXRDb21wb25lbnR9IGZyb20gXCIuL0J1c2luZXNzVW5pdENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwdERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL0FwdERldGFpbHNDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcHRDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi9BcHRDb250ZW50Q29tcG9uZW50XCI7XHJcblxyXG5cclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBCdXNpbmVzc1VuaXRDb21wb25lbnQsIG5hbWU6ICdCdXNpbmVzc1VuaXQnLCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcclxuICAgIHsgcGF0aDogJy9hcHRkZXRhaWxzJywgY29tcG9uZW50OiBBcHREZXRhaWxzQ29tcG9uZW50LCBuYW1lOiAnQXB0RGV0YWlscycgfSwgXHJcbiAgICB7IHBhdGg6ICcvYXBhcnRtZW50JywgY29tcG9uZW50OiBBcGFydG1lbnRDb21wb25lbnQsIG5hbWU6ICdBcGFydG1lbnQnIH0sXHJcbiAgICB7IHBhdGg6ICcvYXB0Y29udGVudCcsIGNvbXBvbmVudDogQXB0Q29udGVudENvbXBvbmVudCwgbmFtZTogJ0FwdENvbnRlbnQnIH1cclxuICAgIFxyXG5dKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2J1c2luZXNzLXVuaXQnLFxyXG4gICAgdGVtcGxhdGU6IGA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+YCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NSb290Q29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
