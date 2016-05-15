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
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(router) {
                    this.router = router;
                    this.lock = new Auth0Lock('1mvHGykVHvxzpwstp2wTmrzLrpzouVTm', 'angular2-auth.auth0.com');
                }
                AuthService.prototype.login = function () {
                    var _this = this;
                    this.lock.show(function (error, profile, id_token) {
                        if (error) {
                            console.log(error);
                            return false;
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        _this.router.navigate(['Home']);
                    });
                };
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AuthService);
                return AuthService;
            })();
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6WyJBdXRoU2VydmljZSIsIkF1dGhTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXV0aFNlcnZpY2UubG9naW4iLCJBdXRoU2VydmljZS5sb2dvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdBQSxxQkFBb0JBLE1BQWNBO29CQUFkQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFRQTtvQkFHakNBLFNBQUlBLEdBQUdBLElBQUlBLFNBQVNBLENBQUNBLGtDQUFrQ0EsRUFBQ0EseUJBQXlCQSxDQUFDQSxDQUFDQTtnQkFIL0NBLENBQUNBO2dCQUtyQ0QsMkJBQUtBLEdBQUxBO29CQUFBRSxpQkFZQ0E7b0JBWENBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEtBQWFBLEVBQUVBLE9BQWVBLEVBQUVBLFFBQWdCQTt3QkFDOURBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBOzRCQUNWQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTs0QkFDbkJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO3dCQUNmQSxDQUFDQTt3QkFFREEsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3pEQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTt3QkFDM0NBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO29CQUVoQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ05BLENBQUNBO2dCQUVERiw0QkFBTUEsR0FBTkE7b0JBQ0VHLFlBQVlBLENBQUNBLFVBQVVBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQUNuQ0EsWUFBWUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RDQSxDQUFDQTtnQkF6QkZIO29CQUFDQSxpQkFBVUEsRUFBRUE7O2dDQTBCWkE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtZQTFCRCxxQ0EwQkMsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbmRlY2xhcmUgdmFyIEF1dGgwTG9jazogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcblxyXG5cdGxvY2sgPSBuZXcgQXV0aDBMb2NrKCcxbXZIR3lrVkh2eHpwd3N0cDJ3VG1yekxycHpvdVZUbScsJ2FuZ3VsYXIyLWF1dGguYXV0aDAuY29tJyk7XHJcblxyXG5cdGxvZ2luKCkge1xyXG4gICB0aGlzLmxvY2suc2hvdygoZXJyb3I6IHN0cmluZywgcHJvZmlsZTogT2JqZWN0LCBpZF90b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgfVxyXG5cclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBpZF90b2tlbik7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xyXG4gICAgIFxyXG4gICAgfSk7XHJcbiB9XHJcblxyXG4gbG9nb3V0KCkge1xyXG4gICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZScpO1xyXG4gICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcclxuIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
