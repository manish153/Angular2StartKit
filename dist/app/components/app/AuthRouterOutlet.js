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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BdXRoUm91dGVyT3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFBc0Msb0NBQVk7Z0JBUzlDLDBCQUFZLFdBQTZCLEVBQUUsT0FBK0IsRUFBVSxPQUFlLEVBQUUsUUFBZ0IsRUFBVSxZQUF5QjtvQkFDcEosa0JBQU0sV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBRGlDLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQTRCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQVJoSixxQkFBZ0IsR0FBRzt3QkFDdkIsUUFBUSxFQUFFLElBQUk7d0JBQ2QsVUFBVSxFQUFFLElBQUk7d0JBQ2hCLGVBQWUsRUFBRSxJQUFJO3dCQUNyQixhQUFhLEVBQUUsSUFBSTt3QkFDbkIsV0FBVyxFQUFFLEtBQUs7cUJBQ3JCLENBQUM7Z0JBSUYsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSLFVBQVMsZUFBcUM7b0JBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLENBQUM7b0JBQ0wsQ0FBQztvQkFFRCxNQUFNLENBQUMsZ0JBQUssQ0FBQyxRQUFRLFlBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBeEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtxQkFDakMsQ0FBQzs7b0NBQUE7Z0JBdUJGLHVCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsQ0F0QnFDLHFCQUFZLEdBc0JqRDtZQXRCRCwrQ0FzQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAvQXV0aFJvdXRlck91dGxldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSdcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlck91dGxldCwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdhdXRoLXJvdXRlci1vdXRsZXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoUm91dGVyT3V0bGV0IGV4dGVuZHMgUm91dGVyT3V0bGV0IHtcclxuICAgIHByaXZhdGUgX3Byb3RlY3RlZFJvdXRlcyA9IHtcclxuICAgICAgICAnYXBwLyoqJzogdHJ1ZSxcclxuICAgICAgICAnYXBwL2hvbWUnOiB0cnVlLFxyXG4gICAgICAgICdhcHAvZGFzaGJvYXJkJzogdHJ1ZSxcclxuICAgICAgICAnYXBwL3Byb2ZpbGUnOiB0cnVlLFxyXG4gICAgICAgICdhcHAvYWJvdXQnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogVmlld0NvbnRhaW5lclJlZiwgX2xvYWRlcjogRHluYW1pY0NvbXBvbmVudExvYWRlciwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIG5hbWVBdHRyOiBzdHJpbmcsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF9lbGVtZW50UmVmLCBfbG9hZGVyLCBfcm91dGVyLCBuYW1lQXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUobmV4dEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb3RlY3RlZFJvdXRlc1tuZXh0SW5zdHJ1Y3Rpb24udXJsUGF0aF0pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9hdXRoU2VydmljZS5sb2dnZWRJbigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydMb2dpbiddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
