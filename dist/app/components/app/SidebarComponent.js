System.register(['angular2/core', 'angular2/router', './DashboardComponent', '../../services/AuthService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, DashboardComponent_1, AuthService_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (DashboardComponent_1_1) {
                DashboardComponent_1 = DashboardComponent_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(service) {
                    var _this = this;
                    this.service = service;
                    this.user = JSON.parse(localStorage.getItem('profile'));
                    this.user = this.service.profileUpdated$.subscribe(function (profile) {
                        _this.user = profile;
                    });
                }
                SidebarComponent.prototype.logout = function () {
                    //this.user = this.service.profileUpdated$.subscribe(profile => { 
                    //this.user = profile})
                    this.user = 'user@example.com';
                    this.service.logout();
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'app-sidebar',
                        template: "\n      <header class=\"demo-drawer-header\">\n          <img src=\"../app/assets/images/user.jpg\" class=\"demo-avatar\">\n          <div class=\"demo-avatar-dropdown\">\n            <span>{{user.email}}</span>\n            <div class=\"mdl-layout-spacer\"></div>\n            <button id=\"accbtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n              <i class=\"material-icons\" role=\"presentation\">arrow_drop_down</i>\n              <span class=\"visuallyhidden\">Accounts</span>\n            </button>\n            <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"accbtn\">\n              <li class=\"mdl-menu__item\" [routerLink]=\"['./Profile']\">My Profile</li>\n              <li class=\"mdl-menu__item\" (click)=\"logout()\">Logout</li>\n              \n            </ul>\n          </div>\n        </header>\n        <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n          \n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Dashboard']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">dashboard</i>Dashboard</a>\n          \n\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Tasks']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">assignment</i>Tasks</a>\n\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Requests']\" ><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">delete</i>Service Requests</a>\n\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Payments']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">report</i>Payments</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Apartment']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">forum</i>Apartments</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Residents']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">flag</i>Residents</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Community']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">local_offer</i>My Community</a>\n          \n\n          <div class=\"mdl-layout-spacer\"></div>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">help_outline</i><span class=\"visuallyhidden\">Help</span></a>\n        </nav>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, DashboardComponent_1.DashboardComponent]
                    }), 
                    __metadata('design:paramtypes', [AuthService_1.AuthService])
                ], SidebarComponent);
                return SidebarComponent;
            })();
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9TaWRlYmFyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlNpZGViYXJDb21wb25lbnQiLCJTaWRlYmFyQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiU2lkZWJhckNvbXBvbmVudC5sb2dvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQStDRUEsMEJBQW9CQSxPQUFvQkE7b0JBL0MxQ0MsaUJBNERDQTtvQkFicUJBLFlBQU9BLEdBQVBBLE9BQU9BLENBQWFBO29CQUh4Q0EsU0FBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBSWpEQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxlQUFlQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxPQUFPQTt3QkFDeERBLEtBQUlBLENBQUNBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBO29CQUN0QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUdERCxpQ0FBTUEsR0FBTkE7b0JBQ0VFLGtFQUFrRUE7b0JBQ2xFQSx1QkFBdUJBO29CQUN2QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0Esa0JBQWtCQSxDQUFDQTtvQkFDL0JBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUN4QkEsQ0FBQ0E7Z0JBM0RIRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTt3QkFDdkJBLFFBQVFBLEVBQUVBLDZnRkFtQ1RBO3dCQUVEQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLHVDQUFrQkEsQ0FBQ0E7cUJBQ3REQSxDQUFDQTs7cUNBb0JEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBNURBLEFBNERDQSxJQUFBO1lBNURELCtDQTREQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9TaWRlYmFyQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBDYW5BY3RpdmF0ZX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi9ob21lL0hvbWVDb21wb25lbnQnXHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL0Rhc2hib2FyZENvbXBvbmVudCdcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2UnXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJkZW1vLWRyYXdlci1oZWFkZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXBwL2Fzc2V0cy9pbWFnZXMvdXNlci5qcGdcIiBjbGFzcz1cImRlbW8tYXZhdGFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1hdmF0YXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPHNwYW4+e3t1c2VyLmVtYWlsfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjYnRuXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgbWRsLWJ1dHRvbi0taWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+YXJyb3dfZHJvcF9kb3duPC9pPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHloaWRkZW5cIj5BY2NvdW50czwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZW51IG1kbC1tZW51LS1ib3R0b20tcmlnaHQgbWRsLWpzLW1lbnUgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIiBmb3I9XCJhY2NidG5cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiIFtyb3V0ZXJMaW5rXT1cIlsnLi9Qcm9maWxlJ11cIj5NeSBQcm9maWxlPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiIChjbGljayk9XCJsb2dvdXQoKVwiPkxvZ291dDwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwiZGVtby1uYXZpZ2F0aW9uIG1kbC1uYXZpZ2F0aW9uIG1kbC1jb2xvci0tYmx1ZS1ncmV5LTgwMFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL0Rhc2hib2FyZCddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5kYXNoYm9hcmQ8L2k+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9UYXNrcyddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5hc3NpZ25tZW50PC9pPlRhc2tzPC9hPlxyXG5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vUmVxdWVzdHMnXVwiID48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmRlbGV0ZTwvaT5TZXJ2aWNlIFJlcXVlc3RzPC9hPlxyXG5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vUGF5bWVudHMnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+cmVwb3J0PC9pPlBheW1lbnRzPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9BcGFydG1lbnQnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+Zm9ydW08L2k+QXBhcnRtZW50czwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vUmVzaWRlbnRzJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmZsYWc8L2k+UmVzaWRlbnRzPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9Db21tdW5pdHknXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+bG9jYWxfb2ZmZXI8L2k+TXkgQ29tbXVuaXR5PC9hPlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgaHJlZj1cIlwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+aGVscF9vdXRsaW5lPC9pPjxzcGFuIGNsYXNzPVwidmlzdWFsbHloaWRkZW5cIj5IZWxwPC9zcGFuPjwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBEYXNoYm9hcmRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XHJcblxyXG4gIHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgdGhpcy51c2VyID0gdGhpcy5zZXJ2aWNlLnByb2ZpbGVVcGRhdGVkJC5zdWJzY3JpYmUocHJvZmlsZSA9PiB7XHJcbiAgICAgIHRoaXMudXNlciA9IHByb2ZpbGU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICAvL3RoaXMudXNlciA9IHRoaXMuc2VydmljZS5wcm9maWxlVXBkYXRlZCQuc3Vic2NyaWJlKHByb2ZpbGUgPT4geyBcclxuICAgIC8vdGhpcy51c2VyID0gcHJvZmlsZX0pXHJcbiAgICB0aGlzLnVzZXIgPSAndXNlckBleGFtcGxlLmNvbSc7XHJcbiAgICB0aGlzLnNlcnZpY2UubG9nb3V0KCk7XHJcbiAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
