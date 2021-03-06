System.register(['@angular/core', "@angular/router-deprecated"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var ResidentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            let ResidentsComponent = class ResidentsComponent {
                constructor() {
                }
            };
            ResidentsComponent = __decorate([
                core_1.Component({
                    selector: 'residents',
                    styleUrls: ['../app/assets/app.css'],
                    template: `<h1>residents Page - work in progress </h1>
    
    <a [routerLink]="['../Dashboard']">Back to Dash</a>

    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], ResidentsComponent);
            exports_1("ResidentsComponent", ResidentsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Jlc2lkZW50cy9SZXNpZGVudHNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFDSTtnQkFBZ0IsQ0FBQztZQUNyQixDQUFDO1lBYkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3BDLFFBQVEsRUFBRTs7OztLQUlUO29CQUNELFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO2lCQUNsQyxDQUFDOztrQ0FBQTtZQUVGLG1EQUVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcmVzaWRlbnRzL1Jlc2lkZW50c0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmVzaWRlbnRzJyxcclxuICAgIHN0eWxlVXJsczogWycuLi9hcHAvYXNzZXRzL2FwcC5jc3MnXSxcclxuICAgIHRlbXBsYXRlOiBgPGgxPnJlc2lkZW50cyBQYWdlIC0gd29yayBpbiBwcm9ncmVzcyA8L2gxPlxyXG4gICAgXHJcbiAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL0Rhc2hib2FyZCddXCI+QmFjayB0byBEYXNoPC9hPlxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzaWRlbnRzQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
