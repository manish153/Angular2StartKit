System.register(["angular2/core", '../../services/AuthService', "angular2/router"], function(exports_1) {
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
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String, AuthService_1.AuthService])
                ], AuthRouterOutlet);
                return AuthRouterOutlet;
            })(router_1.RouterOutlet);
            exports_1("AuthRouterOutlet", AuthRouterOutlet);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BdXRoUm91dGVyT3V0bGV0LnRzIl0sIm5hbWVzIjpbIkF1dGhSb3V0ZXJPdXRsZXQiLCJBdXRoUm91dGVyT3V0bGV0LmNvbnN0cnVjdG9yIiwiQXV0aFJvdXRlck91dGxldC5hY3RpdmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFHc0NBLG9DQUFZQTtnQkFROUNBLDBCQUFZQSxXQUF1QkEsRUFBRUEsT0FBK0JBLEVBQVVBLE9BQWVBLEVBQUVBLFFBQWdCQSxFQUFVQSxZQUF5QkE7b0JBQzlJQyxrQkFBTUEsV0FBV0EsRUFBRUEsT0FBT0EsRUFBRUEsT0FBT0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBRDJCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFBNEJBLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFhQTtvQkFQMUlBLHFCQUFnQkEsR0FBR0E7d0JBQ3ZCQSxRQUFRQSxFQUFFQSxJQUFJQTt3QkFDZEEsVUFBVUEsRUFBRUEsSUFBSUE7d0JBQ2hCQSxlQUFlQSxFQUFFQSxJQUFJQTt3QkFDckJBLFdBQVdBLEVBQUVBLEtBQUtBO3FCQUNyQkEsQ0FBQ0E7Z0JBSUZBLENBQUNBO2dCQUVERCxtQ0FBUUEsR0FBUkEsVUFBU0EsZUFBcUNBO29CQUMxQ0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDakRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBOzRCQUNoQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JDQSxDQUFDQTtvQkFDTEEsQ0FBQ0E7b0JBRURBLE1BQU1BLENBQUNBLGdCQUFLQSxDQUFDQSxRQUFRQSxZQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtnQkFDM0NBLENBQUNBO2dCQXZCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsb0JBQW9CQTtxQkFDakNBLENBQUNBOztxQ0FzQkRBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0F4QkEsQUF3QkNBLEVBckJxQyxxQkFBWSxFQXFCakQ7WUF4QkQsK0NBd0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL0F1dGhSb3V0ZXJPdXRsZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRHluYW1pY0NvbXBvbmVudExvYWRlciwgRWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2UnXHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZXJPdXRsZXQsIENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnYXV0aC1yb3V0ZXItb3V0bGV0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFJvdXRlck91dGxldCBleHRlbmRzIFJvdXRlck91dGxldCB7XHJcbiAgICBwcml2YXRlIF9wcm90ZWN0ZWRSb3V0ZXMgPSB7XHJcbiAgICAgICAgJ2FwcC8qKic6IHRydWUsXHJcbiAgICAgICAgJ2FwcC9ob21lJzogdHJ1ZSxcclxuICAgICAgICAnYXBwL2Rhc2hib2FyZCc6IHRydWUsXHJcbiAgICAgICAgJ2FwcC9hYm91dCc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBfbG9hZGVyOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgbmFtZUF0dHI6IHN0cmluZywgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoX2VsZW1lbnRSZWYsIF9sb2FkZXIsIF9yb3V0ZXIsIG5hbWVBdHRyKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5fcHJvdGVjdGVkUm91dGVzW25leHRJbnN0cnVjdGlvbi51cmxQYXRoXSkgeyAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXV0aFNlcnZpY2UubG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTG9naW4nXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBlci5hY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb24pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
