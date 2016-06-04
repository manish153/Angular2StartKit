System.register(["angular2/core", '../../services/AuthService', "angular2/router"], function(exports_1, context_1) {
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
            let AuthRouterOutlet = class AuthRouterOutlet extends router_1.RouterOutlet {
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
                __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.DynamicComponentLoader, router_1.Router, String, AuthService_1.AuthService])
            ], AuthRouterOutlet);
            exports_1("AuthRouterOutlet", AuthRouterOutlet);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BdXRoUm91dGVyT3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0Esc0RBQXNDLHFCQUFZO2dCQVM5QyxZQUFZLFdBQTZCLEVBQUUsT0FBK0IsRUFBVSxPQUFlLEVBQUUsUUFBZ0IsRUFBVSxZQUF5QjtvQkFDcEosTUFBTSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFEaUMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBNEIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBUmhKLHFCQUFnQixHQUFHO3dCQUN2QixRQUFRLEVBQUUsSUFBSTt3QkFDZCxVQUFVLEVBQUUsSUFBSTt3QkFDaEIsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLGFBQWEsRUFBRSxJQUFJO3dCQUNuQixXQUFXLEVBQUUsS0FBSztxQkFDckIsQ0FBQztnQkFJRixDQUFDO2dCQUVELFFBQVEsQ0FBQyxlQUFxQztvQkFDMUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsQ0FBQztvQkFDTCxDQUFDO29CQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQztZQXpCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7aUJBQ2pDLENBQUM7O2dDQUFBO1lBQ0YsK0NBc0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL0F1dGhSb3V0ZXJPdXRsZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRHluYW1pY0NvbXBvbmVudExvYWRlciwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2UnXHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZXJPdXRsZXQsIENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnYXV0aC1yb3V0ZXItb3V0bGV0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFJvdXRlck91dGxldCBleHRlbmRzIFJvdXRlck91dGxldCB7XHJcbiAgICBwcml2YXRlIF9wcm90ZWN0ZWRSb3V0ZXMgPSB7XHJcbiAgICAgICAgJ2FwcC8qKic6IHRydWUsXHJcbiAgICAgICAgJ2FwcC9ob21lJzogdHJ1ZSxcclxuICAgICAgICAnYXBwL2Rhc2hib2FyZCc6IHRydWUsXHJcbiAgICAgICAgJ2FwcC9wcm9maWxlJzogdHJ1ZSxcclxuICAgICAgICAnYXBwL2Fib3V0JzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2VsZW1lbnRSZWY6IFZpZXdDb250YWluZXJSZWYsIF9sb2FkZXI6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBuYW1lQXR0cjogc3RyaW5nLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfZWxlbWVudFJlZiwgX2xvYWRlciwgX3JvdXRlciwgbmFtZUF0dHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9wcm90ZWN0ZWRSb3V0ZXNbbmV4dEluc3RydWN0aW9uLnVybFBhdGhdKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXV0aFNlcnZpY2UubG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTG9naW4nXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBlci5hY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb24pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
