System.register(['angular2/core', 'angular2/router', 'angular2-jwt', '../../services/AuthService'], function(exports_1, context_1) {
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
    var core_1, router_1, angular2_jwt_1, AuthService_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(auth) {
                    this.auth = auth;
                    this.auth.login();
                }
                LoginComponent.prototype.login = function () {
                    this.auth.login();
                };
                LoginComponent.prototype.logout = function () {
                    this.auth.logout();
                };
                LoginComponent.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'protected',
                        template: '',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [angular2_jwt_1.AUTH_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [AuthService_1.AuthService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=LoginComponent.js.map