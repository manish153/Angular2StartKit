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
                    /*this.profileUpdated$.next(null);*/
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6WyJBdXRoU2VydmljZSIsIkF1dGhTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXV0aFNlcnZpY2UubG9naW4iLCJBdXRoU2VydmljZS5sb2dvdXQiLCJBdXRoU2VydmljZS5sb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBTUFBLHFCQUFvQkEsTUFBY0EsRUFBQ0EsSUFBWUE7b0JBQTNCQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFRQTtvQkFNaENBLG9CQUFlQSxHQUFnQkEsSUFBSUEsaUJBQU9BLEVBQUVBLENBQUNBO29CQUM5Q0EsU0FBSUEsR0FBR0EsSUFBSUEsU0FBU0EsQ0FBQ0Esa0NBQWtDQSxFQUFDQSx5QkFBeUJBLENBQUNBLENBQUNBO29CQU5qRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3JCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQU1BRCwyQkFBS0EsR0FBTEE7b0JBQUFFLGlCQVlDQTtvQkFYQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsS0FBYUEsRUFBRUEsT0FBZUEsRUFBRUEsUUFBZ0JBO3dCQUM5REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBOzRCQUNuQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQ2ZBLENBQUNBO3dCQUNEQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDekRBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO3dCQUMzQ0EsS0FBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7d0JBQ25DQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFNQSxPQUFBQSxLQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxPQUFPQSxFQUFuQkEsQ0FBbUJBLENBQUNBLENBQUNBO3dCQUM3Q0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JBRURGLDRCQUFNQSxHQUFOQTtvQkFBQUcsaUJBTUNBO29CQUxDQSxZQUFZQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDbkNBLFlBQVlBLENBQUNBLFVBQVVBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO29CQUNwQ0Esb0NBQW9DQTtvQkFDcENBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLGNBQU1BLE9BQUFBLEtBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLEVBQWhCQSxDQUFnQkEsQ0FBQ0EsQ0FBQ0E7b0JBQzFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbENBLENBQUNBO2dCQUVESCw4QkFBUUEsR0FBUkE7b0JBQ0dJLE1BQU1BLENBQUNBLDhCQUFlQSxFQUFFQSxDQUFDQTtnQkFDM0JBLENBQUNBO2dCQXZDSEo7b0JBQUNBLGlCQUFVQSxFQUFFQTs7Z0NBd0NaQTtnQkFBREEsa0JBQUNBO1lBQURBLENBeENBLEFBd0NDQSxJQUFBO1lBeENELHFDQXdDQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSxOZ1pvbmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHt0b2tlbk5vdEV4cGlyZWR9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcy9TdWJqZWN0J1xyXG5cclxuZGVjbGFyZSB2YXIgQXV0aDBMb2NrOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcblxyXG56b25lSW1wbDogTmdab25lO1xyXG51c2VyOiBPYmplY3Q7XHJcblxyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLHpvbmU6IE5nWm9uZSkgeyAgXHJcbiAgIHRoaXMuem9uZUltcGwgPSB6b25lO1xyXG4gICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG59XHJcbiAgXHJcbiAgcHJpdmF0ZSB1c2VyZW1haWw7XHJcbiAgcHJvZmlsZVVwZGF0ZWQkOlN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblx0bG9jayA9IG5ldyBBdXRoMExvY2soJzFtdkhHeWtWSHZ4enB3c3RwMndUbXJ6THJwem91VlRtJywnYW5ndWxhcjItYXV0aC5hdXRoMC5jb20nKTtcclxuXHJcblx0bG9naW4oKSB7XHJcbiAgIHRoaXMubG9jay5zaG93KChlcnJvcjogc3RyaW5nLCBwcm9maWxlOiBPYmplY3QsIGlkX3Rva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICB9XHJcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2ZpbGUnLCBKU09OLnN0cmluZ2lmeShwcm9maWxlKSk7XHJcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgaWRfdG9rZW4pO1xyXG4gICAgIHRoaXMucHJvZmlsZVVwZGF0ZWQkLm5leHQocHJvZmlsZSk7XHJcbiAgICAgdGhpcy56b25lSW1wbC5ydW4oKCkgPT4gdGhpcy51c2VyID0gcHJvZmlsZSk7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydEYXNoYm9hcmQnXSk7ICAgICBcclxuICAgIH0pO1xyXG4gfVxyXG5cclxuIGxvZ291dCgpIHtcclxuICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGUnKTtcclxuICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XHJcbiAgIC8qdGhpcy5wcm9maWxlVXBkYXRlZCQubmV4dChudWxsKTsqL1xyXG4gICB0aGlzLnpvbmVJbXBsLnJ1bigoKSA9PiB0aGlzLnVzZXIgPSBudWxsKTtcclxuICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydBYm91dCddKTtcclxuIH1cclxuXHJcbiBsb2dnZWRJbigpIHtcclxuICAgIHJldHVybiB0b2tlbk5vdEV4cGlyZWQoKTtcclxuICB9IFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
