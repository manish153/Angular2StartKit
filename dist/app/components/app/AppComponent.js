System.register(['@angular/core', '@angular/router-deprecated', 'angular2-jwt', '../home/HomeComponent', '../about/AboutComponent', './HeaderComponent', '../login/LoginComponent', './SidebarComponent', './DashboardComponent', './MaterialDesignLiteUpgradeElement', './AuthRouterOutlet', '../profile/ProfileComponent', '../requests/RequestsComponent', '../requests/AdminRequestComponent', '../requests/CreateRequestComponent', '../tasks/TasksComponent', '../tasks/AllTasksComponent', '../payments/PaymentsComponent', '../residents/ResidentsComponent', '../community/CommunityComponent', '../apartment/BusinessRootComponent', '../tasks/CreateTaskComponent', '../tasks/EditTaskComponent'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, angular2_jwt_1, HomeComponent_1, AboutComponent_1, HeaderComponent_1, LoginComponent_1, SidebarComponent_1, DashboardComponent_1, MaterialDesignLiteUpgradeElement_1, AuthRouterOutlet_1, ProfileComponent_1, RequestsComponent_1, AdminRequestComponent_1, CreateRequestComponent_1, TasksComponent_1, AllTasksComponent_1, PaymentsComponent_1, ResidentsComponent_1, CommunityComponent_1, BusinessRootComponent_1, CreateTaskComponent_1, EditTaskComponent_1;
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
                }
            };
            AppComponent = __decorate([
                router_deprecated_1.RouteConfig([
                    { path: 'app/home', component: HomeComponent_1.HomeComponent, as: 'Home' },
                    { path: 'app/dashboard', component: DashboardComponent_1.DashboardComponent, as: 'Dashboard', useAsDefault: true },
                    { path: 'app/about', component: AboutComponent_1.AboutComponent, as: 'About' },
                    { path: 'app/login', component: LoginComponent_1.LoginComponent, as: 'Login' },
                    { path: 'app/profile', component: ProfileComponent_1.ProfileComponent, as: 'Profile' },
                    //{ path: 'app/apartment', component: ApartmentComponent, as: 'Apartment' },
                    { path: 'app/requests', component: RequestsComponent_1.RequestsComponent, as: 'Requests' },
                    { path: 'app/adminrequest', component: AdminRequestComponent_1.AdminRequestComponent, as: 'Adminrequest' },
                    { path: 'app/createrequest', component: CreateRequestComponent_1.CreateRequestComponent, as: 'Createrequest' },
                    { path: 'app/tasks', component: TasksComponent_1.TasksComponent, as: 'Tasks' },
                    { path: 'app/alltasks', component: AllTasksComponent_1.AllTasksComponent, as: 'AllTasks' },
                    { path: 'app/createtask', component: CreateTaskComponent_1.CreateTaskComponent, as: 'CreateTask' },
                    { path: 'app/edittask', component: EditTaskComponent_1.EditTaskComponent, as: 'EditTask' },
                    { path: 'app/payment', component: PaymentsComponent_1.PaymentsComponent, as: 'Payments' },
                    { path: 'app/residents', component: ResidentsComponent_1.ResidentsComponent, as: 'Residents' },
                    { path: 'app/community', component: CommunityComponent_1.CommunityComponent, as: 'Community' },
                    { path: 'app/businessunits/...', component: BusinessRootComponent_1.BusinessRootComponent, as: 'BusinessRoots' },
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
  </body>

    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES, SidebarComponent_1.SidebarComponent, HeaderComponent_1.HeaderComponent, MaterialDesignLiteUpgradeElement_1.MDL, AuthRouterOutlet_1.AuthRouterOutlet],
                    providers: [angular2_jwt_1.AUTH_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3SEE7Z0JBRUU7Z0JBQWdCLENBQUM7WUFFbkIsQ0FBQztZQS9GRDtnQkFBQywrQkFBVyxDQUFDO29CQUNULEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkJBQWEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO29CQUMxRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQztvQkFDNUYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwrQkFBYyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7b0JBQzdELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO29CQUM3RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG1DQUFnQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUU7b0JBQ25FLDRFQUE0RTtvQkFDNUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFO29CQUN0RSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsNkNBQXFCLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRTtvQkFDbEYsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLCtDQUFzQixFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUU7b0JBQ3JGLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO29CQUM3RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7b0JBQ3RFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSx5Q0FBbUIsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFO29CQUM1RSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7b0JBQ3RFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRTtvQkFDckUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1Q0FBa0IsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFO29CQUN6RSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUU7b0JBQ3pFLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSw2Q0FBcUIsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFO29CQUN4RixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUU7aUJBQ2hELENBQUM7Z0JBQ0QsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRFA7b0JBQ0QsVUFBVSxFQUFFLENBQUMscUNBQWlCLEVBQUUsbUNBQWdCLEVBQUUsaUNBQWUsRUFBRSxzQ0FBRyxFQUFFLG1DQUFnQixDQUFDO29CQUN6RixTQUFTLEVBQUUsQ0FBQyw2QkFBYyxDQUFDO2lCQUM5QixDQUFDOzs0QkFBQTtZQUdGLHVDQUlDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL0FwcENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7QXV0aEh0dHAsIEF1dGhDb25maWcsIHRva2VuTm90RXhwaXJlZCwgQVVUSF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XHJcblxyXG5cclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi9ob21lL0hvbWVDb21wb25lbnQnXHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4uL2Fib3V0L0Fib3V0Q29tcG9uZW50J1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9IZWFkZXJDb21wb25lbnQnXHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4uL2xvZ2luL0xvZ2luQ29tcG9uZW50J1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSdcclxuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuL1NpZGViYXJDb21wb25lbnQnXHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL0Rhc2hib2FyZENvbXBvbmVudCdcclxuaW1wb3J0IHtNREx9IGZyb20gJy4vTWF0ZXJpYWxEZXNpZ25MaXRlVXBncmFkZUVsZW1lbnQnXHJcbmltcG9ydCB7QXV0aFJvdXRlck91dGxldH0gZnJvbSAnLi9BdXRoUm91dGVyT3V0bGV0J1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gJy4uL3Byb2ZpbGUvUHJvZmlsZUNvbXBvbmVudCdcclxuaW1wb3J0IHtBcGFydG1lbnRDb21wb25lbnR9IGZyb20gJy4uL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQnXHJcbmltcG9ydCB7UmVxdWVzdHNDb21wb25lbnR9IGZyb20gJy4uL3JlcXVlc3RzL1JlcXVlc3RzQ29tcG9uZW50J1xyXG5pbXBvcnQge0FkbWluUmVxdWVzdENvbXBvbmVudH0gZnJvbSAnLi4vcmVxdWVzdHMvQWRtaW5SZXF1ZXN0Q29tcG9uZW50J1xyXG5pbXBvcnQge0NyZWF0ZVJlcXVlc3RDb21wb25lbnR9IGZyb20gJy4uL3JlcXVlc3RzL0NyZWF0ZVJlcXVlc3RDb21wb25lbnQnXHJcbmltcG9ydCB7VGFza3NDb21wb25lbnR9IGZyb20gJy4uL3Rhc2tzL1Rhc2tzQ29tcG9uZW50J1xyXG5pbXBvcnQge0FsbFRhc2tzQ29tcG9uZW50fSBmcm9tICcuLi90YXNrcy9BbGxUYXNrc0NvbXBvbmVudCdcclxuaW1wb3J0IHtQYXltZW50c0NvbXBvbmVudH0gZnJvbSAnLi4vcGF5bWVudHMvUGF5bWVudHNDb21wb25lbnQnXHJcbmltcG9ydCB7UmVzaWRlbnRzQ29tcG9uZW50fSBmcm9tICcuLi9yZXNpZGVudHMvUmVzaWRlbnRzQ29tcG9uZW50J1xyXG5pbXBvcnQge0NvbW11bml0eUNvbXBvbmVudH0gZnJvbSAnLi4vY29tbXVuaXR5L0NvbW11bml0eUNvbXBvbmVudCdcclxuaW1wb3J0IHtCdXNpbmVzc1Jvb3RDb21wb25lbnR9IGZyb20gJy4uL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQnXHJcbmltcG9ydCB7Q3JlYXRlVGFza0NvbXBvbmVudH0gZnJvbSAnLi4vdGFza3MvQ3JlYXRlVGFza0NvbXBvbmVudCdcclxuaW1wb3J0IHtFZGl0VGFza0NvbXBvbmVudH0gZnJvbSAnLi4vdGFza3MvRWRpdFRhc2tDb21wb25lbnQnXHJcblxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJ2FwcC9ob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBhczogJ0hvbWUnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsIGFzOiAnRGFzaGJvYXJkJywgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuICAgIHsgcGF0aDogJ2FwcC9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQsIGFzOiAnQWJvdXQnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LCBhczogJ0xvZ2luJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL3Byb2ZpbGUnLCBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnQsIGFzOiAnUHJvZmlsZScgfSxcclxuICAgIC8veyBwYXRoOiAnYXBwL2FwYXJ0bWVudCcsIGNvbXBvbmVudDogQXBhcnRtZW50Q29tcG9uZW50LCBhczogJ0FwYXJ0bWVudCcgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9yZXF1ZXN0cycsIGNvbXBvbmVudDogUmVxdWVzdHNDb21wb25lbnQsIGFzOiAnUmVxdWVzdHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYWRtaW5yZXF1ZXN0JywgY29tcG9uZW50OiBBZG1pblJlcXVlc3RDb21wb25lbnQsIGFzOiAnQWRtaW5yZXF1ZXN0JyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2NyZWF0ZXJlcXVlc3QnLCBjb21wb25lbnQ6IENyZWF0ZVJlcXVlc3RDb21wb25lbnQsIGFzOiAnQ3JlYXRlcmVxdWVzdCcgfSxcclxuICAgIHsgcGF0aDogJ2FwcC90YXNrcycsIGNvbXBvbmVudDogVGFza3NDb21wb25lbnQsIGFzOiAnVGFza3MnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYWxsdGFza3MnLCBjb21wb25lbnQ6IEFsbFRhc2tzQ29tcG9uZW50LCBhczogJ0FsbFRhc2tzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2NyZWF0ZXRhc2snLCBjb21wb25lbnQ6IENyZWF0ZVRhc2tDb21wb25lbnQsIGFzOiAnQ3JlYXRlVGFzaycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9lZGl0dGFzaycsIGNvbXBvbmVudDogRWRpdFRhc2tDb21wb25lbnQsIGFzOiAnRWRpdFRhc2snIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcGF5bWVudCcsIGNvbXBvbmVudDogUGF5bWVudHNDb21wb25lbnQsIGFzOiAnUGF5bWVudHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcmVzaWRlbnRzJywgY29tcG9uZW50OiBSZXNpZGVudHNDb21wb25lbnQsIGFzOiAnUmVzaWRlbnRzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2NvbW11bml0eScsIGNvbXBvbmVudDogQ29tbXVuaXR5Q29tcG9uZW50LCBhczogJ0NvbW11bml0eScgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9idXNpbmVzc3VuaXRzLy4uLicsIGNvbXBvbmVudDogQnVzaW5lc3NSb290Q29tcG9uZW50LCBhczogJ0J1c2luZXNzUm9vdHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvKionLCByZWRpcmVjdFRvOiBbJ0Rhc2hib2FyZCddIH1cclxuXSlcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxib2R5PlxyXG4gICAgPGRpdiBtZGwgY2xhc3M9XCJkZW1vLWxheW91dCBtZGwtbGF5b3V0IG1kbC1qcy1sYXlvdXQgbWRsLWxheW91dC0tZml4ZWQtZHJhd2VyIG1kbC1sYXlvdXQtLWZpeGVkLWhlYWRlclwiPlxyXG4gICAgICA8YXBwLWhlYWRlciBtZGwgY2xhc3M9XCJkZW1vLWhlYWRlciBtZGwtbGF5b3V0X19oZWFkZXIgbWRsLWNvbG9yLS1ncmV5LTEwMCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj48L2FwcC1oZWFkZXI+XHJcbiAgICAgIDxhcHAtc2lkZWJhciBjbGFzcz1cImRlbW8tZHJhd2VyIG1kbC1sYXlvdXRfX2RyYXdlciBtZGwtY29sb3ItLWJsdWUtZ3JleS05MDAgbWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS01MFwiPlxyXG4gICAgICA8L2FwcC1zaWRlYmFyPlxyXG4gICAgICA8bWFpbiBjbGFzcz1cIm1kbC1sYXlvdXRfX2NvbnRlbnQgbWRsLWNvbG9yLS1ncmV5LTEwMFwiPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGF1dGgtcm91dGVyLW91dGxldD48L2F1dGgtcm91dGVyLW91dGxldD5cclxuICAgICAgICBcclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZlcnNpb249XCIxLjFcIiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgbGVmdDogLTEwMDBweDsgaGVpZ2h0OiAtMTAwMHB4O1wiPlxyXG4gICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgPG1hc2sgaWQ9XCJwaWVtYXNrXCIgbWFza0NvbnRlbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY3g9MC41IGN5PTAuNSByPTAuNDkgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgPGNpcmNsZSBjeD0wLjUgY3k9MC41IHI9MC40MCBmaWxsPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgPC9tYXNrPlxyXG4gICAgICAgICAgPGcgaWQ9XCJwaWVjaGFydFwiPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PTAuNSBjeT0wLjUgcj0wLjUgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0gMC41IDAuNSAwLjUgMCBBIDAuNSAwLjUgMCAwIDEgMC45NSAwLjI4IHpcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSlcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZGVmcz5cclxuICAgICAgPC9zdmc+XHJcbiAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDUwMCAyNTBcIiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgbGVmdDogLTEwMDBweDsgaGVpZ2h0OiAtMTAwMHB4O1wiPlxyXG4gICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgPGcgaWQ9XCJjaGFydFwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIkdyaWRsaW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxsaW5lIGZpbGw9XCIjODg4ODg4XCIgc3Ryb2tlPVwiIzg4ODg4OFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiB4MT1cIjBcIiB5MT1cIjI3LjNcIiB4Mj1cIjQ2OC4zXCIgeTI9XCIyNy4zXCIgLz5cclxuICAgICAgICAgICAgICA8bGluZSBmaWxsPVwiIzg4ODg4OFwiIHN0cm9rZT1cIiM4ODg4ODhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgeDE9XCIwXCIgeTE9XCI2Ni43XCIgeDI9XCI0NjguM1wiIHkyPVwiNjYuN1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIiM4ODg4ODhcIiBzdHJva2U9XCIjODg4ODg4XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiMFwiIHkxPVwiMTA1LjNcIiB4Mj1cIjQ2OC4zXCIgeTI9XCIxMDUuM1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIiM4ODg4ODhcIiBzdHJva2U9XCIjODg4ODg4XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiMFwiIHkxPVwiMTQ0LjdcIiB4Mj1cIjQ2OC4zXCIgeTI9XCIxNDQuN1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIiM4ODg4ODhcIiBzdHJva2U9XCIjODg4ODg4XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiMFwiIHkxPVwiMTg0LjNcIiB4Mj1cIjQ2OC4zXCIgeTI9XCIxODQuM1wiIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJOdW1iZXJzXCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNDg1IDI5LjMzMzMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjUwMDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA0ODUgNjkpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjQwMDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA0ODUgMTA5LjMzMzMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjMwMDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA0ODUgMTQ5KVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj4yMDA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNDg1IDE4OC4zMzMzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj4xMDA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgMCAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+MTwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA3OCAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+MjwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAxNTQuNjY2NyAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+MzwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAyMzIuMTY2NyAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+NDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAzMDkgMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjU8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgMzg2LjY2NjcgMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjY8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNDY0LjMzMzMgMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjc8L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJMYXllcl81XCI+XHJcbiAgICAgICAgICAgICAgPHBvbHlnb24gb3BhY2l0eT1cIjAuMzZcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgcG9pbnRzPVwiMCwyMjMuMyA0OCwxMzguNSAxNTQuNywxNjkgMjExLDg4LjVcclxuICAgICAgICAgICAgICAyOTQuNSw4MC41IDM4MCwxNjUuMiA0MzcsNzUuNSA0NjkuNSwyMjMuMyBcdFwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIkxheWVyXzRcIj5cclxuICAgICAgICAgICAgICA8cG9seWdvbiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgcG9pbnRzPVwiNDY5LjMsMjIyLjcgMSwyMjIuNyA0OC43LDE2Ni43IDE1NS43LDE4OC4zIDIxMiwxMzIuN1xyXG4gICAgICAgICAgICAgIDI5Ni43LDEyOCAzODAuNywxODQuMyA0MzYuNywxMjUgXHRcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2RlZnM+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICBcclxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmdldG1kbC5pby8xLjEuMy9tYXRlcmlhbC5taW4uanNcIj48L3NjcmlwdD5cclxuICA8L2JvZHk+XHJcblxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgU2lkZWJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBNREwsIEF1dGhSb3V0ZXJPdXRsZXRdLFxyXG4gICAgcHJvdmlkZXJzOiBbQVVUSF9QUk9WSURFUlNdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
