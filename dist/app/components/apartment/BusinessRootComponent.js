System.register(['angular2/core', "angular2/router", "./ApartmentComponent", "./BusinessUnitComponent", "./AptDetailsComponent"], function(exports_1, context_1) {
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
    var core_1, router_1, ApartmentComponent_1, BusinessUnitComponent_1, AptDetailsComponent_1;
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
                    { path: '/apartment', component: ApartmentComponent_1.ApartmentComponent, as: 'Apartment' }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQ0U7Z0JBQWdCLENBQUM7WUFDbkIsQ0FBQztZQWhCRDtnQkFBQyxvQkFBVyxDQUFDO29CQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsNkNBQXFCLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO29CQUN2RixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHlDQUFtQixFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUU7b0JBQ3pFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsdUNBQWtCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRTtpQkFFekUsQ0FBQztnQkFFRCxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsaUNBQWlDO29CQUUzQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7cUNBQUE7WUFFRix5REFFQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZ30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9EYXNoYm9hcmRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRDb21wb25lbnR9IGZyb20gXCIuL0FwYXJ0bWVudENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0J1c2luZXNzVW5pdENvbXBvbmVudH0gZnJvbSBcIi4vQnVzaW5lc3NVbml0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXB0RGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vQXB0RGV0YWlsc0NvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogQnVzaW5lc3NVbml0Q29tcG9uZW50LCBhczogJ0J1c2luZXNzVW5pdCcsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG4gICAgeyBwYXRoOiAnL2FwdGRldGFpbHMnLCBjb21wb25lbnQ6IEFwdERldGFpbHNDb21wb25lbnQsIGFzOiAnQXB0RGV0YWlscycgfSwgLy8gbm90IHdvcmtpbmcgYXMgZXhwZWN0ZWQgXHJcbiAgICB7IHBhdGg6ICcvYXBhcnRtZW50JywgY29tcG9uZW50OiBBcGFydG1lbnRDb21wb25lbnQsIGFzOiAnQXBhcnRtZW50JyB9XHJcbiAgICBcclxuXSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdidXNpbmVzcy11bml0JyxcclxuICAgIHRlbXBsYXRlOiBgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PmAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzUm9vdENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
