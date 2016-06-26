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
            let AuthService = class AuthService {
                constructor(router, zone) {
                    this.router = router;
                    this.profileUpdated$ = new Subject_1.Subject();
                    this.lock = new Auth0Lock('1mvHGykVHvxzpwstp2wTmrzLrpzouVTm', 'angular2-auth.auth0.com');
                    this.zoneImpl = zone;
                    this.user = JSON.parse(localStorage.getItem('profile'));
                }
                login() {
                    this.lock.show((error, profile, id_token) => {
                        if (error) {
                            console.log(error);
                            return false;
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        console.log(JSON.stringify(profile));
                        this.profileUpdated$.next(profile);
                        this.zoneImpl.run(() => this.user = profile);
                        this.router.navigate(['Dashboard']);
                    });
                }
                logout() {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.zoneImpl.run(() => this.user = null);
                    this.router.navigate(['About']);
                }
                loggedIn() {
                    return angular2_jwt_1.tokenNotExpired();
                }
            };
            AuthService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [router_1.Router, core_1.NgZone])
            ], AuthService);
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUtHLFlBQW9CLE1BQWMsRUFBRSxJQUFZO29CQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFRO29CQU9sQyxvQkFBZSxHQUFpQixJQUFJLGlCQUFPLEVBQUUsQ0FBQztvQkFDOUMsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDLGtDQUFrQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7b0JBUGpGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQU9ELEtBQUs7b0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLFFBQWdCO3dCQUM3RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7d0JBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxNQUFNO29CQUNILFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELFFBQVE7b0JBQ0wsTUFBTSxDQUFDLDhCQUFlLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztZQUNKLENBQUM7WUF6Q0Q7Z0JBQUMsaUJBQVUsRUFBRTs7MkJBQUE7WUFDYixxQ0F3Q0MsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge3Rva2VuTm90RXhwaXJlZH0gZnJvbSAnYW5ndWxhcjItand0JztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzL1N1YmplY3QnXHJcblxyXG5kZWNsYXJlIHZhciBBdXRoMExvY2s6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgIHpvbmVJbXBsOiBOZ1pvbmU7XHJcbiAgIHVzZXI6IGFueTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHpvbmU6IE5nWm9uZSkge1xyXG4gICAgICB0aGlzLnpvbmVJbXBsID0gem9uZTtcclxuICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpKTtcclxuICAgfVxyXG5cclxuICAvLyBwcml2YXRlIHVzZXJlbWFpbDtcclxuICAgdXNlcnRlbXA6IGFueTtcclxuICAgcHJvZmlsZVVwZGF0ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gICBsb2NrID0gbmV3IEF1dGgwTG9jaygnMW12SEd5a1ZIdnh6cHdzdHAyd1RtcnpMcnB6b3VWVG0nLCAnYW5ndWxhcjItYXV0aC5hdXRoMC5jb20nKTtcclxuXHJcbiAgIGxvZ2luKCkge1xyXG4gICAgICB0aGlzLmxvY2suc2hvdygoZXJyb3I6IHN0cmluZywgcHJvZmlsZTogT2JqZWN0LCBpZF90b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgaWRfdG9rZW4pO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwcm9maWxlKSk7XHJcbiAgICAgICAgIHRoaXMucHJvZmlsZVVwZGF0ZWQkLm5leHQocHJvZmlsZSk7XHJcbiAgICAgICAgIHRoaXMuem9uZUltcGwucnVuKCgpID0+IHRoaXMudXNlciA9IHByb2ZpbGUpO1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0Rhc2hib2FyZCddKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGxvZ291dCgpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGUnKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XHJcbiAgICAgIHRoaXMuem9uZUltcGwucnVuKCgpID0+IHRoaXMudXNlciA9IG51bGwpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0Fib3V0J10pO1xyXG4gICB9XHJcblxyXG4gICBsb2dnZWRJbigpIHtcclxuICAgICAgcmV0dXJuIHRva2VuTm90RXhwaXJlZCgpO1xyXG4gICB9ICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
