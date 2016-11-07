System.register(['@angular/core', '@angular/router-deprecated', './DashboardComponent', '../../services/AuthService'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, DashboardComponent_1, AuthService_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
                    this.sidebarClicked = new core_1.EventEmitter();
                    this.user = JSON.parse(localStorage.getItem('profile'));
                    this.isAdmin = false;
                    this.isloggedIn = false;
                    this.user = this.service.profileUpdated$.subscribe(profile => {
                        this.user = profile;
                        this.isloggedIn = true;
                        console.log(this.user.email);
                        console.log(this.user.user_metadata['role']);
                        if (this.user.user_metadata['role'] === 'admin') {
                            this.isAdmin = true;
                        }
                    });
                }
                logout() {
                    this.user = 'user@example.com';
                    this.isAdmin = false;
                    this.isloggedIn = false;
                    this.service.logout();
                }
                clearSearch(event) {
                    this.sidebarClicked.emit(true);
                }
            };
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], SidebarComponent.prototype, "sidebarClicked", void 0);
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
          <a *ngIf="isAdmin && isloggedIn" class="mdl-navigation__link" [routerLink]="['./Tasks']" (click)="clearSearch()"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">assignment</i>My Tasks</a>
          <a *ngIf="isloggedIn && !isAdmin" class="mdl-navigation__link" [routerLink]="['./Requests']" ><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Service Requests</a>
          <a *ngIf="isAdmin && isloggedIn" class="mdl-navigation__link" [routerLink]="['./Adminrequest']" ><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Service Requests</a>
          <a *ngIf="isloggedIn && !isAdmin" class="mdl-navigation__link" [routerLink]="['./Payments']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Payments</a>
          <a *ngIf="isAdmin && isloggedIn" class="mdl-navigation__link" [routerLink]="['./AdminPayments']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Payments</a>
          <a *ngIf="isAdmin && isloggedIn" class="mdl-navigation__link" [routerLink]="['./BusinessRoots']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Apartments</a>
          <a *ngIf="isAdmin && isloggedIn" class="mdl-navigation__link" [routerLink]="['./Residents']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Residents</a>
          <a *ngIf="isloggedIn" class="mdl-navigation__link" [routerLink]="['./Community']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>My Community</a>
           
          <div class="mdl-layout-spacer"></div>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
        </nav>
    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES, DashboardComponent_1.DashboardComponent],
                }), 
                __metadata('design:paramtypes', [AuthService_1.AuthService])
            ], SidebarComponent);
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9TaWRlYmFyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0NBO2dCQVFJLFlBQW9CLE9BQW9CO29CQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQU5oQyxtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBVyxDQUFDO29CQUV2RCxTQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLGVBQVUsR0FBWSxLQUFLLENBQUM7b0JBRzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU87d0JBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO3dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBRTdDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7NEJBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO3dCQUNuQixDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsTUFBTTtvQkFDSixJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO29CQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsV0FBVyxDQUFDLEtBQUs7b0JBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpDLENBQUM7WUFDSCxDQUFDO1lBOUJDO2dCQUFDLGFBQU0sRUFBRTs7b0VBQUE7WUF6Q1g7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdDVDtvQkFFRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsRUFBRSx1Q0FBa0IsQ0FBQztpQkFDdEQsQ0FBQzs7Z0NBQUE7WUFFRiwrQ0FnQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAvU2lkZWJhckNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPdXRwdXQsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgQ2FuQWN0aXZhdGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi9ob21lL0hvbWVDb21wb25lbnQnXHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL0Rhc2hib2FyZENvbXBvbmVudCdcclxuaW1wb3J0IHtBcGFydG1lbnRDb21wb25lbnR9IGZyb20gJy4uL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQnXHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJ1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8aGVhZGVyIGNsYXNzPVwiZGVtby1kcmF3ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2FwcC9hc3NldHMvaW1hZ2VzL3VzZXIuanBnXCIgY2xhc3M9XCJkZW1vLWF2YXRhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tYXZhdGFyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7dXNlci5lbWFpbH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFjY2J0blwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1idXR0b24tLWljb25cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmFycm93X2Ryb3BfZG93bjwvaT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5aGlkZGVuXCI+QWNjb3VudHM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtZGwtbWVudSBtZGwtbWVudS0tYm90dG9tLXJpZ2h0IG1kbC1qcy1tZW51IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgZm9yPVwiYWNjYnRuXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWRsLW1lbnVfX2l0ZW1cIiBbcm91dGVyTGlua109XCJbJy4vUHJvZmlsZSddXCI+TXkgUHJvZmlsZTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWRsLW1lbnVfX2l0ZW1cIiAoY2xpY2spPVwibG9nb3V0KClcIj5Mb2dvdXQ8L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG5hdiBjbGFzcz1cImRlbW8tbmF2aWdhdGlvbiBtZGwtbmF2aWdhdGlvbiBtZGwtY29sb3ItLWJsdWUtZ3JleS04MDBcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc2xvZ2dlZEluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9EYXNoYm9hcmQnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+ZGFzaGJvYXJkPC9pPkRhc2hib2FyZDwvYT4gICAgICAgICAgXHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzQWRtaW4gJiYgaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vVGFza3MnXVwiIChjbGljayk9XCJjbGVhclNlYXJjaCgpXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5hc3NpZ25tZW50PC9pPk15IFRhc2tzPC9hPlxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc2xvZ2dlZEluICYmICFpc0FkbWluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9SZXF1ZXN0cyddXCIgPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+ZGVsZXRlPC9pPlNlcnZpY2UgUmVxdWVzdHM8L2E+XHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzQWRtaW4gJiYgaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vQWRtaW5yZXF1ZXN0J11cIiA+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5kZWxldGU8L2k+U2VydmljZSBSZXF1ZXN0czwvYT5cclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNsb2dnZWRJbiAmJiAhaXNBZG1pblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vUGF5bWVudHMnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+cmVwb3J0PC9pPlBheW1lbnRzPC9hPlxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc0FkbWluICYmIGlzbG9nZ2VkSW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL0FkbWluUGF5bWVudHMnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+cmVwb3J0PC9pPlBheW1lbnRzPC9hPlxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc0FkbWluICYmIGlzbG9nZ2VkSW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL0J1c2luZXNzUm9vdHMnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+Zm9ydW08L2k+QXBhcnRtZW50czwvYT5cclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNBZG1pbiAmJiBpc2xvZ2dlZEluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9SZXNpZGVudHMnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+ZmxhZzwvaT5SZXNpZGVudHM8L2E+XHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzbG9nZ2VkSW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL0NvbW11bml0eSddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5sb2NhbF9vZmZlcjwvaT5NeSBDb21tdW5pdHk8L2E+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBocmVmPVwiXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5oZWxwX291dGxpbmU8L2k+PHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPkhlbHA8L3NwYW4+PC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIERhc2hib2FyZENvbXBvbmVudF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XHJcblxyXG4gIEBPdXRwdXQoKSBzaWRlYmFyQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSk7XHJcbiAgaXNBZG1pbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB0aGlzLnNlcnZpY2UucHJvZmlsZVVwZGF0ZWQkLnN1YnNjcmliZShwcm9maWxlID0+IHtcclxuICAgICAgdGhpcy51c2VyID0gcHJvZmlsZTtcclxuICAgICAgdGhpcy5pc2xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLmVtYWlsKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLnVzZXJfbWV0YWRhdGFbJ3JvbGUnXSk7XHJcblxyXG4gICAgICBpZih0aGlzLnVzZXIudXNlcl9tZXRhZGF0YVsncm9sZSddID09PSAnYWRtaW4nKXtcclxuICAgICAgdGhpcy5pc0FkbWluID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIHRoaXMudXNlciA9ICd1c2VyQGV4YW1wbGUuY29tJztcclxuICAgIHRoaXMuaXNBZG1pbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc2xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlcnZpY2UubG9nb3V0KCk7XHJcbiAgfVxyXG5cclxuICBjbGVhclNlYXJjaChldmVudCl7XHJcbiAgICB0aGlzLnNpZGViYXJDbGlja2VkLmVtaXQodHJ1ZSk7XHJcbiAgICBcclxuICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
