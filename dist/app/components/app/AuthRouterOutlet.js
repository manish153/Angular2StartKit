System.register(["@angular/core", '../../services/AuthService', "@angular/router-deprecated"], function(exports_1, context_1) {
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
    var core_1, AuthService_1, router_deprecated_1;
    var AuthRouterOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            let AuthRouterOutlet = class AuthRouterOutlet extends router_deprecated_1.RouterOutlet {
                constructor(_elementRef, _loader, _router, nameAttr, _authService) {
                    super(_elementRef, _loader, _router, nameAttr);
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
                activate(nextInstruction) {
                    if (this._protectedRoutes[nextInstruction.urlPath]) {
                        if (!this._authService.loggedIn()) {
                            this._router.navigate(['Login']);
                        }
                    }
                    return super.activate(nextInstruction);
                }
            };
            AuthRouterOutlet = __decorate([
                core_1.Directive({
                    selector: 'auth-router-outlet'
                }), 
                __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.DynamicComponentLoader, router_deprecated_1.Router, String, AuthService_1.AuthService])
            ], AuthRouterOutlet);
            exports_1("AuthRouterOutlet", AuthRouterOutlet);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BdXRoUm91dGVyT3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0Esc0RBQXNDLGdDQUFZO2dCQVM5QyxZQUFZLFdBQTZCLEVBQUUsT0FBK0IsRUFBVSxPQUFlLEVBQUUsUUFBZ0IsRUFBVSxZQUF5QjtvQkFDcEosTUFBTSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFEaUMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBNEIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBUmhKLHFCQUFnQixHQUFHO3dCQUN2QixRQUFRLEVBQUUsSUFBSTt3QkFDZCxVQUFVLEVBQUUsSUFBSTt3QkFDaEIsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLGFBQWEsRUFBRSxJQUFJO3dCQUNuQixXQUFXLEVBQUUsS0FBSztxQkFDckIsQ0FBQztnQkFJRixDQUFDO2dCQUVELFFBQVEsQ0FBQyxlQUFxQztvQkFDMUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsQ0FBQztvQkFDTCxDQUFDO29CQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQztZQXpCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7aUJBQ2pDLENBQUM7O2dDQUFBO1lBQ0YsK0NBc0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL0F1dGhSb3V0ZXJPdXRsZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRHluYW1pY0NvbXBvbmVudExvYWRlciwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2UnXHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZXJPdXRsZXQsIENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdhdXRoLXJvdXRlci1vdXRsZXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoUm91dGVyT3V0bGV0IGV4dGVuZHMgUm91dGVyT3V0bGV0IHtcclxuICAgIHByaXZhdGUgX3Byb3RlY3RlZFJvdXRlcyA9IHtcclxuICAgICAgICAnYXBwLyoqJzogdHJ1ZSxcclxuICAgICAgICAnYXBwL2hvbWUnOiB0cnVlLFxyXG4gICAgICAgICdhcHAvZGFzaGJvYXJkJzogdHJ1ZSxcclxuICAgICAgICAnYXBwL3Byb2ZpbGUnOiB0cnVlLFxyXG4gICAgICAgICdhcHAvYWJvdXQnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogVmlld0NvbnRhaW5lclJlZiwgX2xvYWRlcjogRHluYW1pY0NvbXBvbmVudExvYWRlciwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIG5hbWVBdHRyOiBzdHJpbmcsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF9lbGVtZW50UmVmLCBfbG9hZGVyLCBfcm91dGVyLCBuYW1lQXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUobmV4dEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb3RlY3RlZFJvdXRlc1tuZXh0SW5zdHJ1Y3Rpb24udXJsUGF0aF0pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9hdXRoU2VydmljZS5sb2dnZWRJbigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydMb2dpbiddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
