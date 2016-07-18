System.register(['@angular/core', '@angular/router-deprecated', 'angular2-jwt', 'angular2-notifications', '../home/HomeComponent', '../about/AboutComponent', './HeaderComponent', '../login/LoginComponent', './SidebarComponent', './DashboardComponent', './MaterialDesignLiteUpgradeElement', './AuthRouterOutlet', '../profile/ProfileComponent', '../requests/RequestsComponent', '../requests/AdminRequestComponent', '../requests/CreateRequestComponent', '../tasks/TasksComponent', '../tasks/AllTasksComponent', '../payments/PaymentsComponent', '../residents/ResidentsComponent', '../community/CommunityComponent', '../apartment/BusinessRootComponent', '../tasks/CreateTaskComponent', '../tasks/EditTaskComponent'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, angular2_jwt_1, angular2_notifications_1, HomeComponent_1, AboutComponent_1, HeaderComponent_1, LoginComponent_1, SidebarComponent_1, DashboardComponent_1, MaterialDesignLiteUpgradeElement_1, AuthRouterOutlet_1, ProfileComponent_1, RequestsComponent_1, AdminRequestComponent_1, CreateRequestComponent_1, TasksComponent_1, AllTasksComponent_1, PaymentsComponent_1, ResidentsComponent_1, CommunityComponent_1, BusinessRootComponent_1, CreateTaskComponent_1, EditTaskComponent_1;
    var AppComponent;
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
            function (angular2_notifications_1_1) {
                angular2_notifications_1 = angular2_notifications_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (AboutComponent_1_1) {
                AboutComponent_1 = AboutComponent_1_1;
            },
            function (HeaderComponent_1_1) {
                HeaderComponent_1 = HeaderComponent_1_1;
            },
            function (LoginComponent_1_1) {
                LoginComponent_1 = LoginComponent_1_1;
            },
            function (SidebarComponent_1_1) {
                SidebarComponent_1 = SidebarComponent_1_1;
            },
            function (DashboardComponent_1_1) {
                DashboardComponent_1 = DashboardComponent_1_1;
            },
            function (MaterialDesignLiteUpgradeElement_1_1) {
                MaterialDesignLiteUpgradeElement_1 = MaterialDesignLiteUpgradeElement_1_1;
            },
            function (AuthRouterOutlet_1_1) {
                AuthRouterOutlet_1 = AuthRouterOutlet_1_1;
            },
            function (ProfileComponent_1_1) {
                ProfileComponent_1 = ProfileComponent_1_1;
            },
            function (RequestsComponent_1_1) {
                RequestsComponent_1 = RequestsComponent_1_1;
            },
            function (AdminRequestComponent_1_1) {
                AdminRequestComponent_1 = AdminRequestComponent_1_1;
            },
            function (CreateRequestComponent_1_1) {
                CreateRequestComponent_1 = CreateRequestComponent_1_1;
            },
            function (TasksComponent_1_1) {
                TasksComponent_1 = TasksComponent_1_1;
            },
            function (AllTasksComponent_1_1) {
                AllTasksComponent_1 = AllTasksComponent_1_1;
            },
            function (PaymentsComponent_1_1) {
                PaymentsComponent_1 = PaymentsComponent_1_1;
            },
            function (ResidentsComponent_1_1) {
                ResidentsComponent_1 = ResidentsComponent_1_1;
            },
            function (CommunityComponent_1_1) {
                CommunityComponent_1 = CommunityComponent_1_1;
            },
            function (BusinessRootComponent_1_1) {
                BusinessRootComponent_1 = BusinessRootComponent_1_1;
            },
            function (CreateTaskComponent_1_1) {
                CreateTaskComponent_1 = CreateTaskComponent_1_1;
            },
            function (EditTaskComponent_1_1) {
                EditTaskComponent_1 = EditTaskComponent_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.options = {
                        timeOut: 5000,
                        lastOnBottom: true,
                        clickToClose: true,
                        maxLength: 0,
                        maxStack: 7,
                        showProgressBar: true,
                        pauseOnHover: true
                    };
                }
            };
            AppComponent = __decorate([
                router_deprecated_1.RouteConfig([
                    { path: 'app/home', component: HomeComponent_1.HomeComponent, name: 'Home' },
                    { path: 'app/dashboard', component: DashboardComponent_1.DashboardComponent, name: 'Dashboard', useAsDefault: true },
                    { path: 'app/about', component: AboutComponent_1.AboutComponent, name: 'About' },
                    { path: 'app/login', component: LoginComponent_1.LoginComponent, name: 'Login' },
                    { path: 'app/profile', component: ProfileComponent_1.ProfileComponent, name: 'Profile' },
                    //{ path: 'app/apartment', component: ApartmentComponent, as: 'Apartment' },
                    { path: 'app/requests', component: RequestsComponent_1.RequestsComponent, name: 'Requests' },
                    { path: 'app/adminrequest', component: AdminRequestComponent_1.AdminRequestComponent, name: 'Adminrequest' },
                    { path: 'app/createrequest', component: CreateRequestComponent_1.CreateRequestComponent, name: 'Createrequest' },
                    { path: 'app/tasks', component: TasksComponent_1.TasksComponent, name: 'Tasks' },
                    { path: 'app/alltasks', component: AllTasksComponent_1.AllTasksComponent, name: 'AllTasks' },
                    { path: 'app/createtask', component: CreateTaskComponent_1.CreateTaskComponent, name: 'CreateTask' },
                    { path: 'app/edittask', component: EditTaskComponent_1.EditTaskComponent, name: 'EditTask' },
                    { path: 'app/payment', component: PaymentsComponent_1.PaymentsComponent, name: 'Payments' },
                    { path: 'app/residents', component: ResidentsComponent_1.ResidentsComponent, name: 'Residents' },
                    { path: 'app/community', component: CommunityComponent_1.CommunityComponent, name: 'Community' },
                    { path: 'app/businessunits/...', component: BusinessRootComponent_1.BusinessRootComponent, name: 'BusinessRoots' },
                    { path: 'app/**', redirectTo: ['Dashboard'] }
                ]),
                core_1.Component({
                    selector: 'my-app',
                    template: `
    <body>
    <div mdl class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <app-header mdl class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"></app-header>
      <app-sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
      </app-sidebar>
      <main class="mdl-layout__content mdl-color--grey-100">
         
         <auth-router-outlet></auth-router-outlet>
        
      </main>
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="position: fixed; left: -1000px; height: -1000px;">
        <defs>
          <mask id="piemask" maskContentUnits="objectBoundingBox">
            <circle cx=0.5 cy=0.5 r=0.49 fill="white" />
            <circle cx=0.5 cy=0.5 r=0.40 fill="black" />
          </mask>
          <g id="piechart">
            <circle cx=0.5 cy=0.5 r=0.5 />
            <path d="M 0.5 0.5 0.5 0 A 0.5 0.5 0 0 1 0.95 0.28 z" stroke="none" fill="rgba(255, 255, 255, 0.75)" />
          </g>
        </defs>
      </svg>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 250" style="position: fixed; left: -1000px; height: -1000px;">
        <defs>
          <g id="chart">
            <g id="Gridlines">
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="27.3" x2="468.3" y2="27.3" />
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="66.7" x2="468.3" y2="66.7" />
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="105.3" x2="468.3" y2="105.3" />
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="144.7" x2="468.3" y2="144.7" />
              <line fill="#888888" stroke="#888888" stroke-miterlimit="10" x1="0" y1="184.3" x2="468.3" y2="184.3" />
            </g>
            <g id="Numbers">
              <text transform="matrix(1 0 0 1 485 29.3333)" fill="#888888" font-family="'Roboto'" font-size="9">500</text>
              <text transform="matrix(1 0 0 1 485 69)" fill="#888888" font-family="'Roboto'" font-size="9">400</text>
              <text transform="matrix(1 0 0 1 485 109.3333)" fill="#888888" font-family="'Roboto'" font-size="9">300</text>
              <text transform="matrix(1 0 0 1 485 149)" fill="#888888" font-family="'Roboto'" font-size="9">200</text>
              <text transform="matrix(1 0 0 1 485 188.3333)" fill="#888888" font-family="'Roboto'" font-size="9">100</text>
              <text transform="matrix(1 0 0 1 0 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">1</text>
              <text transform="matrix(1 0 0 1 78 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">2</text>
              <text transform="matrix(1 0 0 1 154.6667 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">3</text>
              <text transform="matrix(1 0 0 1 232.1667 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">4</text>
              <text transform="matrix(1 0 0 1 309 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">5</text>
              <text transform="matrix(1 0 0 1 386.6667 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">6</text>
              <text transform="matrix(1 0 0 1 464.3333 249.0003)" fill="#888888" font-family="'Roboto'" font-size="9">7</text>
            </g>
            <g id="Layer_5">
              <polygon opacity="0.36" stroke-miterlimit="10" points="0,223.3 48,138.5 154.7,169 211,88.5
              294.5,80.5 380,165.2 437,75.5 469.5,223.3 	"/>
            </g>
            <g id="Layer_4">
              <polygon stroke-miterlimit="10" points="469.3,222.7 1,222.7 48.7,166.7 155.7,188.3 212,132.7
              296.7,128 380.7,184.3 436.7,125 	"/>
            </g>
          </g>
        </defs>
      </svg>
      
    <script src="https://code.getmdl.io/1.1.3/material.min.js"></script>
    <simple-notifications [options]="options"></simple-notifications>  
  </body>

    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES, SidebarComponent_1.SidebarComponent, HeaderComponent_1.HeaderComponent, MaterialDesignLiteUpgradeElement_1.MDL, AuthRouterOutlet_1.AuthRouterOutlet, angular2_notifications_1.SimpleNotificationsComponent],
                    providers: [angular2_jwt_1.AUTH_PROVIDERS, angular2_notifications_1.NotificationsService]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwSEE7Z0JBRUU7b0JBRVcsWUFBTyxHQUFHO3dCQUNiLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFlBQVksRUFBRSxJQUFJO3dCQUNsQixZQUFZLEVBQUUsSUFBSTt3QkFDbEIsU0FBUyxFQUFFLENBQUM7d0JBQ1osUUFBUSxFQUFFLENBQUM7d0JBQ1gsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLFlBQVksRUFBRSxJQUFJO3FCQUN2QixDQUFDO2dCQVZZLENBQUM7WUFZbkIsQ0FBQztZQTFHRDtnQkFBQywrQkFBVyxDQUFDO29CQUNULEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkJBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO29CQUM1RCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQztvQkFDOUYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwrQkFBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7b0JBQy9ELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO29CQUMvRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG1DQUFnQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7b0JBQ3JFLDRFQUE0RTtvQkFDNUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO29CQUN4RSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsNkNBQXFCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtvQkFDcEYsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLCtDQUFzQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7b0JBQ3ZGLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO29CQUMvRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0JBQ3hFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSx5Q0FBbUIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO29CQUM5RSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0JBQ3hFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtvQkFDdkUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1Q0FBa0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO29CQUMzRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7b0JBQzNFLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSw2Q0FBcUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO29CQUMxRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUU7aUJBQ2hELENBQUM7Z0JBQ0QsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0VQO29CQUNELFVBQVUsRUFBRSxDQUFDLHFDQUFpQixFQUFFLG1DQUFnQixFQUFFLGlDQUFlLEVBQUUsc0NBQUcsRUFBRSxtQ0FBZ0IsRUFBQyxxREFBNEIsQ0FBQztvQkFDdEgsU0FBUyxFQUFFLENBQUMsNkJBQWMsRUFBQyw2Q0FBb0IsQ0FBQztpQkFDbkQsQ0FBQzs7NEJBQUE7WUFHRix1Q0FjQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5pbXBvcnQge0F1dGhIdHRwLCBBdXRoQ29uZmlnLCB0b2tlbk5vdEV4cGlyZWQsIEFVVEhfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQge1NpbXBsZU5vdGlmaWNhdGlvbnNDb21wb25lbnQsTm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuXHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vaG9tZS9Ib21lQ29tcG9uZW50J1xyXG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tICcuLi9hYm91dC9BYm91dENvbXBvbmVudCdcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vSGVhZGVyQ29tcG9uZW50J1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi9Mb2dpbkNvbXBvbmVudCdcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2UnXHJcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSAnLi9TaWRlYmFyQ29tcG9uZW50J1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9EYXNoYm9hcmRDb21wb25lbnQnXHJcbmltcG9ydCB7TURMfSBmcm9tICcuL01hdGVyaWFsRGVzaWduTGl0ZVVwZ3JhZGVFbGVtZW50J1xyXG5pbXBvcnQge0F1dGhSb3V0ZXJPdXRsZXR9IGZyb20gJy4vQXV0aFJvdXRlck91dGxldCdcclxuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tICcuLi9wcm9maWxlL1Byb2ZpbGVDb21wb25lbnQnXHJcbmltcG9ydCB7QXBhcnRtZW50Q29tcG9uZW50fSBmcm9tICcuLi9hcGFydG1lbnQvQXBhcnRtZW50Q29tcG9uZW50J1xyXG5pbXBvcnQge1JlcXVlc3RzQ29tcG9uZW50fSBmcm9tICcuLi9yZXF1ZXN0cy9SZXF1ZXN0c0NvbXBvbmVudCdcclxuaW1wb3J0IHtBZG1pblJlcXVlc3RDb21wb25lbnR9IGZyb20gJy4uL3JlcXVlc3RzL0FkbWluUmVxdWVzdENvbXBvbmVudCdcclxuaW1wb3J0IHtDcmVhdGVSZXF1ZXN0Q29tcG9uZW50fSBmcm9tICcuLi9yZXF1ZXN0cy9DcmVhdGVSZXF1ZXN0Q29tcG9uZW50J1xyXG5pbXBvcnQge1Rhc2tzQ29tcG9uZW50fSBmcm9tICcuLi90YXNrcy9UYXNrc0NvbXBvbmVudCdcclxuaW1wb3J0IHtBbGxUYXNrc0NvbXBvbmVudH0gZnJvbSAnLi4vdGFza3MvQWxsVGFza3NDb21wb25lbnQnXHJcbmltcG9ydCB7UGF5bWVudHNDb21wb25lbnR9IGZyb20gJy4uL3BheW1lbnRzL1BheW1lbnRzQ29tcG9uZW50J1xyXG5pbXBvcnQge1Jlc2lkZW50c0NvbXBvbmVudH0gZnJvbSAnLi4vcmVzaWRlbnRzL1Jlc2lkZW50c0NvbXBvbmVudCdcclxuaW1wb3J0IHtDb21tdW5pdHlDb21wb25lbnR9IGZyb20gJy4uL2NvbW11bml0eS9Db21tdW5pdHlDb21wb25lbnQnXHJcbmltcG9ydCB7QnVzaW5lc3NSb290Q29tcG9uZW50fSBmcm9tICcuLi9hcGFydG1lbnQvQnVzaW5lc3NSb290Q29tcG9uZW50J1xyXG5pbXBvcnQge0NyZWF0ZVRhc2tDb21wb25lbnR9IGZyb20gJy4uL3Rhc2tzL0NyZWF0ZVRhc2tDb21wb25lbnQnXHJcbmltcG9ydCB7RWRpdFRhc2tDb21wb25lbnR9IGZyb20gJy4uL3Rhc2tzL0VkaXRUYXNrQ29tcG9uZW50J1xyXG5cclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7IHBhdGg6ICdhcHAvaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgbmFtZTogJ0hvbWUnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsIG5hbWU6ICdEYXNoYm9hcmQnLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCwgbmFtZTogJ0Fib3V0JyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgbmFtZTogJ0xvZ2luJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL3Byb2ZpbGUnLCBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnQsIG5hbWU6ICdQcm9maWxlJyB9LFxyXG4gICAgLy97IHBhdGg6ICdhcHAvYXBhcnRtZW50JywgY29tcG9uZW50OiBBcGFydG1lbnRDb21wb25lbnQsIGFzOiAnQXBhcnRtZW50JyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL3JlcXVlc3RzJywgY29tcG9uZW50OiBSZXF1ZXN0c0NvbXBvbmVudCwgbmFtZTogJ1JlcXVlc3RzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2FkbWlucmVxdWVzdCcsIGNvbXBvbmVudDogQWRtaW5SZXF1ZXN0Q29tcG9uZW50LCBuYW1lOiAnQWRtaW5yZXF1ZXN0JyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2NyZWF0ZXJlcXVlc3QnLCBjb21wb25lbnQ6IENyZWF0ZVJlcXVlc3RDb21wb25lbnQsIG5hbWU6ICdDcmVhdGVyZXF1ZXN0JyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL3Rhc2tzJywgY29tcG9uZW50OiBUYXNrc0NvbXBvbmVudCwgbmFtZTogJ1Rhc2tzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2FsbHRhc2tzJywgY29tcG9uZW50OiBBbGxUYXNrc0NvbXBvbmVudCwgbmFtZTogJ0FsbFRhc2tzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2NyZWF0ZXRhc2snLCBjb21wb25lbnQ6IENyZWF0ZVRhc2tDb21wb25lbnQsIG5hbWU6ICdDcmVhdGVUYXNrJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2VkaXR0YXNrJywgY29tcG9uZW50OiBFZGl0VGFza0NvbXBvbmVudCwgbmFtZTogJ0VkaXRUYXNrJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL3BheW1lbnQnLCBjb21wb25lbnQ6IFBheW1lbnRzQ29tcG9uZW50LCBuYW1lOiAnUGF5bWVudHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcmVzaWRlbnRzJywgY29tcG9uZW50OiBSZXNpZGVudHNDb21wb25lbnQsIG5hbWU6ICdSZXNpZGVudHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvY29tbXVuaXR5JywgY29tcG9uZW50OiBDb21tdW5pdHlDb21wb25lbnQsIG5hbWU6ICdDb21tdW5pdHknIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYnVzaW5lc3N1bml0cy8uLi4nLCBjb21wb25lbnQ6IEJ1c2luZXNzUm9vdENvbXBvbmVudCwgbmFtZTogJ0J1c2luZXNzUm9vdHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvKionLCByZWRpcmVjdFRvOiBbJ0Rhc2hib2FyZCddIH1cclxuXSlcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxib2R5PlxyXG4gICAgPGRpdiBtZGwgY2xhc3M9XCJkZW1vLWxheW91dCBtZGwtbGF5b3V0IG1kbC1qcy1sYXlvdXQgbWRsLWxheW91dC0tZml4ZWQtZHJhd2VyIG1kbC1sYXlvdXQtLWZpeGVkLWhlYWRlclwiPlxyXG4gICAgICA8YXBwLWhlYWRlciBtZGwgY2xhc3M9XCJkZW1vLWhlYWRlciBtZGwtbGF5b3V0X19oZWFkZXIgbWRsLWNvbG9yLS1ncmV5LTEwMCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj48L2FwcC1oZWFkZXI+XHJcbiAgICAgIDxhcHAtc2lkZWJhciBjbGFzcz1cImRlbW8tZHJhd2VyIG1kbC1sYXlvdXRfX2RyYXdlciBtZGwtY29sb3ItLWJsdWUtZ3JleS05MDAgbWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS01MFwiPlxyXG4gICAgICA8L2FwcC1zaWRlYmFyPlxyXG4gICAgICA8bWFpbiBjbGFzcz1cIm1kbC1sYXlvdXRfX2NvbnRlbnQgbWRsLWNvbG9yLS1ncmV5LTEwMFwiPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGF1dGgtcm91dGVyLW91dGxldD48L2F1dGgtcm91dGVyLW91dGxldD5cclxuICAgICAgICBcclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZlcnNpb249XCIxLjFcIiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgbGVmdDogLTEwMDBweDsgaGVpZ2h0OiAtMTAwMHB4O1wiPlxyXG4gICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgPG1hc2sgaWQ9XCJwaWVtYXNrXCIgbWFza0NvbnRlbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY3g9MC41IGN5PTAuNSByPTAuNDkgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgPGNpcmNsZSBjeD0wLjUgY3k9MC41IHI9MC40MCBmaWxsPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgPC9tYXNrPlxyXG4gICAgICAgICAgPGcgaWQ9XCJwaWVjaGFydFwiPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PTAuNSBjeT0wLjUgcj0wLjUgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0gMC41IDAuNSAwLjUgMCBBIDAuNSAwLjUgMCAwIDEgMC45NSAwLjI4IHpcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSlcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZGVmcz5cclxuICAgICAgPC9zdmc+XHJcbiAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDUwMCAyNTBcIiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgbGVmdDogLTEwMDBweDsgaGVpZ2h0OiAtMTAwMHB4O1wiPlxyXG4gICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgPGcgaWQ9XCJjaGFydFwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIkdyaWRsaW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxsaW5lIGZpbGw9XCIjODg4ODg4XCIgc3Ryb2tlPVwiIzg4ODg4OFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiB4MT1cIjBcIiB5MT1cIjI3LjNcIiB4Mj1cIjQ2OC4zXCIgeTI9XCIyNy4zXCIgLz5cclxuICAgICAgICAgICAgICA8bGluZSBmaWxsPVwiIzg4ODg4OFwiIHN0cm9rZT1cIiM4ODg4ODhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgeDE9XCIwXCIgeTE9XCI2Ni43XCIgeDI9XCI0NjguM1wiIHkyPVwiNjYuN1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIiM4ODg4ODhcIiBzdHJva2U9XCIjODg4ODg4XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiMFwiIHkxPVwiMTA1LjNcIiB4Mj1cIjQ2OC4zXCIgeTI9XCIxMDUuM1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIiM4ODg4ODhcIiBzdHJva2U9XCIjODg4ODg4XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiMFwiIHkxPVwiMTQ0LjdcIiB4Mj1cIjQ2OC4zXCIgeTI9XCIxNDQuN1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIiM4ODg4ODhcIiBzdHJva2U9XCIjODg4ODg4XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiMFwiIHkxPVwiMTg0LjNcIiB4Mj1cIjQ2OC4zXCIgeTI9XCIxODQuM1wiIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJOdW1iZXJzXCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNDg1IDI5LjMzMzMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjUwMDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA0ODUgNjkpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjQwMDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA0ODUgMTA5LjMzMzMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjMwMDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA0ODUgMTQ5KVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj4yMDA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNDg1IDE4OC4zMzMzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj4xMDA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgMCAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+MTwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA3OCAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+MjwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAxNTQuNjY2NyAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+MzwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAyMzIuMTY2NyAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+NDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAzMDkgMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjU8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgMzg2LjY2NjcgMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjY8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNDY0LjMzMzMgMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjc8L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJMYXllcl81XCI+XHJcbiAgICAgICAgICAgICAgPHBvbHlnb24gb3BhY2l0eT1cIjAuMzZcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgcG9pbnRzPVwiMCwyMjMuMyA0OCwxMzguNSAxNTQuNywxNjkgMjExLDg4LjVcclxuICAgICAgICAgICAgICAyOTQuNSw4MC41IDM4MCwxNjUuMiA0MzcsNzUuNSA0NjkuNSwyMjMuMyBcdFwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIkxheWVyXzRcIj5cclxuICAgICAgICAgICAgICA8cG9seWdvbiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgcG9pbnRzPVwiNDY5LjMsMjIyLjcgMSwyMjIuNyA0OC43LDE2Ni43IDE1NS43LDE4OC4zIDIxMiwxMzIuN1xyXG4gICAgICAgICAgICAgIDI5Ni43LDEyOCAzODAuNywxODQuMyA0MzYuNywxMjUgXHRcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2RlZnM+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICBcclxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmdldG1kbC5pby8xLjEuMy9tYXRlcmlhbC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgIDxzaW1wbGUtbm90aWZpY2F0aW9ucyBbb3B0aW9uc109XCJvcHRpb25zXCI+PC9zaW1wbGUtbm90aWZpY2F0aW9ucz4gIFxyXG4gIDwvYm9keT5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBTaWRlYmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIE1ETCwgQXV0aFJvdXRlck91dGxldCxTaW1wbGVOb3RpZmljYXRpb25zQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0FVVEhfUFJPVklERVJTLE5vdGlmaWNhdGlvbnNTZXJ2aWNlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgICAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA1MDAwLFxyXG4gICAgICAgICAgbGFzdE9uQm90dG9tOiB0cnVlLFxyXG4gICAgICAgICAgY2xpY2tUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgbWF4TGVuZ3RoOiAwLFxyXG4gICAgICAgICAgbWF4U3RhY2s6IDcsXHJcbiAgICAgICAgICBzaG93UHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWVcclxuICAgIH07XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
