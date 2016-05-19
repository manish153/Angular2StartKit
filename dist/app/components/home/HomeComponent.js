System.register(['angular2/core', "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.sidebartemp1 = JSON.parse(localStorage.getItem('profile'));
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
                        templateUrl: '../app/templates/home.html',
                        /*styleUrls: ['../app/assets/light-bootstrap-dashboard.css','../app/assets/demo.css','../app/assets/pe-icon-7-stroke.css','../app/assets/bootstrap.min.css'],*/
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lQ29tcG9uZW50IiwiSG9tZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkhvbWVDb21wb25lbnQubmdPbkluaXQiLCJIb21lQ29tcG9uZW50Lm9uR2V0QWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkF3QklBO29CQUZBQyxpQkFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRzNEQSxDQUFDQTtnQkFFREQsZ0NBQVFBLEdBQVJBLGNBQVlFLENBQUNBO2dCQUViRixnQ0FBUUEsR0FBUkEsVUFBU0EsSUFBWUE7b0JBQ2xCRyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx1Q0FBdUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBO2dCQUMvREEsQ0FBQ0E7Z0JBL0JMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDcEJBOzs7Ozs7Ozs7OztnQ0FXUUE7d0JBQ0pBLFdBQVdBLEVBQUVBLDRCQUE0QkE7d0JBRXpDQSwrSkFBK0pBO3dCQUMvSkEsVUFBVUEsRUFBR0EsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtxQkFDbkNBLENBQUNBOztrQ0FpQkRBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FuQ0EsQUFtQ0NBLElBQUE7WUFuQ0QseUNBbUNDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9Ib21lQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gXCIuLi9hYm91dC9BYm91dENvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLENhbkFjdGl2YXRlfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi9Mb2dpbkNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdob21lJyxcclxuLyogICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiTmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiICNuYW1lPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldEFsbChuYW1lLnZhbHVlKVwiPkdFVCBSZXF1ZXN0XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxwPlJlc3BvbnNlOiB7e3Jlc3BvbnNlfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vQWJvdXQnXVwiPmxpbmsgdG8gQWJvdXQgY29tcG9uZW50PC9hPlxyXG4gICAgYCwqL1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9hcHAvdGVtcGxhdGVzL2hvbWUuaHRtbCcsXHJcbiAgICBcclxuICAgIC8qc3R5bGVVcmxzOiBbJy4uL2FwcC9hc3NldHMvbGlnaHQtYm9vdHN0cmFwLWRhc2hib2FyZC5jc3MnLCcuLi9hcHAvYXNzZXRzL2RlbW8uY3NzJywnLi4vYXBwL2Fzc2V0cy9wZS1pY29uLTctc3Ryb2tlLmNzcycsJy4uL2FwcC9hc3NldHMvYm9vdHN0cmFwLm1pbi5jc3MnXSwqL1xyXG4gICAgZGlyZWN0aXZlcyA6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHJlc3BvbnNlOiBzdHJpbmc7XHJcbiAgICBzaWRlYmFydGVtcDEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgb25HZXRBbGwobmFtZTogc3RyaW5nKXtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIGNsaWNrZWQuLiBtb3JlIGNvZGUgZ29lcyBoZXJlIFwiICsgbmFtZSk7ICBcclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
