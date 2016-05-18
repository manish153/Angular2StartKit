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
                        'app/*': true,
                        'app/home': true,
                        'app/dashboard': true,
                        'app/about': true
                    };
                }
                AuthRouterOutlet.prototype.activate = function (nextInstruction) {
                    console.log(nextInstruction);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BdXRoUm91dGVyT3V0bGV0LnRzIl0sIm5hbWVzIjpbIkF1dGhSb3V0ZXJPdXRsZXQiLCJBdXRoUm91dGVyT3V0bGV0LmNvbnN0cnVjdG9yIiwiQXV0aFJvdXRlck91dGxldC5hY3RpdmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFHc0NBLG9DQUFZQTtnQkFROUNBLDBCQUFZQSxXQUF1QkEsRUFBRUEsT0FBK0JBLEVBQVVBLE9BQWVBLEVBQUVBLFFBQWdCQSxFQUFVQSxZQUF5QkE7b0JBQzlJQyxrQkFBTUEsV0FBV0EsRUFBRUEsT0FBT0EsRUFBRUEsT0FBT0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBRDJCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFBNEJBLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFhQTtvQkFQMUlBLHFCQUFnQkEsR0FBR0E7d0JBQ3ZCQSxPQUFPQSxFQUFFQSxJQUFJQTt3QkFDYkEsVUFBVUEsRUFBRUEsSUFBSUE7d0JBQ2hCQSxlQUFlQSxFQUFFQSxJQUFJQTt3QkFDckJBLFdBQVdBLEVBQUVBLElBQUlBO3FCQUNwQkEsQ0FBQ0E7Z0JBSUZBLENBQUNBO2dCQUVERCxtQ0FBUUEsR0FBUkEsVUFBU0EsZUFBcUNBO29CQUU5Q0UsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3pCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLGVBQWVBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2hDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDckNBLENBQUNBO29CQUNMQSxDQUFDQTtvQkFFREEsTUFBTUEsQ0FBQ0EsZ0JBQUtBLENBQUNBLFFBQVFBLFlBQUNBLGVBQWVBLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0E7Z0JBekJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxvQkFBb0JBO3FCQUNqQ0EsQ0FBQ0E7O3FDQXdCREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQTFCQSxBQTBCQ0EsRUF2QnFDLHFCQUFZLEVBdUJqRDtZQTFCRCwrQ0EwQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAvQXV0aFJvdXRlck91dGxldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSdcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlck91dGxldCwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdhdXRoLXJvdXRlci1vdXRsZXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoUm91dGVyT3V0bGV0IGV4dGVuZHMgUm91dGVyT3V0bGV0IHtcclxuICAgIHByaXZhdGUgX3Byb3RlY3RlZFJvdXRlcyA9IHtcclxuICAgICAgICAnYXBwLyonOiB0cnVlLFxyXG4gICAgICAgICdhcHAvaG9tZSc6IHRydWUsXHJcbiAgICAgICAgJ2FwcC9kYXNoYm9hcmQnOiB0cnVlLFxyXG4gICAgICAgICdhcHAvYWJvdXQnOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBfbG9hZGVyOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgbmFtZUF0dHI6IHN0cmluZywgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoX2VsZW1lbnRSZWYsIF9sb2FkZXIsIF9yb3V0ZXIsIG5hbWVBdHRyKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhuZXh0SW5zdHJ1Y3Rpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLl9wcm90ZWN0ZWRSb3V0ZXNbbmV4dEluc3RydWN0aW9uLnVybFBhdGhdKSB7ICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9hdXRoU2VydmljZS5sb2dnZWRJbigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydMb2dpbiddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
