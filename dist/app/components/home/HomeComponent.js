System.register(['angular2/core', "angular2/router", '../login/LoginComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, LoginComponent_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (LoginComponent_1_1) {
                LoginComponent_1 = LoginComponent_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () { };
                HomeComponent.prototype.onGetAll = function (name) {
                    console.log("Button clicked.. more code goes here " + name);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        /*    template: `
                            <div>
                            <div class="input">
                                <label for="Name">Name</label>
                                <input type="text" id="name" #name>
                            </div>
                            <button (click)="onGetAll(name.value)">GET Request
                            </button>
                            <p>Response: {{response}}</p>
                            </div>
                            <a [routerLink]="['../About']">link to About component</a>
                            `,*/
                        templateUrl: '../app/templates/dashboard.html',
                        styleUrls: ['../app/assets/light-bootstrap-dashboard.css', '../app/assets/demo.css', '../app/assets/pe-icon-7-stroke.css', '../app/assets/bootstrap.min.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.CanActivate(function () { return LoginComponent_1.LoginComponent.loggedIn(); }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lQ29tcG9uZW50IiwiSG9tZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkhvbWVDb21wb25lbnQubmdPbkluaXQiLCJIb21lQ29tcG9uZW50Lm9uR2V0QWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkF1QklBO2dCQUFlQyxDQUFDQTtnQkFFaEJELGdDQUFRQSxHQUFSQSxjQUFZRSxDQUFDQTtnQkFFYkYsZ0NBQVFBLEdBQVJBLFVBQVNBLElBQVlBO29CQUNsQkcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsdUNBQXVDQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDL0RBLENBQUNBO2dCQTdCTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsTUFBTUE7d0JBQ3BCQTs7Ozs7Ozs7Ozs7Z0NBV1FBO3dCQUNKQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO3dCQUM5Q0EsU0FBU0EsRUFBRUEsQ0FBQ0EsNkNBQTZDQSxFQUFDQSx3QkFBd0JBLEVBQUNBLG9DQUFvQ0EsRUFBQ0EsaUNBQWlDQSxDQUFDQTt3QkFDMUpBLFVBQVVBLEVBQUdBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7cUJBQ25DQSxDQUFDQTtvQkFFREEsb0JBQVdBLENBQUNBLGNBQU1BLE9BQUFBLCtCQUFjQSxDQUFDQSxRQUFRQSxFQUFFQSxFQUF6QkEsQ0FBeUJBLENBQUNBOztrQ0FXNUNBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0E5QkEsQUE4QkNBLElBQUE7WUE5QkQseUNBOEJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9Ib21lQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gXCIuLi9hYm91dC9BYm91dENvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLENhbkFjdGl2YXRlfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi9Mb2dpbkNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdob21lJyxcclxuLyogICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiTmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiICNuYW1lPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldEFsbChuYW1lLnZhbHVlKVwiPkdFVCBSZXF1ZXN0XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxwPlJlc3BvbnNlOiB7e3Jlc3BvbnNlfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vQWJvdXQnXVwiPmxpbmsgdG8gQWJvdXQgY29tcG9uZW50PC9hPlxyXG4gICAgYCwqL1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9hcHAvdGVtcGxhdGVzL2Rhc2hib2FyZC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuLi9hcHAvYXNzZXRzL2xpZ2h0LWJvb3RzdHJhcC1kYXNoYm9hcmQuY3NzJywnLi4vYXBwL2Fzc2V0cy9kZW1vLmNzcycsJy4uL2FwcC9hc3NldHMvcGUtaWNvbi03LXN0cm9rZS5jc3MnLCcuLi9hcHAvYXNzZXRzL2Jvb3RzdHJhcC5taW4uY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzIDogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuQENhbkFjdGl2YXRlKCgpID0+IExvZ2luQ29tcG9uZW50LmxvZ2dlZEluKCkpXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHJlc3BvbnNlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge31cclxuXHJcbiAgICBvbkdldEFsbChuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gY2xpY2tlZC4uIG1vcmUgY29kZSBnb2VzIGhlcmUgXCIgKyBuYW1lKTsgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
