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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUtHLFlBQW9CLE1BQWMsRUFBRSxJQUFZO29CQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFRO29CQU1sQyxvQkFBZSxHQUFpQixJQUFJLGlCQUFPLEVBQUUsQ0FBQztvQkFDOUMsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDLGtDQUFrQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7b0JBTmpGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQU1ELEtBQUs7b0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLFFBQWdCO3dCQUM3RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELE1BQU07b0JBQ0gsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDbkMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsUUFBUTtvQkFDTCxNQUFNLENBQUMsOEJBQWUsRUFBRSxDQUFDO2dCQUM1QixDQUFDO1lBQ0osQ0FBQztZQXZDRDtnQkFBQyxpQkFBVSxFQUFFOzsyQkFBQTtZQUNiLHFDQXNDQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7dG9rZW5Ob3RFeHBpcmVkfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCdcclxuXHJcbmRlY2xhcmUgdmFyIEF1dGgwTG9jazogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuICAgem9uZUltcGw6IE5nWm9uZTtcclxuICAgdXNlcjogT2JqZWN0O1xyXG5cclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgem9uZTogTmdab25lKSB7XHJcbiAgICAgIHRoaXMuem9uZUltcGwgPSB6b25lO1xyXG4gICAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVzZXJlbWFpbDtcclxuICAgcHJvZmlsZVVwZGF0ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gICBsb2NrID0gbmV3IEF1dGgwTG9jaygnMW12SEd5a1ZIdnh6cHdzdHAyd1RtcnpMcnB6b3VWVG0nLCAnYW5ndWxhcjItYXV0aC5hdXRoMC5jb20nKTtcclxuXHJcbiAgIGxvZ2luKCkge1xyXG4gICAgICB0aGlzLmxvY2suc2hvdygoZXJyb3I6IHN0cmluZywgcHJvZmlsZTogT2JqZWN0LCBpZF90b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgaWRfdG9rZW4pO1xyXG4gICAgICAgICB0aGlzLnByb2ZpbGVVcGRhdGVkJC5uZXh0KHByb2ZpbGUpO1xyXG4gICAgICAgICB0aGlzLnpvbmVJbXBsLnJ1bigoKSA9PiB0aGlzLnVzZXIgPSBwcm9maWxlKTtcclxuICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydEYXNoYm9hcmQnXSk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBsb2dvdXQoKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xyXG4gICAgICB0aGlzLnpvbmVJbXBsLnJ1bigoKSA9PiB0aGlzLnVzZXIgPSBudWxsKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydBYm91dCddKTtcclxuICAgfVxyXG5cclxuICAgbG9nZ2VkSW4oKSB7XHJcbiAgICAgIHJldHVybiB0b2tlbk5vdEV4cGlyZWQoKTtcclxuICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
