System.register(['angular2/core', "angular2/router", 'angular2-jwt', 'rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUtHLHFCQUFvQixNQUFjLEVBQUUsSUFBWTtvQkFBNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFNbEMsb0JBQWUsR0FBaUIsSUFBSSxpQkFBTyxFQUFFLENBQUM7b0JBQzlDLFNBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO29CQU5qRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsQ0FBQztnQkFNRCwyQkFBSyxHQUFMO29CQUFBLGlCQVlDO29CQVhFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxRQUFnQjt3QkFDN0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNoQixDQUFDO3dCQUNELFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDekQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQW5CLENBQW1CLENBQUMsQ0FBQzt3QkFDN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELDRCQUFNLEdBQU47b0JBQUEsaUJBS0M7b0JBSkUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDbkMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCw4QkFBUSxHQUFSO29CQUNHLE1BQU0sQ0FBQyw4QkFBZSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBdENKO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQXVDYixrQkFBQztZQUFELENBdENBLEFBc0NDLElBQUE7WUF0Q0QscUNBc0NDLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL0F1dGhTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHt0b2tlbk5vdEV4cGlyZWR9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcy9TdWJqZWN0J1xyXG5cclxuZGVjbGFyZSB2YXIgQXV0aDBMb2NrOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcblxyXG4gICB6b25lSW1wbDogTmdab25lO1xyXG4gICB1c2VyOiBPYmplY3Q7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCB6b25lOiBOZ1pvbmUpIHtcclxuICAgICAgdGhpcy56b25lSW1wbCA9IHpvbmU7XHJcbiAgICAgIHRoaXMudXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXNlcmVtYWlsO1xyXG4gICBwcm9maWxlVXBkYXRlZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgIGxvY2sgPSBuZXcgQXV0aDBMb2NrKCcxbXZIR3lrVkh2eHpwd3N0cDJ3VG1yekxycHpvdVZUbScsICdhbmd1bGFyMi1hdXRoLmF1dGgwLmNvbScpO1xyXG5cclxuICAgbG9naW4oKSB7XHJcbiAgICAgIHRoaXMubG9jay5zaG93KChlcnJvcjogc3RyaW5nLCBwcm9maWxlOiBPYmplY3QsIGlkX3Rva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBpZF90b2tlbik7XHJcbiAgICAgICAgIHRoaXMucHJvZmlsZVVwZGF0ZWQkLm5leHQocHJvZmlsZSk7XHJcbiAgICAgICAgIHRoaXMuem9uZUltcGwucnVuKCgpID0+IHRoaXMudXNlciA9IHByb2ZpbGUpO1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0Rhc2hib2FyZCddKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGxvZ291dCgpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGUnKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XHJcbiAgICAgIHRoaXMuem9uZUltcGwucnVuKCgpID0+IHRoaXMudXNlciA9IG51bGwpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0Fib3V0J10pO1xyXG4gICB9XHJcblxyXG4gICBsb2dnZWRJbigpIHtcclxuICAgICAgcmV0dXJuIHRva2VuTm90RXhwaXJlZCgpO1xyXG4gICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
