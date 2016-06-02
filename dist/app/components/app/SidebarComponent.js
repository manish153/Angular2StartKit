System.register(['angular2/core', 'angular2/router', './DashboardComponent', '../../services/AuthService'], function(exports_1, context_1) {
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
                        template: "\n      <header class=\"demo-drawer-header\">\n          <img src=\"../app/assets/images/user.jpg\" class=\"demo-avatar\">\n          <div class=\"demo-avatar-dropdown\">\n            <span>{{user.email}}</span>\n            <div class=\"mdl-layout-spacer\"></div>\n            <button id=\"accbtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n              <i class=\"material-icons\" role=\"presentation\">arrow_drop_down</i>\n              <span class=\"visuallyhidden\">Accounts</span>\n            </button>\n            <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"accbtn\">\n              <li class=\"mdl-menu__item\" [routerLink]=\"['./Profile']\">My Profile</li>\n              <li class=\"mdl-menu__item\" (click)=\"logout()\">Logout</li>\n              \n            </ul>\n          </div>\n        </header>\n        <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n          \n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Dashboard']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">dashboard</i>Dashboard</a>\n          \n\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Tasks']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">assignment</i>My Tasks</a>\n\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Requests']\" ><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">delete</i>Service Requests</a>\n\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Payments']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">report</i>Payments</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./BusinessRoots']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">forum</i>Apartments</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Residents']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">flag</i>Residents</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Community']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">local_offer</i>My Community</a>\n          \n\n          <div class=\"mdl-layout-spacer\"></div>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">help_outline</i><span class=\"visuallyhidden\">Help</span></a>\n        </nav>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, DashboardComponent_1.DashboardComponent],
                    }), 
                    __metadata('design:paramtypes', [AuthService_1.AuthService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9TaWRlYmFyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0RBO2dCQUlFLDBCQUFvQixPQUFvQjtvQkFKMUMsaUJBbUJDO29CQWZxQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQUZ4QyxTQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBR2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTzt3QkFDeEQsS0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7b0JBQ3RCLENBQUMsQ0FBQyxDQUFDO2dCQUdMLENBQUM7Z0JBR0QsaUNBQU0sR0FBTjtvQkFDRSxrRUFBa0U7b0JBQ2xFLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkE1REg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLG9oRkFtQ1Q7d0JBRUQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUNBQWtCLENBQUM7cUJBQ3RELENBQUM7O29DQUFBO2dCQXFCRix1QkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsK0NBbUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL1NpZGViYXJDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgQ2FuQWN0aXZhdGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vaG9tZS9Ib21lQ29tcG9uZW50J1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9EYXNoYm9hcmRDb21wb25lbnQnXHJcbmltcG9ydCB7QXBhcnRtZW50Q29tcG9uZW50fSBmcm9tICcuLi9hcGFydG1lbnQvQXBhcnRtZW50Q29tcG9uZW50J1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSdcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXNpZGViYXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGhlYWRlciBjbGFzcz1cImRlbW8tZHJhd2VyLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9hcHAvYXNzZXRzL2ltYWdlcy91c2VyLmpwZ1wiIGNsYXNzPVwiZGVtby1hdmF0YXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWF2YXRhci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e3VzZXIuZW1haWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NidG5cIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCBtZGwtYnV0dG9uLS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5hcnJvd19kcm9wX2Rvd248L2k+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPkFjY291bnRzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1yaWdodCBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIGZvcj1cImFjY2J0blwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCIgW3JvdXRlckxpbmtdPVwiWycuL1Byb2ZpbGUnXVwiPk15IFByb2ZpbGU8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCIgKGNsaWNrKT1cImxvZ291dCgpXCI+TG9nb3V0PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJkZW1vLW5hdmlnYXRpb24gbWRsLW5hdmlnYXRpb24gbWRsLWNvbG9yLS1ibHVlLWdyZXktODAwXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxhIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vRGFzaGJvYXJkJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmRhc2hib2FyZDwvaT5EYXNoYm9hcmQ8L2E+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL1Rhc2tzJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmFzc2lnbm1lbnQ8L2k+TXkgVGFza3M8L2E+XHJcblxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9SZXF1ZXN0cyddXCIgPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+ZGVsZXRlPC9pPlNlcnZpY2UgUmVxdWVzdHM8L2E+XHJcblxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9QYXltZW50cyddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5yZXBvcnQ8L2k+UGF5bWVudHM8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL0J1c2luZXNzUm9vdHMnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+Zm9ydW08L2k+QXBhcnRtZW50czwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vUmVzaWRlbnRzJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmZsYWc8L2k+UmVzaWRlbnRzPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9Db21tdW5pdHknXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+bG9jYWxfb2ZmZXI8L2k+TXkgQ29tbXVuaXR5PC9hPlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgaHJlZj1cIlwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+aGVscF9vdXRsaW5lPC9pPjxzcGFuIGNsYXNzPVwidmlzdWFsbHloaWRkZW5cIj5IZWxwPC9zcGFuPjwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBEYXNoYm9hcmRDb21wb25lbnRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xyXG5cclxuICB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgdGhpcy51c2VyID0gdGhpcy5zZXJ2aWNlLnByb2ZpbGVVcGRhdGVkJC5zdWJzY3JpYmUocHJvZmlsZSA9PiB7XHJcbiAgICAgIHRoaXMudXNlciA9IHByb2ZpbGU7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIC8vdGhpcy51c2VyID0gdGhpcy5zZXJ2aWNlLnByb2ZpbGVVcGRhdGVkJC5zdWJzY3JpYmUocHJvZmlsZSA9PiB7IFxyXG4gICAgLy90aGlzLnVzZXIgPSBwcm9maWxlfSlcclxuICAgIHRoaXMudXNlciA9ICd1c2VyQGV4YW1wbGUuY29tJztcclxuICAgIHRoaXMuc2VydmljZS5sb2dvdXQoKTtcclxuICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
