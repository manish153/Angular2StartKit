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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3SEE7Z0JBRUU7Z0JBQWdCLENBQUM7WUFFbkIsQ0FBQztZQS9GRDtnQkFBQywrQkFBVyxDQUFDO29CQUNULEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkJBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO29CQUM1RCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQztvQkFDOUYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwrQkFBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7b0JBQy9ELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO29CQUMvRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG1DQUFnQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7b0JBQ3JFLDRFQUE0RTtvQkFDNUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO29CQUN4RSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsNkNBQXFCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtvQkFDcEYsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLCtDQUFzQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7b0JBQ3ZGLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO29CQUMvRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0JBQ3hFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSx5Q0FBbUIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO29CQUM5RSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0JBQ3hFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtvQkFDdkUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1Q0FBa0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO29CQUMzRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7b0JBQzNFLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSw2Q0FBcUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO29CQUMxRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUU7aUJBQ2hELENBQUM7Z0JBQ0QsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRFA7b0JBQ0QsVUFBVSxFQUFFLENBQUMscUNBQWlCLEVBQUUsbUNBQWdCLEVBQUUsaUNBQWUsRUFBRSxzQ0FBRyxFQUFFLG1DQUFnQixDQUFDO29CQUN6RixTQUFTLEVBQUUsQ0FBQyw2QkFBYyxDQUFDO2lCQUM5QixDQUFDOzs0QkFBQTtZQUdGLHVDQUlDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL0FwcENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7QXV0aEh0dHAsIEF1dGhDb25maWcsIHRva2VuTm90RXhwaXJlZCwgQVVUSF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XHJcblxyXG5cclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi9ob21lL0hvbWVDb21wb25lbnQnXHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4uL2Fib3V0L0Fib3V0Q29tcG9uZW50J1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9IZWFkZXJDb21wb25lbnQnXHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4uL2xvZ2luL0xvZ2luQ29tcG9uZW50J1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSdcclxuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuL1NpZGViYXJDb21wb25lbnQnXHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL0Rhc2hib2FyZENvbXBvbmVudCdcclxuaW1wb3J0IHtNREx9IGZyb20gJy4vTWF0ZXJpYWxEZXNpZ25MaXRlVXBncmFkZUVsZW1lbnQnXHJcbmltcG9ydCB7QXV0aFJvdXRlck91dGxldH0gZnJvbSAnLi9BdXRoUm91dGVyT3V0bGV0J1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gJy4uL3Byb2ZpbGUvUHJvZmlsZUNvbXBvbmVudCdcclxuaW1wb3J0IHtBcGFydG1lbnRDb21wb25lbnR9IGZyb20gJy4uL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQnXHJcbmltcG9ydCB7UmVxdWVzdHNDb21wb25lbnR9IGZyb20gJy4uL3JlcXVlc3RzL1JlcXVlc3RzQ29tcG9uZW50J1xyXG5pbXBvcnQge0FkbWluUmVxdWVzdENvbXBvbmVudH0gZnJvbSAnLi4vcmVxdWVzdHMvQWRtaW5SZXF1ZXN0Q29tcG9uZW50J1xyXG5pbXBvcnQge0NyZWF0ZVJlcXVlc3RDb21wb25lbnR9IGZyb20gJy4uL3JlcXVlc3RzL0NyZWF0ZVJlcXVlc3RDb21wb25lbnQnXHJcbmltcG9ydCB7VGFza3NDb21wb25lbnR9IGZyb20gJy4uL3Rhc2tzL1Rhc2tzQ29tcG9uZW50J1xyXG5pbXBvcnQge0FsbFRhc2tzQ29tcG9uZW50fSBmcm9tICcuLi90YXNrcy9BbGxUYXNrc0NvbXBvbmVudCdcclxuaW1wb3J0IHtQYXltZW50c0NvbXBvbmVudH0gZnJvbSAnLi4vcGF5bWVudHMvUGF5bWVudHNDb21wb25lbnQnXHJcbmltcG9ydCB7UmVzaWRlbnRzQ29tcG9uZW50fSBmcm9tICcuLi9yZXNpZGVudHMvUmVzaWRlbnRzQ29tcG9uZW50J1xyXG5pbXBvcnQge0NvbW11bml0eUNvbXBvbmVudH0gZnJvbSAnLi4vY29tbXVuaXR5L0NvbW11bml0eUNvbXBvbmVudCdcclxuaW1wb3J0IHtCdXNpbmVzc1Jvb3RDb21wb25lbnR9IGZyb20gJy4uL2FwYXJ0bWVudC9CdXNpbmVzc1Jvb3RDb21wb25lbnQnXHJcbmltcG9ydCB7Q3JlYXRlVGFza0NvbXBvbmVudH0gZnJvbSAnLi4vdGFza3MvQ3JlYXRlVGFza0NvbXBvbmVudCdcclxuaW1wb3J0IHtFZGl0VGFza0NvbXBvbmVudH0gZnJvbSAnLi4vdGFza3MvRWRpdFRhc2tDb21wb25lbnQnXHJcblxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJ2FwcC9ob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBuYW1lOiAnSG9tZScgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9kYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCwgbmFtZTogJ0Rhc2hib2FyZCcsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50LCBuYW1lOiAnQWJvdXQnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LCBuYW1lOiAnTG9naW4nIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcHJvZmlsZScsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCwgbmFtZTogJ1Byb2ZpbGUnIH0sXHJcbiAgICAvL3sgcGF0aDogJ2FwcC9hcGFydG1lbnQnLCBjb21wb25lbnQ6IEFwYXJ0bWVudENvbXBvbmVudCwgYXM6ICdBcGFydG1lbnQnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcmVxdWVzdHMnLCBjb21wb25lbnQ6IFJlcXVlc3RzQ29tcG9uZW50LCBuYW1lOiAnUmVxdWVzdHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYWRtaW5yZXF1ZXN0JywgY29tcG9uZW50OiBBZG1pblJlcXVlc3RDb21wb25lbnQsIG5hbWU6ICdBZG1pbnJlcXVlc3QnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvY3JlYXRlcmVxdWVzdCcsIGNvbXBvbmVudDogQ3JlYXRlUmVxdWVzdENvbXBvbmVudCwgbmFtZTogJ0NyZWF0ZXJlcXVlc3QnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvdGFza3MnLCBjb21wb25lbnQ6IFRhc2tzQ29tcG9uZW50LCBuYW1lOiAnVGFza3MnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYWxsdGFza3MnLCBjb21wb25lbnQ6IEFsbFRhc2tzQ29tcG9uZW50LCBuYW1lOiAnQWxsVGFza3MnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvY3JlYXRldGFzaycsIGNvbXBvbmVudDogQ3JlYXRlVGFza0NvbXBvbmVudCwgbmFtZTogJ0NyZWF0ZVRhc2snIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvZWRpdHRhc2snLCBjb21wb25lbnQ6IEVkaXRUYXNrQ29tcG9uZW50LCBuYW1lOiAnRWRpdFRhc2snIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcGF5bWVudCcsIGNvbXBvbmVudDogUGF5bWVudHNDb21wb25lbnQsIG5hbWU6ICdQYXltZW50cycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9yZXNpZGVudHMnLCBjb21wb25lbnQ6IFJlc2lkZW50c0NvbXBvbmVudCwgbmFtZTogJ1Jlc2lkZW50cycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9jb21tdW5pdHknLCBjb21wb25lbnQ6IENvbW11bml0eUNvbXBvbmVudCwgbmFtZTogJ0NvbW11bml0eScgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9idXNpbmVzc3VuaXRzLy4uLicsIGNvbXBvbmVudDogQnVzaW5lc3NSb290Q29tcG9uZW50LCBuYW1lOiAnQnVzaW5lc3NSb290cycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC8qKicsIHJlZGlyZWN0VG86IFsnRGFzaGJvYXJkJ10gfVxyXG5dKVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJvZHk+XHJcbiAgICA8ZGl2IG1kbCBjbGFzcz1cImRlbW8tbGF5b3V0IG1kbC1sYXlvdXQgbWRsLWpzLWxheW91dCBtZGwtbGF5b3V0LS1maXhlZC1kcmF3ZXIgbWRsLWxheW91dC0tZml4ZWQtaGVhZGVyXCI+XHJcbiAgICAgIDxhcHAtaGVhZGVyIG1kbCBjbGFzcz1cImRlbW8taGVhZGVyIG1kbC1sYXlvdXRfX2hlYWRlciBtZGwtY29sb3ItLWdyZXktMTAwIG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPjwvYXBwLWhlYWRlcj5cclxuICAgICAgPGFwcC1zaWRlYmFyIGNsYXNzPVwiZGVtby1kcmF3ZXIgbWRsLWxheW91dF9fZHJhd2VyIG1kbC1jb2xvci0tYmx1ZS1ncmV5LTkwMCBtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTUwXCI+XHJcbiAgICAgIDwvYXBwLXNpZGViYXI+XHJcbiAgICAgIDxtYWluIGNsYXNzPVwibWRsLWxheW91dF9fY29udGVudCBtZGwtY29sb3ItLWdyZXktMTAwXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8YXV0aC1yb3V0ZXItb3V0bGV0PjwvYXV0aC1yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmVyc2lvbj1cIjEuMVwiIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyBsZWZ0OiAtMTAwMHB4OyBoZWlnaHQ6IC0xMDAwcHg7XCI+XHJcbiAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICA8bWFzayBpZD1cInBpZW1hc2tcIiBtYXNrQ29udGVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgPGNpcmNsZSBjeD0wLjUgY3k9MC41IHI9MC40OSBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PTAuNSBjeT0wLjUgcj0wLjQwIGZpbGw9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICA8ZyBpZD1cInBpZWNoYXJ0XCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY3g9MC41IGN5PTAuNSByPTAuNSAvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTSAwLjUgMC41IDAuNSAwIEEgMC41IDAuNSAwIDAgMSAwLjk1IDAuMjggelwiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KVwiIC8+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9kZWZzPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNTAwIDI1MFwiIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyBsZWZ0OiAtMTAwMHB4OyBoZWlnaHQ6IC0xMDAwcHg7XCI+XHJcbiAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICA8ZyBpZD1cImNoYXJ0XCI+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiR3JpZGxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIiM4ODg4ODhcIiBzdHJva2U9XCIjODg4ODg4XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiMFwiIHkxPVwiMjcuM1wiIHgyPVwiNDY4LjNcIiB5Mj1cIjI3LjNcIiAvPlxyXG4gICAgICAgICAgICAgIDxsaW5lIGZpbGw9XCIjODg4ODg4XCIgc3Ryb2tlPVwiIzg4ODg4OFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiB4MT1cIjBcIiB5MT1cIjY2LjdcIiB4Mj1cIjQ2OC4zXCIgeTI9XCI2Ni43XCIgLz5cclxuICAgICAgICAgICAgICA8bGluZSBmaWxsPVwiIzg4ODg4OFwiIHN0cm9rZT1cIiM4ODg4ODhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgeDE9XCIwXCIgeTE9XCIxMDUuM1wiIHgyPVwiNDY4LjNcIiB5Mj1cIjEwNS4zXCIgLz5cclxuICAgICAgICAgICAgICA8bGluZSBmaWxsPVwiIzg4ODg4OFwiIHN0cm9rZT1cIiM4ODg4ODhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgeDE9XCIwXCIgeTE9XCIxNDQuN1wiIHgyPVwiNDY4LjNcIiB5Mj1cIjE0NC43XCIgLz5cclxuICAgICAgICAgICAgICA8bGluZSBmaWxsPVwiIzg4ODg4OFwiIHN0cm9rZT1cIiM4ODg4ODhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgeDE9XCIwXCIgeTE9XCIxODQuM1wiIHgyPVwiNDY4LjNcIiB5Mj1cIjE4NC4zXCIgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIk51bWJlcnNcIj5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA0ODUgMjkuMzMzMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+NTAwPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDQ4NSA2OSlcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+NDAwPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDQ4NSAxMDkuMzMzMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+MzAwPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDQ4NSAxNDkpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjIwMDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA0ODUgMTg4LjMzMzMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjEwMDwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAwIDI0OS4wMDAzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj4xPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDc4IDI0OS4wMDAzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj4yPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDE1NC42NjY3IDI0OS4wMDAzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj4zPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDIzMi4xNjY3IDI0OS4wMDAzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj40PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDMwOSAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+NTwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSAzODYuNjY2NyAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+NjwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgMSA0NjQuMzMzMyAyNDkuMDAwMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+NzwvdGV4dD5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIkxheWVyXzVcIj5cclxuICAgICAgICAgICAgICA8cG9seWdvbiBvcGFjaXR5PVwiMC4zNlwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiBwb2ludHM9XCIwLDIyMy4zIDQ4LDEzOC41IDE1NC43LDE2OSAyMTEsODguNVxyXG4gICAgICAgICAgICAgIDI5NC41LDgwLjUgMzgwLDE2NS4yIDQzNyw3NS41IDQ2OS41LDIyMy4zIFx0XCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiTGF5ZXJfNFwiPlxyXG4gICAgICAgICAgICAgIDxwb2x5Z29uIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiBwb2ludHM9XCI0NjkuMywyMjIuNyAxLDIyMi43IDQ4LjcsMTY2LjcgMTU1LjcsMTg4LjMgMjEyLDEzMi43XHJcbiAgICAgICAgICAgICAgMjk2LjcsMTI4IDM4MC43LDE4NC4zIDQzNi43LDEyNSBcdFwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZGVmcz5cclxuICAgICAgPC9zdmc+XHJcbiAgICAgIFxyXG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuZ2V0bWRsLmlvLzEuMS4zL21hdGVyaWFsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gIDwvYm9keT5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBTaWRlYmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIE1ETCwgQXV0aFJvdXRlck91dGxldF0sXHJcbiAgICBwcm92aWRlcnM6IFtBVVRIX1BST1ZJREVSU11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
