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
                    //this.user = this.service.profileUpdated$.subscribe(profile => { 
                    //this.user = profile})
                    this.user = 'user@example.com';
                    this.isAdmin = false;
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
          <a *ngIf="isAdmin && isloggedIn" class="mdl-navigation__link" [routerLink]="['./Tasks']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">assignment</i>My Tasks</a>
          <a *ngIf="isloggedIn && !isAdmin" class="mdl-navigation__link" [routerLink]="['./Requests']" ><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Service Requests</a>
          <a *ngIf="isAdmin && isloggedIn" class="mdl-navigation__link" [routerLink]="['./Adminrequest']" ><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Service Requests</a>
          <a *ngIf="isloggedIn" class="mdl-navigation__link" [routerLink]="['./Payments']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Payments</a>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9TaWRlYmFyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOENBO2dCQU1JLFlBQW9CLE9BQW9CO29CQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQUoxQyxTQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLGVBQVUsR0FBWSxLQUFLLENBQUM7b0JBRzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU87d0JBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO3dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBRTdDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7NEJBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO3dCQUNuQixDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsTUFBTTtvQkFDSixrRUFBa0U7b0JBQ2xFLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4QixDQUFDO1lBQ0gsQ0FBQztZQWpFRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErQlQ7b0JBRUQsVUFBVSxFQUFFLENBQUMscUNBQWlCLEVBQUUsdUNBQWtCLENBQUM7aUJBQ3RELENBQUM7O2dDQUFBO1lBRUYsK0NBMkJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL1NpZGViYXJDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgQ2FuQWN0aXZhdGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi9ob21lL0hvbWVDb21wb25lbnQnXHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL0Rhc2hib2FyZENvbXBvbmVudCdcclxuaW1wb3J0IHtBcGFydG1lbnRDb21wb25lbnR9IGZyb20gJy4uL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQnXHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJ1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8aGVhZGVyIGNsYXNzPVwiZGVtby1kcmF3ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2FwcC9hc3NldHMvaW1hZ2VzL3VzZXIuanBnXCIgY2xhc3M9XCJkZW1vLWF2YXRhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tYXZhdGFyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7dXNlci5lbWFpbH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFjY2J0blwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1idXR0b24tLWljb25cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmFycm93X2Ryb3BfZG93bjwvaT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5aGlkZGVuXCI+QWNjb3VudHM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtZGwtbWVudSBtZGwtbWVudS0tYm90dG9tLXJpZ2h0IG1kbC1qcy1tZW51IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgZm9yPVwiYWNjYnRuXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWRsLW1lbnVfX2l0ZW1cIiBbcm91dGVyTGlua109XCJbJy4vUHJvZmlsZSddXCI+TXkgUHJvZmlsZTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWRsLW1lbnVfX2l0ZW1cIiAoY2xpY2spPVwibG9nb3V0KClcIj5Mb2dvdXQ8L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG5hdiBjbGFzcz1cImRlbW8tbmF2aWdhdGlvbiBtZGwtbmF2aWdhdGlvbiBtZGwtY29sb3ItLWJsdWUtZ3JleS04MDBcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc2xvZ2dlZEluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9EYXNoYm9hcmQnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+ZGFzaGJvYXJkPC9pPkRhc2hib2FyZDwvYT4gICAgICAgICAgXHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzQWRtaW4gJiYgaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vVGFza3MnXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+YXNzaWdubWVudDwvaT5NeSBUYXNrczwvYT5cclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNsb2dnZWRJbiAmJiAhaXNBZG1pblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vUmVxdWVzdHMnXVwiID48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmRlbGV0ZTwvaT5TZXJ2aWNlIFJlcXVlc3RzPC9hPlxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc0FkbWluICYmIGlzbG9nZ2VkSW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL0FkbWlucmVxdWVzdCddXCIgPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+ZGVsZXRlPC9pPlNlcnZpY2UgUmVxdWVzdHM8L2E+XHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzbG9nZ2VkSW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL1BheW1lbnRzJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPnJlcG9ydDwvaT5QYXltZW50czwvYT5cclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNBZG1pbiAmJiBpc2xvZ2dlZEluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9CdXNpbmVzc1Jvb3RzJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmZvcnVtPC9pPkFwYXJ0bWVudHM8L2E+XHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzQWRtaW4gJiYgaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vUmVzaWRlbnRzJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmZsYWc8L2k+UmVzaWRlbnRzPC9hPlxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc2xvZ2dlZEluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9Db21tdW5pdHknXVwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+bG9jYWxfb2ZmZXI8L2k+TXkgQ29tbXVuaXR5PC9hPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgaHJlZj1cIlwiPjxpIGNsYXNzPVwibWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS00MDAgbWF0ZXJpYWwtaWNvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+aGVscF9vdXRsaW5lPC9pPjxzcGFuIGNsYXNzPVwidmlzdWFsbHloaWRkZW5cIj5IZWxwPC9zcGFuPjwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBEYXNoYm9hcmRDb21wb25lbnRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xyXG5cclxuICB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpKTtcclxuICBpc0FkbWluOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNsb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogQXV0aFNlcnZpY2UpIHtcclxuICAgIHRoaXMudXNlciA9IHRoaXMuc2VydmljZS5wcm9maWxlVXBkYXRlZCQuc3Vic2NyaWJlKHByb2ZpbGUgPT4ge1xyXG4gICAgICB0aGlzLnVzZXIgPSBwcm9maWxlO1xyXG4gICAgICB0aGlzLmlzbG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIuZW1haWwpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIudXNlcl9tZXRhZGF0YVsncm9sZSddKTtcclxuXHJcbiAgICAgIGlmKHRoaXMudXNlci51c2VyX21ldGFkYXRhWydyb2xlJ10gPT09ICdhZG1pbicpe1xyXG4gICAgICB0aGlzLmlzQWRtaW4gPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgLy90aGlzLnVzZXIgPSB0aGlzLnNlcnZpY2UucHJvZmlsZVVwZGF0ZWQkLnN1YnNjcmliZShwcm9maWxlID0+IHsgXHJcbiAgICAvL3RoaXMudXNlciA9IHByb2ZpbGV9KVxyXG4gICAgdGhpcy51c2VyID0gJ3VzZXJAZXhhbXBsZS5jb20nO1xyXG4gICAgdGhpcy5pc0FkbWluID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzbG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIHRoaXMuc2VydmljZS5sb2dvdXQoKTtcclxuICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
