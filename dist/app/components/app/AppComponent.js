System.register(['angular2/core', 'angular2/router', 'angular2-jwt', '../home/HomeComponent', '../about/AboutComponent', './HeaderComponent', '../login/LoginComponent', './SidebarComponent', './DashboardComponent', './MaterialDesignLiteUpgradeElement', './AuthRouterOutlet', '../profile/ProfileComponent', '../requests/RequestsComponent', '../tasks/TasksComponent', '../tasks/AllTasksComponent', '../payments/PaymentsComponent', '../residents/ResidentsComponent', '../community/CommunityComponent', '../apartment/BusinessRootComponent', '../tasks/CreateTaskComponent', '../tasks/EditTaskComponent'], function(exports_1, context_1) {
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
    var core_1, router_1, angular2_jwt_1, HomeComponent_1, AboutComponent_1, HeaderComponent_1, LoginComponent_1, SidebarComponent_1, DashboardComponent_1, MaterialDesignLiteUpgradeElement_1, AuthRouterOutlet_1, ProfileComponent_1, RequestsComponent_1, TasksComponent_1, AllTasksComponent_1, PaymentsComponent_1, ResidentsComponent_1, CommunityComponent_1, BusinessRootComponent_1, CreateTaskComponent_1, EditTaskComponent_1;
    var AppComponent;
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
                router_1.RouteConfig([
                    { path: 'app/home', component: HomeComponent_1.HomeComponent, as: 'Home' },
                    { path: 'app/dashboard', component: DashboardComponent_1.DashboardComponent, as: 'Dashboard', useAsDefault: true },
                    { path: 'app/about', component: AboutComponent_1.AboutComponent, as: 'About' },
                    { path: 'app/login', component: LoginComponent_1.LoginComponent, as: 'Login' },
                    { path: 'app/profile', component: ProfileComponent_1.ProfileComponent, as: 'Profile' },
                    //{ path: 'app/apartment', component: ApartmentComponent, as: 'Apartment' },
                    { path: 'app/requests', component: RequestsComponent_1.RequestsComponent, as: 'Requests' },
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
                    /*template: '<router-outlet></router-outlet>',*/
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
                    directives: [router_1.ROUTER_DIRECTIVES, SidebarComponent_1.SidebarComponent, HeaderComponent_1.HeaderComponent, MaterialDesignLiteUpgradeElement_1.MDL, AuthRouterOutlet_1.AuthRouterOutlet],
                    providers: [angular2_jwt_1.AUTH_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzSEE7Z0JBRUU7Z0JBQWdCLENBQUM7WUFFbkIsQ0FBQztZQS9GRDtnQkFBQyxvQkFBVyxDQUFDO29CQUNULEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkJBQWEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO29CQUMxRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQztvQkFDNUYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwrQkFBYyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7b0JBQzdELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO29CQUM3RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG1DQUFnQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUU7b0JBQ25FLDRFQUE0RTtvQkFDNUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFO29CQUN0RSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLCtCQUFjLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRTtvQkFDN0QsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFO29CQUN0RSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUseUNBQW1CLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRTtvQkFDNUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFO29CQUN0RSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7b0JBQ3JFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsdUNBQWtCLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRTtvQkFDekUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1Q0FBa0IsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFO29CQUN6RSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsNkNBQXFCLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRTtvQkFDeEYsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2lCQUNoRCxDQUFDO2dCQUNELGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLGdEQUFnRDtvQkFDbEQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0VQO29CQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLG1DQUFnQixFQUFFLGlDQUFlLEVBQUUsc0NBQUcsRUFBRSxtQ0FBZ0IsQ0FBQztvQkFDekYsU0FBUyxFQUFFLENBQUMsNkJBQWMsQ0FBQztpQkFDOUIsQ0FBQzs7NEJBQUE7WUFHRix1Q0FJQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIENhbkFjdGl2YXRlfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0F1dGhIdHRwLCBBdXRoQ29uZmlnLCB0b2tlbk5vdEV4cGlyZWQsIEFVVEhfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xyXG5cclxuXHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vaG9tZS9Ib21lQ29tcG9uZW50J1xyXG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tICcuLi9hYm91dC9BYm91dENvbXBvbmVudCdcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vSGVhZGVyQ29tcG9uZW50J1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi9Mb2dpbkNvbXBvbmVudCdcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2UnXHJcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSAnLi9TaWRlYmFyQ29tcG9uZW50J1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9EYXNoYm9hcmRDb21wb25lbnQnXHJcbmltcG9ydCB7TURMfSBmcm9tICcuL01hdGVyaWFsRGVzaWduTGl0ZVVwZ3JhZGVFbGVtZW50J1xyXG5pbXBvcnQge0F1dGhSb3V0ZXJPdXRsZXR9IGZyb20gJy4vQXV0aFJvdXRlck91dGxldCdcclxuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tICcuLi9wcm9maWxlL1Byb2ZpbGVDb21wb25lbnQnXHJcbmltcG9ydCB7QXBhcnRtZW50Q29tcG9uZW50fSBmcm9tICcuLi9hcGFydG1lbnQvQXBhcnRtZW50Q29tcG9uZW50J1xyXG5pbXBvcnQge1JlcXVlc3RzQ29tcG9uZW50fSBmcm9tICcuLi9yZXF1ZXN0cy9SZXF1ZXN0c0NvbXBvbmVudCdcclxuaW1wb3J0IHtUYXNrc0NvbXBvbmVudH0gZnJvbSAnLi4vdGFza3MvVGFza3NDb21wb25lbnQnXHJcbmltcG9ydCB7QWxsVGFza3NDb21wb25lbnR9IGZyb20gJy4uL3Rhc2tzL0FsbFRhc2tzQ29tcG9uZW50J1xyXG5pbXBvcnQge1BheW1lbnRzQ29tcG9uZW50fSBmcm9tICcuLi9wYXltZW50cy9QYXltZW50c0NvbXBvbmVudCdcclxuaW1wb3J0IHtSZXNpZGVudHNDb21wb25lbnR9IGZyb20gJy4uL3Jlc2lkZW50cy9SZXNpZGVudHNDb21wb25lbnQnXHJcbmltcG9ydCB7Q29tbXVuaXR5Q29tcG9uZW50fSBmcm9tICcuLi9jb21tdW5pdHkvQ29tbXVuaXR5Q29tcG9uZW50J1xyXG5pbXBvcnQge0J1c2luZXNzUm9vdENvbXBvbmVudH0gZnJvbSAnLi4vYXBhcnRtZW50L0J1c2luZXNzUm9vdENvbXBvbmVudCdcclxuaW1wb3J0IHtDcmVhdGVUYXNrQ29tcG9uZW50fSBmcm9tICcuLi90YXNrcy9DcmVhdGVUYXNrQ29tcG9uZW50J1xyXG5pbXBvcnQge0VkaXRUYXNrQ29tcG9uZW50fSBmcm9tICcuLi90YXNrcy9FZGl0VGFza0NvbXBvbmVudCdcclxuXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAgeyBwYXRoOiAnYXBwL2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIGFzOiAnSG9tZScgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9kYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCwgYXM6ICdEYXNoYm9hcmQnLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCwgYXM6ICdBYm91dCcgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9sb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsIGFzOiAnTG9naW4nIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcHJvZmlsZScsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCwgYXM6ICdQcm9maWxlJyB9LFxyXG4gICAgLy97IHBhdGg6ICdhcHAvYXBhcnRtZW50JywgY29tcG9uZW50OiBBcGFydG1lbnRDb21wb25lbnQsIGFzOiAnQXBhcnRtZW50JyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL3JlcXVlc3RzJywgY29tcG9uZW50OiBSZXF1ZXN0c0NvbXBvbmVudCwgYXM6ICdSZXF1ZXN0cycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC90YXNrcycsIGNvbXBvbmVudDogVGFza3NDb21wb25lbnQsIGFzOiAnVGFza3MnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYWxsdGFza3MnLCBjb21wb25lbnQ6IEFsbFRhc2tzQ29tcG9uZW50LCBhczogJ0FsbFRhc2tzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2NyZWF0ZXRhc2snLCBjb21wb25lbnQ6IENyZWF0ZVRhc2tDb21wb25lbnQsIGFzOiAnQ3JlYXRlVGFzaycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9lZGl0dGFzaycsIGNvbXBvbmVudDogRWRpdFRhc2tDb21wb25lbnQsIGFzOiAnRWRpdFRhc2snIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcGF5bWVudCcsIGNvbXBvbmVudDogUGF5bWVudHNDb21wb25lbnQsIGFzOiAnUGF5bWVudHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcmVzaWRlbnRzJywgY29tcG9uZW50OiBSZXNpZGVudHNDb21wb25lbnQsIGFzOiAnUmVzaWRlbnRzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2NvbW11bml0eScsIGNvbXBvbmVudDogQ29tbXVuaXR5Q29tcG9uZW50LCBhczogJ0NvbW11bml0eScgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9idXNpbmVzc3VuaXRzLy4uLicsIGNvbXBvbmVudDogQnVzaW5lc3NSb290Q29tcG9uZW50LCBhczogJ0J1c2luZXNzUm9vdHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvKionLCByZWRpcmVjdFRvOiBbJ0Rhc2hib2FyZCddIH1cclxuXSlcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICAvKnRlbXBsYXRlOiAnPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PicsKi9cclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJvZHk+XHJcbiAgICA8ZGl2IG1kbCBjbGFzcz1cImRlbW8tbGF5b3V0IG1kbC1sYXlvdXQgbWRsLWpzLWxheW91dCBtZGwtbGF5b3V0LS1maXhlZC1kcmF3ZXIgbWRsLWxheW91dC0tZml4ZWQtaGVhZGVyXCI+XHJcbiAgICAgIDxhcHAtaGVhZGVyIG1kbCBjbGFzcz1cImRlbW8taGVhZGVyIG1kbC1sYXlvdXRfX2hlYWRlciBtZGwtY29sb3ItLWdyZXktMTAwIG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPjwvYXBwLWhlYWRlcj5cclxuICAgICAgPGFwcC1zaWRlYmFyIGNsYXNzPVwiZGVtby1kcmF3ZXIgbWRsLWxheW91dF9fZHJhd2VyIG1kbC1jb2xvci0tYmx1ZS1ncmV5LTkwMCBtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTUwXCI+XHJcbiAgICAgIDwvYXBwLXNpZGViYXI+XHJcbiAgICAgIDxtYWluIGNsYXNzPVwibWRsLWxheW91dF9fY29udGVudCBtZGwtY29sb3ItLWdyZXktMTAwXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8YXV0aC1yb3V0ZXItb3V0bGV0PjwvYXV0aC1yb3V0ZXItb3V0bGV0PlxyXG5cclxuICAgICAgICAgXHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2ZXJzaW9uPVwiMS4xXCIgc3R5bGU9XCJwb3NpdGlvbjogZml4ZWQ7IGxlZnQ6IC0xMDAwcHg7IGhlaWdodDogLTEwMDBweDtcIj5cclxuICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgIDxtYXNrIGlkPVwicGllbWFza1wiIG1hc2tDb250ZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PTAuNSBjeT0wLjUgcj0wLjQ5IGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY3g9MC41IGN5PTAuNSByPTAuNDAgZmlsbD1cImJsYWNrXCIgLz5cclxuICAgICAgICAgIDwvbWFzaz5cclxuICAgICAgICAgIDxnIGlkPVwicGllY2hhcnRcIj5cclxuICAgICAgICAgICAgPGNpcmNsZSBjeD0wLjUgY3k9MC41IHI9MC41IC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDAuNSAwLjUgMC41IDAgQSAwLjUgMC41IDAgMCAxIDAuOTUgMC4yOCB6XCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpXCIgLz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2RlZnM+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCA1MDAgMjUwXCIgc3R5bGU9XCJwb3NpdGlvbjogZml4ZWQ7IGxlZnQ6IC0xMDAwcHg7IGhlaWdodDogLTEwMDBweDtcIj5cclxuICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgIDxnIGlkPVwiY2hhcnRcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJHcmlkbGluZXNcIj5cclxuICAgICAgICAgICAgICA8bGluZSBmaWxsPVwiIzg4ODg4OFwiIHN0cm9rZT1cIiM4ODg4ODhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgeDE9XCIwXCIgeTE9XCIyNy4zXCIgeDI9XCI0NjguM1wiIHkyPVwiMjcuM1wiIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIiM4ODg4ODhcIiBzdHJva2U9XCIjODg4ODg4XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiMFwiIHkxPVwiNjYuN1wiIHgyPVwiNDY4LjNcIiB5Mj1cIjY2LjdcIiAvPlxyXG4gICAgICAgICAgICAgIDxsaW5lIGZpbGw9XCIjODg4ODg4XCIgc3Ryb2tlPVwiIzg4ODg4OFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiB4MT1cIjBcIiB5MT1cIjEwNS4zXCIgeDI9XCI0NjguM1wiIHkyPVwiMTA1LjNcIiAvPlxyXG4gICAgICAgICAgICAgIDxsaW5lIGZpbGw9XCIjODg4ODg4XCIgc3Ryb2tlPVwiIzg4ODg4OFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiB4MT1cIjBcIiB5MT1cIjE0NC43XCIgeDI9XCI0NjguM1wiIHkyPVwiMTQ0LjdcIiAvPlxyXG4gICAgICAgICAgICAgIDxsaW5lIGZpbGw9XCIjODg4ODg4XCIgc3Ryb2tlPVwiIzg4ODg4OFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiB4MT1cIjBcIiB5MT1cIjE4NC4zXCIgeDI9XCI0NjguM1wiIHkyPVwiMTg0LjNcIiAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiTnVtYmVyc1wiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDQ4NSAyOS4zMzMzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj41MDA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNDg1IDY5KVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj40MDA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNDg1IDEwOS4zMzMzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj4zMDA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNDg1IDE0OSlcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+MjAwPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDQ4NSAxODguMzMzMylcIiBmaWxsPVwiIzg4ODg4OFwiIGZvbnQtZmFtaWx5PVwiJ1JvYm90bydcIiBmb250LXNpemU9XCI5XCI+MTAwPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDAgMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjE8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgNzggMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjI8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgMTU0LjY2NjcgMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjM8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgMjMyLjE2NjcgMjQ5LjAwMDMpXCIgZmlsbD1cIiM4ODg4ODhcIiBmb250LWZhbWlseT1cIidSb2JvdG8nXCIgZm9udC1zaXplPVwiOVwiPjQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPVwibWF0cml4KDEgMCAwIDEgMzA5IDI0OS4wMDAzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj41PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDM4Ni42NjY3IDI0OS4wMDAzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj42PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAxIDQ2NC4zMzMzIDI0OS4wMDAzKVwiIGZpbGw9XCIjODg4ODg4XCIgZm9udC1mYW1pbHk9XCInUm9ib3RvJ1wiIGZvbnQtc2l6ZT1cIjlcIj43PC90ZXh0PlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiTGF5ZXJfNVwiPlxyXG4gICAgICAgICAgICAgIDxwb2x5Z29uIG9wYWNpdHk9XCIwLjM2XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHBvaW50cz1cIjAsMjIzLjMgNDgsMTM4LjUgMTU0LjcsMTY5IDIxMSw4OC41XHJcbiAgICAgICAgICAgICAgMjk0LjUsODAuNSAzODAsMTY1LjIgNDM3LDc1LjUgNDY5LjUsMjIzLjMgXHRcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJMYXllcl80XCI+XHJcbiAgICAgICAgICAgICAgPHBvbHlnb24gc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHBvaW50cz1cIjQ2OS4zLDIyMi43IDEsMjIyLjcgNDguNywxNjYuNyAxNTUuNywxODguMyAyMTIsMTMyLjdcclxuICAgICAgICAgICAgICAyOTYuNywxMjggMzgwLjcsMTg0LjMgNDM2LjcsMTI1IFx0XCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9kZWZzPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICAgXHJcbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5nZXRtZGwuaW8vMS4xLjMvbWF0ZXJpYWwubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgPC9ib2R5PlxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFNpZGViYXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgTURMLCBBdXRoUm91dGVyT3V0bGV0XSxcclxuICAgIHByb3ZpZGVyczogW0FVVEhfUFJPVklERVJTXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
