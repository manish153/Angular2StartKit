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
                        template: "\n      <header class=\"demo-drawer-header\">\n          <img src=\"../app/assets/images/user.jpg\" class=\"demo-avatar\">\n          <div class=\"demo-avatar-dropdown\">\n            <span>{{user.email}}</span>\n            <div class=\"mdl-layout-spacer\"></div>\n            <button id=\"accbtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n              <i class=\"material-icons\" role=\"presentation\">arrow_drop_down</i>\n              <span class=\"visuallyhidden\">Accounts</span>\n            </button>\n            <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"accbtn\">\n              <li class=\"mdl-menu__item\" [routerLink]=\"['./Profile']\">My Profile</li>\n              <li class=\"mdl-menu__item\" (click)=\"logout()\">Logout</li>\n              \n            </ul>\n          </div>\n        </header>\n        <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n          \n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Dashboard']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">dashboard</i>Dashboard</a>\n          \n\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Tasks']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">assignment</i>Tasks</a>\n\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Requests']\" ><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">delete</i>Service Requests</a>\n\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Payments']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">report</i>Payments</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./BusinessRoots']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">forum</i>Apartments</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Residents']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">flag</i>Residents</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['./Community']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">local_offer</i>My Community</a>\n          \n\n          <div class=\"mdl-layout-spacer\"></div>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">help_outline</i><span class=\"visuallyhidden\">Help</span></a>\n        </nav>\n    ",
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
//# sourceMappingURL=SidebarComponent.js.map