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
                    { path: '/', component: BusinessUnitComponent_1.BusinessUnitComponent, as: 'BusinessUnit', useAsDefault: true },
                    { path: '/aptdetails', component: AptDetailsComponent_1.AptDetailsComponent, as: 'AptDetails' },
                    { path: '/apartment', component: ApartmentComponent_1.ApartmentComponent, as: 'Apartment' },
                    { path: '/aptcontent', component: AptContentComponent_1.AptContentComponent, as: 'AptContent' }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQ0U7Z0JBQWdCLENBQUM7WUFDbkIsQ0FBQztZQWpCRDtnQkFBQywrQkFBVyxDQUFDO29CQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsNkNBQXFCLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO29CQUN2RixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHlDQUFtQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUU7b0JBQ3pFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsdUNBQWtCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRTtvQkFDdEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSx5Q0FBbUIsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFO2lCQUU1RSxDQUFDO2dCQUVELGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxpQ0FBaUM7b0JBRTNDLFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO2lCQUNsQyxDQUFDOztxQ0FBQTtZQUVGLHlEQUVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBhcnRtZW50L0J1c2luZXNzUm9vdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBhcnRtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9BcGFydG1lbnRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtCdXNpbmVzc1VuaXRDb21wb25lbnR9IGZyb20gXCIuL0J1c2luZXNzVW5pdENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwdERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL0FwdERldGFpbHNDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcHRDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi9BcHRDb250ZW50Q29tcG9uZW50XCI7XHJcblxyXG5cclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBCdXNpbmVzc1VuaXRDb21wb25lbnQsIGFzOiAnQnVzaW5lc3NVbml0JywgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXHJcbiAgICB7IHBhdGg6ICcvYXB0ZGV0YWlscycsIGNvbXBvbmVudDogQXB0RGV0YWlsc0NvbXBvbmVudCwgYXM6ICdBcHREZXRhaWxzJyB9LCBcclxuICAgIHsgcGF0aDogJy9hcGFydG1lbnQnLCBjb21wb25lbnQ6IEFwYXJ0bWVudENvbXBvbmVudCwgYXM6ICdBcGFydG1lbnQnIH0sXHJcbiAgICB7IHBhdGg6ICcvYXB0Y29udGVudCcsIGNvbXBvbmVudDogQXB0Q29udGVudENvbXBvbmVudCwgYXM6ICdBcHRDb250ZW50JyB9XHJcbiAgICBcclxuXSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdidXNpbmVzcy11bml0JyxcclxuICAgIHRlbXBsYXRlOiBgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PmAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzUm9vdENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
