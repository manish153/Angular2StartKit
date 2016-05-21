System.register(['angular2/core', "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var PaymentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PaymentsComponent = (function () {
                function PaymentsComponent() {
                }
                PaymentsComponent = __decorate([
                    core_1.Component({
                        selector: 'payments',
                        styleUrls: ['../app/assets/app.css'],
                        template: "<h1>Payments Page - work in progress </h1>\n    \n    <a [routerLink]=\"['../Dashboard']\">Back to Dash</a>\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaymentsComponent);
                return PaymentsComponent;
            })();
            exports_1("PaymentsComponent", PaymentsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3BheW1lbnRzL1BheW1lbnRzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBheW1lbnRzQ29tcG9uZW50IiwiUGF5bWVudHNDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQVlJQTtnQkFBZ0JDLENBQUNBO2dCQVpyQkQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxTQUFTQSxFQUFFQSxDQUFDQSx1QkFBdUJBLENBQUNBO3dCQUNwQ0EsUUFBUUEsRUFBRUEscUhBSVRBO3dCQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO3FCQUNsQ0EsQ0FBQ0E7O3NDQUlEQTtnQkFBREEsd0JBQUNBO1lBQURBLENBYkEsQUFhQ0EsSUFBQTtZQWJELGlEQWFDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcGF5bWVudHMvUGF5bWVudHNDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwYXltZW50cycsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vYXBwL2Fzc2V0cy9hcHAuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZTogYDxoMT5QYXltZW50cyBQYWdlIC0gd29yayBpbiBwcm9ncmVzcyA8L2gxPlxyXG4gICAgXHJcbiAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL0Rhc2hib2FyZCddXCI+QmFjayB0byBEYXNoPC9hPlxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGF5bWVudHNDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
