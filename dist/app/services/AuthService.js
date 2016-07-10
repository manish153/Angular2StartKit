System.register(['@angular/core', "@angular/router-deprecated", 'angular2-jwt', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, angular2_jwt_1, Subject_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
                __metadata('design:paramtypes', [router_deprecated_1.Router, core_1.NgZone])
            ], AuthService);
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUtHLFlBQW9CLE1BQWMsRUFBRSxJQUFZO29CQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFRO29CQU9sQyxvQkFBZSxHQUFpQixJQUFJLGlCQUFPLEVBQUUsQ0FBQztvQkFDOUMsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDLGtDQUFrQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7b0JBUGpGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQU9ELEtBQUs7b0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLFFBQWdCO3dCQUM3RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7d0JBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxNQUFNO29CQUNILFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELFFBQVE7b0JBQ0wsTUFBTSxDQUFDLDhCQUFlLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztZQUNKLENBQUM7WUF6Q0Q7Z0JBQUMsaUJBQVUsRUFBRTs7MkJBQUE7WUFDYixxQ0F3Q0MsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkXCI7XHJcbmltcG9ydCB7dG9rZW5Ob3RFeHBpcmVkfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCdcclxuXHJcbmRlY2xhcmUgdmFyIEF1dGgwTG9jazogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuICAgem9uZUltcGw6IE5nWm9uZTtcclxuICAgdXNlcjogYW55O1xyXG5cclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgem9uZTogTmdab25lKSB7XHJcbiAgICAgIHRoaXMuem9uZUltcGwgPSB6b25lO1xyXG4gICAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG4gICB9XHJcblxyXG4gIC8vIHByaXZhdGUgdXNlcmVtYWlsO1xyXG4gICB1c2VydGVtcDogYW55O1xyXG4gICBwcm9maWxlVXBkYXRlZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgIGxvY2sgPSBuZXcgQXV0aDBMb2NrKCcxbXZIR3lrVkh2eHpwd3N0cDJ3VG1yekxycHpvdVZUbScsICdhbmd1bGFyMi1hdXRoLmF1dGgwLmNvbScpO1xyXG5cclxuICAgbG9naW4oKSB7XHJcbiAgICAgIHRoaXMubG9jay5zaG93KChlcnJvcjogc3RyaW5nLCBwcm9maWxlOiBPYmplY3QsIGlkX3Rva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBpZF90b2tlbik7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcclxuICAgICAgICAgdGhpcy5wcm9maWxlVXBkYXRlZCQubmV4dChwcm9maWxlKTtcclxuICAgICAgICAgdGhpcy56b25lSW1wbC5ydW4oKCkgPT4gdGhpcy51c2VyID0gcHJvZmlsZSk7XHJcbiAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnRGFzaGJvYXJkJ10pO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgbG9nb3V0KCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZScpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcclxuICAgICAgdGhpcy56b25lSW1wbC5ydW4oKCkgPT4gdGhpcy51c2VyID0gbnVsbCk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnQWJvdXQnXSk7XHJcbiAgIH1cclxuXHJcbiAgIGxvZ2dlZEluKCkge1xyXG4gICAgICByZXR1cm4gdG9rZW5Ob3RFeHBpcmVkKCk7XHJcbiAgIH0gICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
