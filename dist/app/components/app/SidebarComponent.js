System.register(['angular2/core', 'angular2/router', './DashboardComponent', '../../services/AuthService'], function(exports_1, context_1) {
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
    var core_1, router_1, DashboardComponent_1, AuthService_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (DashboardComponent_1_1) {
                DashboardComponent_1 = DashboardComponent_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            let SidebarComponent = class SidebarComponent {
                constructor(service) {
                    this.service = service;
                    this.user = JSON.parse(localStorage.getItem('profile'));
                    this.isAllowed = false;
                    this.isloggedIn = false;
                    this.user = this.service.profileUpdated$.subscribe(profile => {
                        this.user = profile;
                        this.isloggedIn = true;
                        console.log(this.user.email);
                        console.log(this.user.user_metadata['role']);
                        if (this.user.user_metadata['role'] === 'admin') {
                            this.isAllowed = true;
                        }
                    });
                }
                logout() {
                    //this.user = this.service.profileUpdated$.subscribe(profile => { 
                    //this.user = profile})
                    this.user = 'user@example.com';
                    this.isAllowed = false;
                    this.isloggedIn = false;
                    this.service.logout();
                }
            };
            SidebarComponent = __decorate([
                core_1.Component({
                    selector: 'app-sidebar',
                    template: `
      <header class="demo-drawer-header">
          <img src="../app/assets/images/user.jpg" class="demo-avatar">
          <div class="demo-avatar-dropdown">
            <span>{{user.email}}</span>
            <div class="mdl-layout-spacer"></div>
            <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i class="material-icons" role="presentation">arrow_drop_down</i>
              <span class="visuallyhidden">Accounts</span>
            </button>
            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
              <li class="mdl-menu__item" [routerLink]="['./Profile']">My Profile</li>
              <li class="mdl-menu__item" (click)="logout()">Logout</li>
              
            </ul>
          </div>
        </header>
        <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          
          <a *ngIf="isloggedIn" class="mdl-navigation__link" [routerLink]="['./Dashboard']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">dashboard</i>Dashboard</a>
          

          <a *ngIf="isloggedIn" class="mdl-navigation__link" [routerLink]="['./Tasks']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">assignment</i>My Tasks</a>

          <a *ngIf="isloggedIn" class="mdl-navigation__link" [routerLink]="['./Requests']" ><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Service Requests</a>

          <a *ngIf="isAllowed && isloggedIn" class="mdl-navigation__link" [routerLink]="['./Payments']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Payments</a>
          <a *ngIf="isloggedIn" class="mdl-navigation__link" [routerLink]="['./BusinessRoots']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Apartments</a>
          <a *ngIf="isloggedIn" class="mdl-navigation__link" [routerLink]="['./Residents']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Residents</a>
          <a *ngIf="isAllowed && isloggedIn" class="mdl-navigation__link" [routerLink]="['./Community']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>My Community</a>
          
  <!-- *ngIf="service.isAdmin()" -->
          <div class="mdl-layout-spacer"></div>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
        </nav>
    `,
                    directives: [router_1.ROUTER_DIRECTIVES, DashboardComponent_1.DashboardComponent],
                }), 
                __metadata('design:paramtypes', [AuthService_1.AuthService])
            ], SidebarComponent);
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9TaWRlYmFyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0RBO2dCQU1JLFlBQW9CLE9BQW9CO29CQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQUoxQyxTQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELGNBQVMsR0FBWSxLQUFLLENBQUM7b0JBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7b0JBRzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU87d0JBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO3dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBRTdDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7NEJBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO3dCQUNyQixDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsTUFBTTtvQkFDSixrRUFBa0U7b0JBQ2xFLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4QixDQUFDO1lBQ0gsQ0FBQztZQXJFRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUNUO29CQUVELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHVDQUFrQixDQUFDO2lCQUN0RCxDQUFDOztnQ0FBQTtZQUVGLCtDQTJCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9TaWRlYmFyQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE91dHB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIENhbkFjdGl2YXRlfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4uL2hvbWUvSG9tZUNvbXBvbmVudCdcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gJy4vRGFzaGJvYXJkQ29tcG9uZW50J1xyXG5pbXBvcnQge0FwYXJ0bWVudENvbXBvbmVudH0gZnJvbSAnLi4vYXBhcnRtZW50L0FwYXJ0bWVudENvbXBvbmVudCdcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2UnXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxoZWFkZXIgY2xhc3M9XCJkZW1vLWRyYXdlci1oZWFkZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXBwL2Fzc2V0cy9pbWFnZXMvdXNlci5qcGdcIiBjbGFzcz1cImRlbW8tYXZhdGFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1hdmF0YXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPHNwYW4+e3t1c2VyLmVtYWlsfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjYnRuXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgbWRsLWJ1dHRvbi0taWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+YXJyb3dfZHJvcF9kb3duPC9pPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHloaWRkZW5cIj5BY2NvdW50czwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZW51IG1kbC1tZW51LS1ib3R0b20tcmlnaHQgbWRsLWpzLW1lbnUgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIiBmb3I9XCJhY2NidG5cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiIFtyb3V0ZXJMaW5rXT1cIlsnLi9Qcm9maWxlJ11cIj5NeSBQcm9maWxlPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiIChjbGljayk9XCJsb2dvdXQoKVwiPkxvZ291dDwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwiZGVtby1uYXZpZ2F0aW9uIG1kbC1uYXZpZ2F0aW9uIG1kbC1jb2xvci0tYmx1ZS1ncmV5LTgwMFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzbG9nZ2VkSW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL0Rhc2hib2FyZCddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5kYXNoYm9hcmQ8L2k+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc2xvZ2dlZEluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9UYXNrcyddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5hc3NpZ25tZW50PC9pPk15IFRhc2tzPC9hPlxyXG5cclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vUmVxdWVzdHMnXVwiID48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmRlbGV0ZTwvaT5TZXJ2aWNlIFJlcXVlc3RzPC9hPlxyXG5cclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNBbGxvd2VkICYmIGlzbG9nZ2VkSW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL1BheW1lbnRzJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPnJlcG9ydDwvaT5QYXltZW50czwvYT5cclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vQnVzaW5lc3NSb290cyddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5mb3J1bTwvaT5BcGFydG1lbnRzPC9hPlxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc2xvZ2dlZEluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9SZXNpZGVudHMnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+ZmxhZzwvaT5SZXNpZGVudHM8L2E+XHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzQWxsb3dlZCAmJiBpc2xvZ2dlZEluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9Db21tdW5pdHknXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+bG9jYWxfb2ZmZXI8L2k+TXkgQ29tbXVuaXR5PC9hPlxyXG4gICAgICAgICAgXHJcbiAgPCEtLSAqbmdJZj1cInNlcnZpY2UuaXNBZG1pbigpXCIgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBocmVmPVwiXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5oZWxwX291dGxpbmU8L2k+PHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPkhlbHA8L3NwYW4+PC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIERhc2hib2FyZENvbXBvbmVudF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XHJcblxyXG4gIHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG4gIGlzQWxsb3dlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB0aGlzLnNlcnZpY2UucHJvZmlsZVVwZGF0ZWQkLnN1YnNjcmliZShwcm9maWxlID0+IHtcclxuICAgICAgdGhpcy51c2VyID0gcHJvZmlsZTtcclxuICAgICAgdGhpcy5pc2xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLmVtYWlsKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLnVzZXJfbWV0YWRhdGFbJ3JvbGUnXSk7XHJcblxyXG4gICAgICBpZih0aGlzLnVzZXIudXNlcl9tZXRhZGF0YVsncm9sZSddID09PSAnYWRtaW4nKXtcclxuICAgICAgdGhpcy5pc0FsbG93ZWQgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgLy90aGlzLnVzZXIgPSB0aGlzLnNlcnZpY2UucHJvZmlsZVVwZGF0ZWQkLnN1YnNjcmliZShwcm9maWxlID0+IHsgXHJcbiAgICAvL3RoaXMudXNlciA9IHByb2ZpbGV9KVxyXG4gICAgdGhpcy51c2VyID0gJ3VzZXJAZXhhbXBsZS5jb20nO1xyXG4gICAgdGhpcy5pc0FsbG93ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNsb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXJ2aWNlLmxvZ291dCgpO1xyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
