System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
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
            let PaymentsComponent = class PaymentsComponent {
                constructor() {
                }
            };
            PaymentsComponent = __decorate([
                core_1.Component({
                    selector: 'payments',
                    styleUrls: ['../app/assets/app.css'],
                    template: `<h1>Payments Page - work in progress </h1>
    
    <a [routerLink]="['../Dashboard']">Back to Dash</a>

    `,
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], PaymentsComponent);
            exports_1("PaymentsComponent", PaymentsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3BheW1lbnRzL1BheW1lbnRzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQ0k7Z0JBQWdCLENBQUM7WUFDckIsQ0FBQztZQWJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNwQyxRQUFRLEVBQUU7Ozs7S0FJVDtvQkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7aUNBQUE7WUFFRixpREFFQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3BheW1lbnRzL1BheW1lbnRzQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGF5bWVudHMnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL2FwcC9hc3NldHMvYXBwLmNzcyddLFxyXG4gICAgdGVtcGxhdGU6IGA8aDE+UGF5bWVudHMgUGFnZSAtIHdvcmsgaW4gcHJvZ3Jlc3MgPC9oMT5cclxuICAgIFxyXG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9EYXNoYm9hcmQnXVwiPkJhY2sgdG8gRGFzaDwvYT5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBheW1lbnRzQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
