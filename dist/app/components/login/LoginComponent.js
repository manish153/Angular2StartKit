System.register(['@angular/core', '@angular/router-deprecated', 'angular2-jwt', '../../services/AuthService'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, angular2_jwt_1, AuthService_1;
    var LoginComponent;
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
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            let LoginComponent = class LoginComponent {
                constructor(auth) {
                    this.auth = auth;
                    this.auth.login();
                }
                login() {
                    this.auth.login();
                }
                logout() {
                    this.auth.logout();
                }
                static loggedIn() {
                    return angular2_jwt_1.tokenNotExpired();
                }
            };
            LoginComponent = __decorate([
                core_1.Component({
                    selector: 'protected',
                    template: '',
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                    providers: [angular2_jwt_1.AUTH_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [AuthService_1.AuthService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL0xvZ2luQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBRUUsWUFBb0IsSUFBaUI7b0JBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7b0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0QsS0FBSztvQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixDQUFDO2dCQUVELE1BQU07b0JBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztnQkFFRCxPQUFPLFFBQVE7b0JBQ2IsTUFBTSxDQUFDLDhCQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztZQUNILENBQUM7WUF2QkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLDZCQUFjLENBQUM7aUJBQzlCLENBQUM7OzhCQUFBO1lBRUYsMkNBZ0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbG9naW4vTG9naW5Db21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHtBdXRoSHR0cCwgQXV0aENvbmZpZywgdG9rZW5Ob3RFeHBpcmVkLCBBVVRIX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjItand0JztcclxuXHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJ1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJvdGVjdGVkJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtBVVRIX1BST1ZJREVSU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UpIHtcclxuICAgIHRoaXMuYXV0aC5sb2dpbigpO1xyXG4gIH1cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMuYXV0aC5sb2dpbigpO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgdGhpcy5hdXRoLmxvZ291dCgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvZ2dlZEluKCkge1xyXG4gICAgcmV0dXJuIHRva2VuTm90RXhwaXJlZCgpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
