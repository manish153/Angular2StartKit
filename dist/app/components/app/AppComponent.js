System.register(['@angular/core', '@angular/router-deprecated', 'angular2-jwt', 'angular2-notifications', '../home/HomeComponent', '../about/AboutComponent', './HeaderComponent', '../login/LoginComponent', './SidebarComponent', './DashboardComponent', './MaterialDesignLiteUpgradeElement', './AuthRouterOutlet', '../profile/ProfileComponent', '../requests/RequestsComponent', '../requests/AdminRequestComponent', '../requests/CreateRequestComponent', '../tasks/TasksComponent', '../tasks/AllTasksComponent', '../payments/PaymentsComponent', '../residents/ResidentsComponent', '../community/CommunityComponent', '../apartment/BusinessRootComponent', '../tasks/CreateTaskComponent', '../tasks/EditTaskComponent', '../apartment/AptSearchComponent'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, angular2_jwt_1, angular2_notifications_1, HomeComponent_1, AboutComponent_1, HeaderComponent_1, LoginComponent_1, SidebarComponent_1, DashboardComponent_1, MaterialDesignLiteUpgradeElement_1, AuthRouterOutlet_1, ProfileComponent_1, RequestsComponent_1, AdminRequestComponent_1, CreateRequestComponent_1, TasksComponent_1, AllTasksComponent_1, PaymentsComponent_1, ResidentsComponent_1, CommunityComponent_1, BusinessRootComponent_1, CreateTaskComponent_1, EditTaskComponent_1, AptSearchComponent_1;
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
            },
            function (AptSearchComponent_1_1) {
                AptSearchComponent_1 = AptSearchComponent_1_1;
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
                    { path: 'app/adminpayment', component: PaymentsComponent_1.PaymentsComponent, name: 'AdminPayments' },
                    { path: 'app/residents', component: ResidentsComponent_1.ResidentsComponent, name: 'Residents' },
                    { path: 'app/community', component: CommunityComponent_1.CommunityComponent, name: 'Community' },
                    { path: 'app/apartment', component: AptSearchComponent_1.AptSearchComponent, name: 'AptSearch' },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErRUE7Z0JBRUU7b0JBRVcsWUFBTyxHQUFHO3dCQUNiLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFlBQVksRUFBRSxJQUFJO3dCQUNsQixZQUFZLEVBQUUsSUFBSTt3QkFDbEIsU0FBUyxFQUFFLENBQUM7d0JBQ1osUUFBUSxFQUFFLENBQUM7d0JBQ1gsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLFlBQVksRUFBRSxJQUFJO3FCQUN2QixDQUFDO2dCQVZZLENBQUM7WUFlbkIsQ0FBQztZQWhFRDtnQkFBQywrQkFBVyxDQUFDO29CQUNULEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkJBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO29CQUM1RCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQztvQkFDOUYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwrQkFBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7b0JBQy9ELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO29CQUMvRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG1DQUFnQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7b0JBQ3JFLDRFQUE0RTtvQkFDNUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO29CQUN4RSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsNkNBQXFCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtvQkFDcEYsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLCtDQUFzQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7b0JBQ3ZGLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO29CQUMvRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0JBQ3hFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSx5Q0FBbUIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO29CQUM5RSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0JBQ3hFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtvQkFDdkUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7b0JBQ2pGLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsdUNBQWtCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtvQkFDM0UsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1Q0FBa0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO29CQUMzRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7b0JBQzNFLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSw2Q0FBcUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO29CQUMxRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUU7aUJBQ2hELENBQUM7Z0JBQ0QsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUDtvQkFDRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsRUFBRSxtQ0FBZ0IsRUFBRSxpQ0FBZSxFQUFFLHNDQUFHLEVBQUUsbUNBQWdCLEVBQUMscURBQTRCLENBQUM7b0JBQ3RILFNBQVMsRUFBRSxDQUFDLDZCQUFjLEVBQUMsNkNBQW9CLENBQUM7aUJBQ25ELENBQUM7OzRCQUFBO1lBR0YsdUNBaUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL0FwcENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7QXV0aEh0dHAsIEF1dGhDb25maWcsIHRva2VuTm90RXhwaXJlZCwgQVVUSF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XHJcbmltcG9ydCB7U2ltcGxlTm90aWZpY2F0aW9uc0NvbXBvbmVudCxOb3RpZmljYXRpb25zU2VydmljZX0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5cclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi9ob21lL0hvbWVDb21wb25lbnQnXHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4uL2Fib3V0L0Fib3V0Q29tcG9uZW50J1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9IZWFkZXJDb21wb25lbnQnXHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4uL2xvZ2luL0xvZ2luQ29tcG9uZW50J1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSdcclxuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuL1NpZGViYXJDb21wb25lbnQnXHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL0Rhc2hib2FyZENvbXBvbmVudCdcclxuaW1wb3J0IHtNREx9IGZyb20gJy4vTWF0ZXJpYWxEZXNpZ25MaXRlVXBncmFkZUVsZW1lbnQnXHJcbmltcG9ydCB7QXV0aFJvdXRlck91dGxldH0gZnJvbSAnLi9BdXRoUm91dGVyT3V0bGV0J1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gJy4uL3Byb2ZpbGUvUHJvZmlsZUNvbXBvbmVudCdcclxuaW1wb3J0IHtBcGFydG1lbnRDb21wb25lbnR9IGZyb20gJy4uL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQnXHJcbmltcG9ydCB7UmVxdWVzdHNDb21wb25lbnR9IGZyb20gJy4uL3JlcXVlc3RzL1JlcXVlc3RzQ29tcG9uZW50J1xyXG5pbXBvcnQge0FkbWluUmVxdWVzdENvbXBvbmVudH0gZnJvbSAnLi4vcmVxdWVzdHMvQWRtaW5SZXF1ZXN0Q29tcG9uZW50J1xyXG5pbXBvcnQge0NyZWF0ZVJlcXVlc3RDb21wb25lbnR9IGZyb20gJy4uL3JlcXVlc3RzL0NyZWF0ZVJlcXVlc3RDb21wb25lbnQnXHJcbmltcG9ydCB7VGFza3NDb21wb25lbnR9IGZyb20gJy4uL3Rhc2tzL1Rhc2tzQ29tcG9uZW50J1xyXG5pbXBvcnQge0FsbFRhc2tzQ29tcG9uZW50fSBmcm9tICcuLi90YXNrcy9BbGxUYXNrc0NvbXBvbmVudCdcclxuaW1wb3J0IHtQYXltZW50c0NvbXBvbmVudH0gZnJvbSAnLi4vcGF5bWVudHMvUGF5bWVudHNDb21wb25lbnQnXHJcbmltcG9ydCB7QWRtaW5QYXltZW50c0NvbXBvbmVudH0gZnJvbSAnLi4vcGF5bWVudHMvQWRtaW5QYXltZW50c0NvbXBvbmVudCdcclxuaW1wb3J0IHtSZXNpZGVudHNDb21wb25lbnR9IGZyb20gJy4uL3Jlc2lkZW50cy9SZXNpZGVudHNDb21wb25lbnQnXHJcbmltcG9ydCB7Q29tbXVuaXR5Q29tcG9uZW50fSBmcm9tICcuLi9jb21tdW5pdHkvQ29tbXVuaXR5Q29tcG9uZW50J1xyXG5pbXBvcnQge0J1c2luZXNzUm9vdENvbXBvbmVudH0gZnJvbSAnLi4vYXBhcnRtZW50L0J1c2luZXNzUm9vdENvbXBvbmVudCdcclxuaW1wb3J0IHtDcmVhdGVUYXNrQ29tcG9uZW50fSBmcm9tICcuLi90YXNrcy9DcmVhdGVUYXNrQ29tcG9uZW50J1xyXG5pbXBvcnQge0VkaXRUYXNrQ29tcG9uZW50fSBmcm9tICcuLi90YXNrcy9FZGl0VGFza0NvbXBvbmVudCdcclxuaW1wb3J0IHtBcHRTZWFyY2hDb21wb25lbnR9IGZyb20gJy4uL2FwYXJ0bWVudC9BcHRTZWFyY2hDb21wb25lbnQnXHJcblxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJ2FwcC9ob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBuYW1lOiAnSG9tZScgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9kYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCwgbmFtZTogJ0Rhc2hib2FyZCcsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50LCBuYW1lOiAnQWJvdXQnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LCBuYW1lOiAnTG9naW4nIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcHJvZmlsZScsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCwgbmFtZTogJ1Byb2ZpbGUnIH0sXHJcbiAgICAvL3sgcGF0aDogJ2FwcC9hcGFydG1lbnQnLCBjb21wb25lbnQ6IEFwYXJ0bWVudENvbXBvbmVudCwgYXM6ICdBcGFydG1lbnQnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcmVxdWVzdHMnLCBjb21wb25lbnQ6IFJlcXVlc3RzQ29tcG9uZW50LCBuYW1lOiAnUmVxdWVzdHMnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYWRtaW5yZXF1ZXN0JywgY29tcG9uZW50OiBBZG1pblJlcXVlc3RDb21wb25lbnQsIG5hbWU6ICdBZG1pbnJlcXVlc3QnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvY3JlYXRlcmVxdWVzdCcsIGNvbXBvbmVudDogQ3JlYXRlUmVxdWVzdENvbXBvbmVudCwgbmFtZTogJ0NyZWF0ZXJlcXVlc3QnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvdGFza3MnLCBjb21wb25lbnQ6IFRhc2tzQ29tcG9uZW50LCBuYW1lOiAnVGFza3MnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvYWxsdGFza3MnLCBjb21wb25lbnQ6IEFsbFRhc2tzQ29tcG9uZW50LCBuYW1lOiAnQWxsVGFza3MnIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvY3JlYXRldGFzaycsIGNvbXBvbmVudDogQ3JlYXRlVGFza0NvbXBvbmVudCwgbmFtZTogJ0NyZWF0ZVRhc2snIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvZWRpdHRhc2snLCBjb21wb25lbnQ6IEVkaXRUYXNrQ29tcG9uZW50LCBuYW1lOiAnRWRpdFRhc2snIH0sXHJcbiAgICB7IHBhdGg6ICdhcHAvcGF5bWVudCcsIGNvbXBvbmVudDogUGF5bWVudHNDb21wb25lbnQsIG5hbWU6ICdQYXltZW50cycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9hZG1pbnBheW1lbnQnLCBjb21wb25lbnQ6IFBheW1lbnRzQ29tcG9uZW50LCBuYW1lOiAnQWRtaW5QYXltZW50cycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9yZXNpZGVudHMnLCBjb21wb25lbnQ6IFJlc2lkZW50c0NvbXBvbmVudCwgbmFtZTogJ1Jlc2lkZW50cycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9jb21tdW5pdHknLCBjb21wb25lbnQ6IENvbW11bml0eUNvbXBvbmVudCwgbmFtZTogJ0NvbW11bml0eScgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9hcGFydG1lbnQnLCBjb21wb25lbnQ6IEFwdFNlYXJjaENvbXBvbmVudCwgbmFtZTogJ0FwdFNlYXJjaCcgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9idXNpbmVzc3VuaXRzLy4uLicsIGNvbXBvbmVudDogQnVzaW5lc3NSb290Q29tcG9uZW50LCBuYW1lOiAnQnVzaW5lc3NSb290cycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC8qKicsIHJlZGlyZWN0VG86IFsnRGFzaGJvYXJkJ10gfVxyXG5dKVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJvZHk+XHJcbiAgICA8ZGl2IG1kbCBjbGFzcz1cImRlbW8tbGF5b3V0IG1kbC1sYXlvdXQgbWRsLWpzLWxheW91dCBtZGwtbGF5b3V0LS1maXhlZC1kcmF3ZXIgbWRsLWxheW91dC0tZml4ZWQtaGVhZGVyXCI+XHJcbiAgICAgIDxhcHAtaGVhZGVyIG1kbCBjbGFzcz1cImRlbW8taGVhZGVyIG1kbC1sYXlvdXRfX2hlYWRlciBtZGwtY29sb3ItLWdyZXktMTAwIG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPjwvYXBwLWhlYWRlcj5cclxuICAgICAgPGFwcC1zaWRlYmFyIGNsYXNzPVwiZGVtby1kcmF3ZXIgbWRsLWxheW91dF9fZHJhd2VyIG1kbC1jb2xvci0tYmx1ZS1ncmV5LTkwMCBtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTUwXCI+XHJcbiAgICAgIDwvYXBwLXNpZGViYXI+XHJcbiAgICAgIDxtYWluIGNsYXNzPVwibWRsLWxheW91dF9fY29udGVudCBtZGwtY29sb3ItLWdyZXktMTAwXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8YXV0aC1yb3V0ZXItb3V0bGV0PjwvYXV0aC1yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5nZXRtZGwuaW8vMS4xLjMvbWF0ZXJpYWwubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8c2ltcGxlLW5vdGlmaWNhdGlvbnMgW29wdGlvbnNdPVwib3B0aW9uc1wiPjwvc2ltcGxlLW5vdGlmaWNhdGlvbnM+ICBcclxuICA8L2JvZHk+XHJcblxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgU2lkZWJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBNREwsIEF1dGhSb3V0ZXJPdXRsZXQsU2ltcGxlTm90aWZpY2F0aW9uc0NvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtBVVRIX1BST1ZJREVSUyxOb3RpZmljYXRpb25zU2VydmljZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAgIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICAgICAgdGltZU91dDogNTAwMCxcclxuICAgICAgICAgIGxhc3RPbkJvdHRvbTogdHJ1ZSxcclxuICAgICAgICAgIGNsaWNrVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICAgIG1heExlbmd0aDogMCxcclxuICAgICAgICAgIG1heFN0YWNrOiA3LFxyXG4gICAgICAgICAgc2hvd1Byb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
