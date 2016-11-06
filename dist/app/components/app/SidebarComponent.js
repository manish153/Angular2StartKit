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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9TaWRlYmFyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0NBO2dCQU1JLFlBQW9CLE9BQW9CO29CQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQUoxQyxTQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLGVBQVUsR0FBWSxLQUFLLENBQUM7b0JBRzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU87d0JBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO3dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBRTdDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7NEJBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO3dCQUNuQixDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsTUFBTTtvQkFDSixrRUFBa0U7b0JBQ2xFLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4QixDQUFDO1lBQ0gsQ0FBQztZQWxFRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0NUO29CQUVELFVBQVUsRUFBRSxDQUFDLHFDQUFpQixFQUFFLHVDQUFrQixDQUFDO2lCQUN0RCxDQUFDOztnQ0FBQTtZQUVGLCtDQTJCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9TaWRlYmFyQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIENhbkFjdGl2YXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vaG9tZS9Ib21lQ29tcG9uZW50J1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9EYXNoYm9hcmRDb21wb25lbnQnXHJcbmltcG9ydCB7QXBhcnRtZW50Q29tcG9uZW50fSBmcm9tICcuLi9hcGFydG1lbnQvQXBhcnRtZW50Q29tcG9uZW50J1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSdcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXNpZGViYXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGhlYWRlciBjbGFzcz1cImRlbW8tZHJhd2VyLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9hcHAvYXNzZXRzL2ltYWdlcy91c2VyLmpwZ1wiIGNsYXNzPVwiZGVtby1hdmF0YXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWF2YXRhci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e3VzZXIuZW1haWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhY2NidG5cIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCBtZGwtYnV0dG9uLS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5hcnJvd19kcm9wX2Rvd248L2k+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPkFjY291bnRzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1yaWdodCBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIGZvcj1cImFjY2J0blwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCIgW3JvdXRlckxpbmtdPVwiWycuL1Byb2ZpbGUnXVwiPk15IFByb2ZpbGU8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCIgKGNsaWNrKT1cImxvZ291dCgpXCI+TG9nb3V0PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJkZW1vLW5hdmlnYXRpb24gbWRsLW5hdmlnYXRpb24gbWRsLWNvbG9yLS1ibHVlLWdyZXktODAwXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vRGFzaGJvYXJkJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmRhc2hib2FyZDwvaT5EYXNoYm9hcmQ8L2E+ICAgICAgICAgIFxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc0FkbWluICYmIGlzbG9nZ2VkSW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL1Rhc2tzJ11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmFzc2lnbm1lbnQ8L2k+TXkgVGFza3M8L2E+XHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzbG9nZ2VkSW4gJiYgIWlzQWRtaW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL1JlcXVlc3RzJ11cIiA+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5kZWxldGU8L2k+U2VydmljZSBSZXF1ZXN0czwvYT5cclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNBZG1pbiAmJiBpc2xvZ2dlZEluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9BZG1pbnJlcXVlc3QnXVwiID48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmRlbGV0ZTwvaT5TZXJ2aWNlIFJlcXVlc3RzPC9hPlxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc2xvZ2dlZEluICYmICFpc0FkbWluXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnLi9QYXltZW50cyddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5yZXBvcnQ8L2k+UGF5bWVudHM8L2E+XHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzQWRtaW4gJiYgaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vQWRtaW5QYXltZW50cyddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5yZXBvcnQ8L2k+UGF5bWVudHM8L2E+XHJcbiAgICAgICAgICA8YSAqbmdJZj1cImlzQWRtaW4gJiYgaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vQnVzaW5lc3NSb290cyddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5mb3J1bTwvaT5BcGFydG1lbnRzPC9hPlxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJpc0FkbWluICYmIGlzbG9nZ2VkSW5cIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgW3JvdXRlckxpbmtdPVwiWycuL1Jlc2lkZW50cyddXCI+PGkgY2xhc3M9XCJtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTQwMCBtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5mbGFnPC9pPlJlc2lkZW50czwvYT5cclxuICAgICAgICAgIDxhICpuZ0lmPVwiaXNsb2dnZWRJblwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBbcm91dGVyTGlua109XCJbJy4vQ29tbXVuaXR5J11cIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmxvY2FsX29mZmVyPC9pPk15IENvbW11bml0eTwvYT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIGhyZWY9XCJcIj48aSBjbGFzcz1cIm1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNDAwIG1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmhlbHBfb3V0bGluZTwvaT48c3BhbiBjbGFzcz1cInZpc3VhbGx5aGlkZGVuXCI+SGVscDwvc3Bhbj48L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICBgLFxyXG5cclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgRGFzaGJvYXJkQ29tcG9uZW50XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcclxuXHJcbiAgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSk7XHJcbiAgaXNBZG1pbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzbG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB0aGlzLnNlcnZpY2UucHJvZmlsZVVwZGF0ZWQkLnN1YnNjcmliZShwcm9maWxlID0+IHtcclxuICAgICAgdGhpcy51c2VyID0gcHJvZmlsZTtcclxuICAgICAgdGhpcy5pc2xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLmVtYWlsKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VyLnVzZXJfbWV0YWRhdGFbJ3JvbGUnXSk7XHJcblxyXG4gICAgICBpZih0aGlzLnVzZXIudXNlcl9tZXRhZGF0YVsncm9sZSddID09PSAnYWRtaW4nKXtcclxuICAgICAgdGhpcy5pc0FkbWluID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIC8vdGhpcy51c2VyID0gdGhpcy5zZXJ2aWNlLnByb2ZpbGVVcGRhdGVkJC5zdWJzY3JpYmUocHJvZmlsZSA9PiB7IFxyXG4gICAgLy90aGlzLnVzZXIgPSBwcm9maWxlfSlcclxuICAgIHRoaXMudXNlciA9ICd1c2VyQGV4YW1wbGUuY29tJztcclxuICAgIHRoaXMuaXNBZG1pbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc2xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlcnZpY2UubG9nb3V0KCk7XHJcbiAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
