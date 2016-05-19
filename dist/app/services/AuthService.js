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
                    this.profileUpdated$.next(null);
                    this.zoneImpl.run(function () { return _this.user = null; });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6WyJBdXRoU2VydmljZSIsIkF1dGhTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXV0aFNlcnZpY2UubG9naW4iLCJBdXRoU2VydmljZS5sb2dvdXQiLCJBdXRoU2VydmljZS5sb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBTUFBLHFCQUFvQkEsTUFBY0EsRUFBQ0EsSUFBWUE7b0JBQTNCQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFRQTtvQkFNaENBLG9CQUFlQSxHQUFnQkEsSUFBSUEsaUJBQU9BLEVBQUVBLENBQUNBO29CQUM5Q0EsU0FBSUEsR0FBR0EsSUFBSUEsU0FBU0EsQ0FBQ0Esa0NBQWtDQSxFQUFDQSx5QkFBeUJBLENBQUNBLENBQUNBO29CQU5qRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3JCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQU1BRCwyQkFBS0EsR0FBTEE7b0JBQUFFLGlCQVlDQTtvQkFYQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsS0FBYUEsRUFBRUEsT0FBZUEsRUFBRUEsUUFBZ0JBO3dCQUM5REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBOzRCQUNuQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQ2ZBLENBQUNBO3dCQUNEQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDekRBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO3dCQUMzQ0EsS0FBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7d0JBQ25DQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFNQSxPQUFBQSxLQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxPQUFPQSxFQUFuQkEsQ0FBbUJBLENBQUNBLENBQUNBO3dCQUM3Q0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JBRURGLDRCQUFNQSxHQUFOQTtvQkFBQUcsaUJBS0NBO29CQUpDQSxZQUFZQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDbkNBLFlBQVlBLENBQUNBLFVBQVVBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO29CQUNwQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFNQSxPQUFBQSxLQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxFQUFoQkEsQ0FBZ0JBLENBQUNBLENBQUNBO2dCQUM1Q0EsQ0FBQ0E7Z0JBRURILDhCQUFRQSxHQUFSQTtvQkFDR0ksTUFBTUEsQ0FBQ0EsOEJBQWVBLEVBQUVBLENBQUNBO2dCQUMzQkEsQ0FBQ0E7Z0JBdENISjtvQkFBQ0EsaUJBQVVBLEVBQUVBOztnQ0F1Q1pBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0F2Q0EsQUF1Q0NBLElBQUE7WUF2Q0QscUNBdUNDLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL0F1dGhTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLE5nWm9uZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge3Rva2VuTm90RXhwaXJlZH0gZnJvbSAnYW5ndWxhcjItand0JztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzL1N1YmplY3QnXHJcblxyXG5kZWNsYXJlIHZhciBBdXRoMExvY2s6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbnpvbmVJbXBsOiBOZ1pvbmU7XHJcbnVzZXI6IE9iamVjdDtcclxuXHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsem9uZTogTmdab25lKSB7ICBcclxuICAgdGhpcy56b25lSW1wbCA9IHpvbmU7XHJcbiAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSk7XHJcbn1cclxuICBcclxuICBwcml2YXRlIHVzZXJlbWFpbDtcclxuICBwcm9maWxlVXBkYXRlZCQ6U3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHRsb2NrID0gbmV3IEF1dGgwTG9jaygnMW12SEd5a1ZIdnh6cHdzdHAyd1RtcnpMcnB6b3VWVG0nLCdhbmd1bGFyMi1hdXRoLmF1dGgwLmNvbScpO1xyXG5cclxuXHRsb2dpbigpIHtcclxuICAgdGhpcy5sb2NrLnNob3coKGVycm9yOiBzdHJpbmcsIHByb2ZpbGU6IE9iamVjdCwgaWRfdG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgIH1cclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBpZF90b2tlbik7XHJcbiAgICAgdGhpcy5wcm9maWxlVXBkYXRlZCQubmV4dChwcm9maWxlKTtcclxuICAgICB0aGlzLnpvbmVJbXBsLnJ1bigoKSA9PiB0aGlzLnVzZXIgPSBwcm9maWxlKTtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0Rhc2hib2FyZCddKTsgICAgIFxyXG4gICAgfSk7XHJcbiB9XHJcblxyXG4gbG9nb3V0KCkge1xyXG4gICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZScpO1xyXG4gICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcclxuICAgdGhpcy5wcm9maWxlVXBkYXRlZCQubmV4dChudWxsKTtcclxuICAgdGhpcy56b25lSW1wbC5ydW4oKCkgPT4gdGhpcy51c2VyID0gbnVsbCk7XHJcbiB9XHJcblxyXG4gbG9nZ2VkSW4oKSB7XHJcbiAgICByZXR1cm4gdG9rZW5Ob3RFeHBpcmVkKCk7XHJcbiAgfSBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
