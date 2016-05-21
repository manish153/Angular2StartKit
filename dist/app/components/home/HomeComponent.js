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
                        template: "\n    <div>\n    <div class=\"input\">\n        <label for=\"Name\">Name</label>\n        <input type=\"text\" id=\"name\" #name>\n    </div>\n    <button (click)=\"onGetAll(name.value)\">GET Request\n    </button>\n    <p>Response: {{response}}</p>\n    </div>\n    <a [routerLink]=\"['../Dashboard']\">link to DASH </a>\n    ",
                        templateUrl: '../app/templates/home.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lQ29tcG9uZW50IiwiSG9tZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkhvbWVDb21wb25lbnQubmdPbkluaXQiLCJIb21lQ29tcG9uZW50Lm9uR2V0QWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFzQklBO29CQUZBQyxpQkFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRzNEQSxDQUFDQTtnQkFFREQsZ0NBQVFBLEdBQVJBLGNBQWFFLENBQUNBO2dCQUVkRixnQ0FBUUEsR0FBUkEsVUFBU0EsSUFBWUE7b0JBQ2pCRyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx1Q0FBdUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBO2dCQUNoRUEsQ0FBQ0E7Z0JBN0JMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDaEJBLFFBQVFBLEVBQUVBLHlVQVdUQTt3QkFDREEsV0FBV0EsRUFBRUEsNEJBQTRCQTt3QkFDekNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7cUJBQ2xDQSxDQUFDQTs7a0NBY0RBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0E5QkEsQUE4QkNBLElBQUE7WUE5QkQseUNBOEJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9Ib21lQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBDYW5BY3RpdmF0ZX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9EYXNoYm9hcmRDb21wb25lbnRcIjtcclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi4vbG9naW4vTG9naW5Db21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJOYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgI25hbWU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0QWxsKG5hbWUudmFsdWUpXCI+R0VUIFJlcXVlc3RcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHA+UmVzcG9uc2U6IHt7cmVzcG9uc2V9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9EYXNoYm9hcmQnXVwiPmxpbmsgdG8gREFTSCA8L2E+XHJcbiAgICBgLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9hcHAvdGVtcGxhdGVzL2hvbWUuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICByZXNwb25zZTogc3RyaW5nO1xyXG4gICAgc2lkZWJhcnRlbXAxID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIG9uR2V0QWxsKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIGNsaWNrZWQuLiBtb3JlIGNvZGUgZ29lcyBoZXJlIFwiICsgbmFtZSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
