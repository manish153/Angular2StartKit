System.register(['angular2/core', 'angular2/router', '../home/HomeComponent', '../about/AboutComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, HomeComponent_1, AboutComponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (AboutComponent_1_1) {
                AboutComponent_1 = AboutComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    console.log("We are up and running!");
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: HomeComponent_1.HomeComponent, as: 'Home' },
                        { path: '/about', component: AboutComponent_1.AboutComponent, as: 'About' },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFXSUE7b0JBQ0lDLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsQ0FBQ0E7Z0JBQzFDQSxDQUFDQTtnQkFiTEQ7b0JBQUNBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEsNkJBQWFBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUNBO3dCQUNqREEsRUFBQ0EsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsK0JBQWNBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUNBO3FCQUMzREEsQ0FBQ0E7b0JBQ0RBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxRQUFRQSxFQUFFQSxpQ0FBaUNBO3dCQUMzQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtxQkFDbENBLENBQUNBOztpQ0FPREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCx1Q0FlQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuXHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vaG9tZS9Ib21lQ29tcG9uZW50J1xyXG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tICcuLi9hYm91dC9BYm91dENvbXBvbmVudCdcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIGFzOiAnSG9tZSd9LFxyXG4gICAge3BhdGg6ICcvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50LCBhczogJ0Fib3V0J30sXHJcbl0pXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6ICc8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+JyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2UgYXJlIHVwIGFuZCBydW5uaW5nIVwiKTtcclxuICAgIH1cclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
