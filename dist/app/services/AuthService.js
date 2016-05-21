System.register(['angular2/core', "angular2/router", 'angular2-jwt', 'rxjs/Subject'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, angular2_jwt_1, Subject_1;
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
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(router, zone) {
                    this.router = router;
                    this.profileUpdated$ = new Subject_1.Subject();
                    this.lock = new Auth0Lock('1mvHGykVHvxzpwstp2wTmrzLrpzouVTm', 'angular2-auth.auth0.com');
                    this.zoneImpl = zone;
                    this.user = JSON.parse(localStorage.getItem('profile'));
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
                        _this.profileUpdated$.next(profile);
                        _this.zoneImpl.run(function () { return _this.user = profile; });
                        _this.router.navigate(['Dashboard']);
                    });
                };
                AuthService.prototype.logout = function () {
                    var _this = this;
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.zoneImpl.run(function () { return _this.user = null; });
                    this.router.navigate(['About']);
                };
                AuthService.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.NgZone])
                ], AuthService);
                return AuthService;
            })();
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6WyJBdXRoU2VydmljZSIsIkF1dGhTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXV0aFNlcnZpY2UubG9naW4iLCJBdXRoU2VydmljZS5sb2dvdXQiLCJBdXRoU2VydmljZS5sb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBTUdBLHFCQUFvQkEsTUFBY0EsRUFBRUEsSUFBWUE7b0JBQTVCQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFRQTtvQkFNbENBLG9CQUFlQSxHQUFpQkEsSUFBSUEsaUJBQU9BLEVBQUVBLENBQUNBO29CQUM5Q0EsU0FBSUEsR0FBR0EsSUFBSUEsU0FBU0EsQ0FBQ0Esa0NBQWtDQSxFQUFFQSx5QkFBeUJBLENBQUNBLENBQUNBO29CQU5qRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3JCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQU1ERCwyQkFBS0EsR0FBTEE7b0JBQUFFLGlCQVlDQTtvQkFYRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsS0FBYUEsRUFBRUEsT0FBZUEsRUFBRUEsUUFBZ0JBO3dCQUM3REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBOzRCQUNuQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQ2hCQSxDQUFDQTt3QkFDREEsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3pEQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTt3QkFDM0NBLEtBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO3dCQUNuQ0EsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsY0FBTUEsT0FBQUEsS0FBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsRUFBbkJBLENBQW1CQSxDQUFDQSxDQUFDQTt3QkFDN0NBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO29CQUN2Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ05BLENBQUNBO2dCQUVERiw0QkFBTUEsR0FBTkE7b0JBQUFHLGlCQUtDQTtvQkFKRUEsWUFBWUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25DQSxZQUFZQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtvQkFDcENBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLGNBQU1BLE9BQUFBLEtBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLEVBQWhCQSxDQUFnQkEsQ0FBQ0EsQ0FBQ0E7b0JBQzFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbkNBLENBQUNBO2dCQUVESCw4QkFBUUEsR0FBUkE7b0JBQ0dJLE1BQU1BLENBQUNBLDhCQUFlQSxFQUFFQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQXRDSko7b0JBQUNBLGlCQUFVQSxFQUFFQTs7Z0NBdUNaQTtnQkFBREEsa0JBQUNBO1lBQURBLENBdkNBLEFBdUNDQSxJQUFBO1lBdkNELHFDQXVDQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7dG9rZW5Ob3RFeHBpcmVkfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCdcclxuXHJcbmRlY2xhcmUgdmFyIEF1dGgwTG9jazogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuICAgem9uZUltcGw6IE5nWm9uZTtcclxuICAgdXNlcjogT2JqZWN0O1xyXG5cclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgem9uZTogTmdab25lKSB7XHJcbiAgICAgIHRoaXMuem9uZUltcGwgPSB6b25lO1xyXG4gICAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVzZXJlbWFpbDtcclxuICAgcHJvZmlsZVVwZGF0ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gICBsb2NrID0gbmV3IEF1dGgwTG9jaygnMW12SEd5a1ZIdnh6cHdzdHAyd1RtcnpMcnB6b3VWVG0nLCAnYW5ndWxhcjItYXV0aC5hdXRoMC5jb20nKTtcclxuXHJcbiAgIGxvZ2luKCkge1xyXG4gICAgICB0aGlzLmxvY2suc2hvdygoZXJyb3I6IHN0cmluZywgcHJvZmlsZTogT2JqZWN0LCBpZF90b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgaWRfdG9rZW4pO1xyXG4gICAgICAgICB0aGlzLnByb2ZpbGVVcGRhdGVkJC5uZXh0KHByb2ZpbGUpO1xyXG4gICAgICAgICB0aGlzLnpvbmVJbXBsLnJ1bigoKSA9PiB0aGlzLnVzZXIgPSBwcm9maWxlKTtcclxuICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydEYXNoYm9hcmQnXSk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBsb2dvdXQoKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xyXG4gICAgICB0aGlzLnpvbmVJbXBsLnJ1bigoKSA9PiB0aGlzLnVzZXIgPSBudWxsKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydBYm91dCddKTtcclxuICAgfVxyXG5cclxuICAgbG9nZ2VkSW4oKSB7XHJcbiAgICAgIHJldHVybiB0b2tlbk5vdEV4cGlyZWQoKTtcclxuICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
