System.register(["angular2/core", '../../services/AuthService', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, AuthService_1, router_1;
    var AuthRouterOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AuthRouterOutlet = (function (_super) {
                __extends(AuthRouterOutlet, _super);
                function AuthRouterOutlet(_elementRef, _loader, _router, nameAttr, _authService) {
                    _super.call(this, _elementRef, _loader, _router, nameAttr);
                    this._router = _router;
                    this._authService = _authService;
                    this._protectedRoutes = {
                        'app/**': true,
                        'app/home': true,
                        'app/dashboard': true,
                        'app/profile': true,
                        'app/about': false
                    };
                }
                AuthRouterOutlet.prototype.activate = function (nextInstruction) {
                    if (this._protectedRoutes[nextInstruction.urlPath]) {
                        if (!this._authService.loggedIn()) {
                            this._router.navigate(['Login']);
                        }
                    }
                    return _super.prototype.activate.call(this, nextInstruction);
                };
                AuthRouterOutlet = __decorate([
                    core_1.Directive({
                        selector: 'auth-router-outlet'
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.DynamicComponentLoader, router_1.Router, String, AuthService_1.AuthService])
                ], AuthRouterOutlet);
                return AuthRouterOutlet;
            }(router_1.RouterOutlet));
            exports_1("AuthRouterOutlet", AuthRouterOutlet);
        }
    }
});
//# sourceMappingURL=AuthRouterOutlet.js.map