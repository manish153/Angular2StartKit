System.register(['angular2/core', 'angular2/router', 'angular2-jwt', '../../services/AuthService'], function(exports_1) {
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
                        providers: [angular2_jwt_1.AUTH_PROVIDERS, AuthService_1.AuthService]
                    }), 
                    __metadata('design:paramtypes', [AuthService_1.AuthService])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL0xvZ2luQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50IiwiTG9naW5Db21wb25lbnQuY29uc3RydWN0b3IiLCJMb2dpbkNvbXBvbmVudC5sb2dpbiIsIkxvZ2luQ29tcG9uZW50LmxvZ291dCIsIkxvZ2luQ29tcG9uZW50LmxvZ2dlZEluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFTRUEsd0JBQW9CQSxJQUFpQkE7b0JBQWpCQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFhQTtvQkFDakNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBQ0RELDhCQUFLQSxHQUFMQTtvQkFDR0UsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtnQkFFREYsK0JBQU1BLEdBQU5BO29CQUNFRyxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDckJBLENBQUNBO2dCQUVNSCx1QkFBUUEsR0FBZkE7b0JBQ0VJLE1BQU1BLENBQUNBLDhCQUFlQSxFQUFFQSxDQUFDQTtnQkFDM0JBLENBQUNBO2dCQXRCSEo7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3JCQSxRQUFRQSxFQUFFQSxFQUFFQTt3QkFDWkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTt3QkFDL0JBLFNBQVNBLEVBQUVBLENBQUNBLDZCQUFjQSxFQUFDQSx5QkFBV0EsQ0FBQ0E7cUJBQzFDQSxDQUFDQTs7bUNBbUJEQTtnQkFBREEscUJBQUNBO1lBQURBLENBeEJBLEFBd0JDQSxJQUFBO1lBeEJELDJDQXdCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2xvZ2luL0xvZ2luQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0F1dGhIdHRwLEF1dGhDb25maWcsIHRva2VuTm90RXhwaXJlZCwgQVVUSF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XHJcblxyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSdcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Byb3RlY3RlZCcsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbQVVUSF9QUk9WSURFUlMsQXV0aFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgeyBcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSkge1xyXG4gICAgICB0aGlzLmF1dGgubG9naW4oKTtcclxuICB9XHJcbiAgbG9naW4oKSB7XHJcbiAgICAgdGhpcy5hdXRoLmxvZ2luKCk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9nZ2VkSW4oKSB7XHJcbiAgICByZXR1cm4gdG9rZW5Ob3RFeHBpcmVkKCk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
