System.register(['angular2/core', 'angular2/router', 'angular2-jwt', '../home/HomeComponent', '../about/AboutComponent', '../login/LoginComponent', '../../services/AuthService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, angular2_jwt_1, HomeComponent_1, AboutComponent_1, LoginComponent_1, AuthService_1;
    var AppComponent;
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
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (AboutComponent_1_1) {
                AboutComponent_1 = AboutComponent_1_1;
            },
            function (LoginComponent_1_1) {
                LoginComponent_1 = LoginComponent_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: 'app/home', component: HomeComponent_1.HomeComponent, as: 'Home' },
                        { path: 'app/about', component: AboutComponent_1.AboutComponent, as: 'About' },
                        { path: 'app/login', component: LoginComponent_1.LoginComponent, as: 'Login' },
                        { path: 'app/', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [angular2_jwt_1.AUTH_PROVIDERS, AuthService_1.AuthService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFlRUE7Z0JBQWVDLENBQUNBO2dCQWZsQkQ7b0JBQUNBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBQ0EsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsNkJBQWFBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUNBO3dCQUN4REEsRUFBQ0EsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsRUFBRUEsK0JBQWNBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUNBO3dCQUMzREEsRUFBQ0EsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsRUFBRUEsK0JBQWNBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUNBO3dCQUMzREEsRUFBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsVUFBVUEsRUFBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBQ0E7cUJBQ3ZDQSxDQUFDQTtvQkFDREEsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLGlDQUFpQ0E7d0JBQzNDQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO3dCQUMvQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsNkJBQWNBLEVBQUNBLHlCQUFXQSxDQUFDQTtxQkFDMUNBLENBQUNBOztpQ0FNREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtZQWpCRCx1Q0FpQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAvQXBwQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0F1dGhIdHRwLEF1dGhDb25maWcsIHRva2VuTm90RXhwaXJlZCwgQVVUSF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XHJcblxyXG5cclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi9ob21lL0hvbWVDb21wb25lbnQnXHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4uL2Fib3V0L0Fib3V0Q29tcG9uZW50J1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi9Mb2dpbkNvbXBvbmVudCdcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2UnXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge3BhdGg6ICdhcHAvaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgYXM6ICdIb21lJ30sXHJcbiAgICB7cGF0aDogJ2FwcC9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQsIGFzOiAnQWJvdXQnfSwgICAgXHJcbiAgICB7cGF0aDogJ2FwcC9sb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsIGFzOiAnTG9naW4nfSxcclxuICAgIHtwYXRoOiAnYXBwLycsIHJlZGlyZWN0VG86IFsnSG9tZSddfVxyXG5dKVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiAnPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PicsICAgXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbQVVUSF9QUk9WSURFUlMsQXV0aFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
