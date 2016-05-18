System.register(['angular2/core', "angular2/router", 'angular2-jwt'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, angular2_jwt_1;
    var AuthService;
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
                        _this.router.navigate(['Dashboard']);
                    });
                };
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                };
                AuthService.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6WyJBdXRoU2VydmljZSIsIkF1dGhTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXV0aFNlcnZpY2UubG9naW4iLCJBdXRoU2VydmljZS5sb2dvdXQiLCJBdXRoU2VydmljZS5sb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBR0FBLHFCQUFvQkEsTUFBY0E7b0JBQWRDLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO29CQUdqQ0EsU0FBSUEsR0FBR0EsSUFBSUEsU0FBU0EsQ0FBQ0Esa0NBQWtDQSxFQUFDQSx5QkFBeUJBLENBQUNBLENBQUNBO2dCQUgvQ0EsQ0FBQ0E7Z0JBS3JDRCwyQkFBS0EsR0FBTEE7b0JBQUFFLGlCQVlDQTtvQkFYQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsS0FBYUEsRUFBRUEsT0FBZUEsRUFBRUEsUUFBZ0JBO3dCQUM5REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBOzRCQUNuQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQ2ZBLENBQUNBO3dCQUVEQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDekRBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO3dCQUMzQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRXJDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JBRURGLDRCQUFNQSxHQUFOQTtvQkFDRUcsWUFBWUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25DQSxZQUFZQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDdENBLENBQUNBO2dCQUVESCw4QkFBUUEsR0FBUkE7b0JBQ0dJLE1BQU1BLENBQUNBLDhCQUFlQSxFQUFFQSxDQUFDQTtnQkFDM0JBLENBQUNBO2dCQTdCSEo7b0JBQUNBLGlCQUFVQSxFQUFFQTs7Z0NBZ0NaQTtnQkFBREEsa0JBQUNBO1lBQURBLENBaENBLEFBZ0NDQSxJQUFBO1lBaENELHFDQWdDQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge3Rva2VuTm90RXhwaXJlZH0gZnJvbSAnYW5ndWxhcjItand0JztcclxuXHJcbmRlY2xhcmUgdmFyIEF1dGgwTG9jazogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcblxyXG5cdGxvY2sgPSBuZXcgQXV0aDBMb2NrKCcxbXZIR3lrVkh2eHpwd3N0cDJ3VG1yekxycHpvdVZUbScsJ2FuZ3VsYXIyLWF1dGguYXV0aDAuY29tJyk7XHJcblxyXG5cdGxvZ2luKCkge1xyXG4gICB0aGlzLmxvY2suc2hvdygoZXJyb3I6IHN0cmluZywgcHJvZmlsZTogT2JqZWN0LCBpZF90b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgfVxyXG5cclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBpZF90b2tlbik7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydEYXNoYm9hcmQnXSk7XHJcbiAgICAgXHJcbiAgICB9KTtcclxuIH1cclxuXHJcbiBsb2dvdXQoKSB7XHJcbiAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XHJcbiAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xyXG4gfVxyXG5cclxuIGxvZ2dlZEluKCkge1xyXG4gICAgcmV0dXJuIHRva2VuTm90RXhwaXJlZCgpO1xyXG4gIH1cclxuXHJcbiBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
