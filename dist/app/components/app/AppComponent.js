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
                    this.temp = false;
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
      <app-header mdl class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600" [(hideme)] = "temp"></app-header>
      <app-sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"  (sidebarClicked)="temp = $event">
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnRkE7Z0JBSUU7b0JBRkEsU0FBSSxHQUFTLEtBQUssQ0FBQztvQkFJUixZQUFPLEdBQUc7d0JBQ2IsT0FBTyxFQUFFLElBQUk7d0JBQ2IsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLFlBQVksRUFBRSxJQUFJO3dCQUNsQixTQUFTLEVBQUUsQ0FBQzt3QkFDWixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxlQUFlLEVBQUUsSUFBSTt3QkFDckIsWUFBWSxFQUFFLElBQUk7cUJBQ3ZCLENBQUM7Z0JBVlksQ0FBQztZQVduQixDQUFDO1lBL0REO2dCQUFDLCtCQUFXLENBQUM7b0JBQ1QsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw2QkFBYSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7b0JBQzVELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsdUNBQWtCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO29CQUM5RixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLCtCQUFjLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtvQkFDL0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwrQkFBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7b0JBQy9ELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsbUNBQWdCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtvQkFDckUsNEVBQTRFO29CQUM1RSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7b0JBQ3hFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSw2Q0FBcUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO29CQUNwRixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsK0NBQXNCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtvQkFDdkYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwrQkFBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7b0JBQy9ELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtvQkFDeEUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHlDQUFtQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7b0JBQzlFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtvQkFDeEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO29CQUN2RSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUscUNBQWlCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtvQkFDakYsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1Q0FBa0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO29CQUMzRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHVDQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7b0JBQzNFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsdUNBQWtCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtvQkFDM0UsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLDZDQUFxQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7b0JBQzFGLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtpQkFDaEQsQ0FBQztnQkFDRCxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxRQUFRO29CQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtCUDtvQkFDRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsRUFBRSxtQ0FBZ0IsRUFBRSxpQ0FBZSxFQUFFLHNDQUFHLEVBQUUsbUNBQWdCLEVBQUMscURBQTRCLENBQUM7b0JBQ3RILFNBQVMsRUFBRSxDQUFDLDZCQUFjLEVBQUMsNkNBQW9CLENBQUM7aUJBQ25ELENBQUM7OzRCQUFBO1lBR0YsdUNBZUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAvQXBwQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHtBdXRoSHR0cCwgQXV0aENvbmZpZywgdG9rZW5Ob3RFeHBpcmVkLCBBVVRIX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjItand0JztcclxuaW1wb3J0IHtTaW1wbGVOb3RpZmljYXRpb25zQ29tcG9uZW50LE5vdGlmaWNhdGlvbnNTZXJ2aWNlfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcblxyXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4uL2hvbWUvSG9tZUNvbXBvbmVudCdcclxuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSAnLi4vYWJvdXQvQWJvdXRDb21wb25lbnQnXHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL0hlYWRlckNvbXBvbmVudCdcclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi4vbG9naW4vTG9naW5Db21wb25lbnQnXHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJ1xyXG5pbXBvcnQge1NpZGViYXJDb21wb25lbnR9IGZyb20gJy4vU2lkZWJhckNvbXBvbmVudCdcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gJy4vRGFzaGJvYXJkQ29tcG9uZW50J1xyXG5pbXBvcnQge01ETH0gZnJvbSAnLi9NYXRlcmlhbERlc2lnbkxpdGVVcGdyYWRlRWxlbWVudCdcclxuaW1wb3J0IHtBdXRoUm91dGVyT3V0bGV0fSBmcm9tICcuL0F1dGhSb3V0ZXJPdXRsZXQnXHJcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSAnLi4vcHJvZmlsZS9Qcm9maWxlQ29tcG9uZW50J1xyXG5pbXBvcnQge0FwYXJ0bWVudENvbXBvbmVudH0gZnJvbSAnLi4vYXBhcnRtZW50L0FwYXJ0bWVudENvbXBvbmVudCdcclxuaW1wb3J0IHtSZXF1ZXN0c0NvbXBvbmVudH0gZnJvbSAnLi4vcmVxdWVzdHMvUmVxdWVzdHNDb21wb25lbnQnXHJcbmltcG9ydCB7QWRtaW5SZXF1ZXN0Q29tcG9uZW50fSBmcm9tICcuLi9yZXF1ZXN0cy9BZG1pblJlcXVlc3RDb21wb25lbnQnXHJcbmltcG9ydCB7Q3JlYXRlUmVxdWVzdENvbXBvbmVudH0gZnJvbSAnLi4vcmVxdWVzdHMvQ3JlYXRlUmVxdWVzdENvbXBvbmVudCdcclxuaW1wb3J0IHtUYXNrc0NvbXBvbmVudH0gZnJvbSAnLi4vdGFza3MvVGFza3NDb21wb25lbnQnXHJcbmltcG9ydCB7QWxsVGFza3NDb21wb25lbnR9IGZyb20gJy4uL3Rhc2tzL0FsbFRhc2tzQ29tcG9uZW50J1xyXG5pbXBvcnQge1BheW1lbnRzQ29tcG9uZW50fSBmcm9tICcuLi9wYXltZW50cy9QYXltZW50c0NvbXBvbmVudCdcclxuaW1wb3J0IHtBZG1pblBheW1lbnRzQ29tcG9uZW50fSBmcm9tICcuLi9wYXltZW50cy9BZG1pblBheW1lbnRzQ29tcG9uZW50J1xyXG5pbXBvcnQge1Jlc2lkZW50c0NvbXBvbmVudH0gZnJvbSAnLi4vcmVzaWRlbnRzL1Jlc2lkZW50c0NvbXBvbmVudCdcclxuaW1wb3J0IHtDb21tdW5pdHlDb21wb25lbnR9IGZyb20gJy4uL2NvbW11bml0eS9Db21tdW5pdHlDb21wb25lbnQnXHJcbmltcG9ydCB7QnVzaW5lc3NSb290Q29tcG9uZW50fSBmcm9tICcuLi9hcGFydG1lbnQvQnVzaW5lc3NSb290Q29tcG9uZW50J1xyXG5pbXBvcnQge0NyZWF0ZVRhc2tDb21wb25lbnR9IGZyb20gJy4uL3Rhc2tzL0NyZWF0ZVRhc2tDb21wb25lbnQnXHJcbmltcG9ydCB7RWRpdFRhc2tDb21wb25lbnR9IGZyb20gJy4uL3Rhc2tzL0VkaXRUYXNrQ29tcG9uZW50J1xyXG5pbXBvcnQge0FwdFNlYXJjaENvbXBvbmVudH0gZnJvbSAnLi4vYXBhcnRtZW50L0FwdFNlYXJjaENvbXBvbmVudCdcclxuXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAgeyBwYXRoOiAnYXBwL2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIG5hbWU6ICdIb21lJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LCBuYW1lOiAnRGFzaGJvYXJkJywgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuICAgIHsgcGF0aDogJ2FwcC9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQsIG5hbWU6ICdBYm91dCcgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9sb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsIG5hbWU6ICdMb2dpbicgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9wcm9maWxlJywgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50LCBuYW1lOiAnUHJvZmlsZScgfSxcclxuICAgIC8veyBwYXRoOiAnYXBwL2FwYXJ0bWVudCcsIGNvbXBvbmVudDogQXBhcnRtZW50Q29tcG9uZW50LCBhczogJ0FwYXJ0bWVudCcgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9yZXF1ZXN0cycsIGNvbXBvbmVudDogUmVxdWVzdHNDb21wb25lbnQsIG5hbWU6ICdSZXF1ZXN0cycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9hZG1pbnJlcXVlc3QnLCBjb21wb25lbnQ6IEFkbWluUmVxdWVzdENvbXBvbmVudCwgbmFtZTogJ0FkbWlucmVxdWVzdCcgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9jcmVhdGVyZXF1ZXN0JywgY29tcG9uZW50OiBDcmVhdGVSZXF1ZXN0Q29tcG9uZW50LCBuYW1lOiAnQ3JlYXRlcmVxdWVzdCcgfSxcclxuICAgIHsgcGF0aDogJ2FwcC90YXNrcycsIGNvbXBvbmVudDogVGFza3NDb21wb25lbnQsIG5hbWU6ICdUYXNrcycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9hbGx0YXNrcycsIGNvbXBvbmVudDogQWxsVGFza3NDb21wb25lbnQsIG5hbWU6ICdBbGxUYXNrcycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9jcmVhdGV0YXNrJywgY29tcG9uZW50OiBDcmVhdGVUYXNrQ29tcG9uZW50LCBuYW1lOiAnQ3JlYXRlVGFzaycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9lZGl0dGFzaycsIGNvbXBvbmVudDogRWRpdFRhc2tDb21wb25lbnQsIG5hbWU6ICdFZGl0VGFzaycgfSxcclxuICAgIHsgcGF0aDogJ2FwcC9wYXltZW50JywgY29tcG9uZW50OiBQYXltZW50c0NvbXBvbmVudCwgbmFtZTogJ1BheW1lbnRzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2FkbWlucGF5bWVudCcsIGNvbXBvbmVudDogUGF5bWVudHNDb21wb25lbnQsIG5hbWU6ICdBZG1pblBheW1lbnRzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL3Jlc2lkZW50cycsIGNvbXBvbmVudDogUmVzaWRlbnRzQ29tcG9uZW50LCBuYW1lOiAnUmVzaWRlbnRzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2NvbW11bml0eScsIGNvbXBvbmVudDogQ29tbXVuaXR5Q29tcG9uZW50LCBuYW1lOiAnQ29tbXVuaXR5JyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2FwYXJ0bWVudCcsIGNvbXBvbmVudDogQXB0U2VhcmNoQ29tcG9uZW50LCBuYW1lOiAnQXB0U2VhcmNoJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwL2J1c2luZXNzdW5pdHMvLi4uJywgY29tcG9uZW50OiBCdXNpbmVzc1Jvb3RDb21wb25lbnQsIG5hbWU6ICdCdXNpbmVzc1Jvb3RzJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwLyoqJywgcmVkaXJlY3RUbzogWydEYXNoYm9hcmQnXSB9XHJcbl0pXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Ym9keT5cclxuICAgIDxkaXYgbWRsIGNsYXNzPVwiZGVtby1sYXlvdXQgbWRsLWxheW91dCBtZGwtanMtbGF5b3V0IG1kbC1sYXlvdXQtLWZpeGVkLWRyYXdlciBtZGwtbGF5b3V0LS1maXhlZC1oZWFkZXJcIj5cclxuICAgICAgPGFwcC1oZWFkZXIgbWRsIGNsYXNzPVwiZGVtby1oZWFkZXIgbWRsLWxheW91dF9faGVhZGVyIG1kbC1jb2xvci0tZ3JleS0xMDAgbWRsLWNvbG9yLXRleHQtLWdyZXktNjAwXCIgWyhoaWRlbWUpXSA9IFwidGVtcFwiPjwvYXBwLWhlYWRlcj5cclxuICAgICAgPGFwcC1zaWRlYmFyIGNsYXNzPVwiZGVtby1kcmF3ZXIgbWRsLWxheW91dF9fZHJhd2VyIG1kbC1jb2xvci0tYmx1ZS1ncmV5LTkwMCBtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTUwXCIgIChzaWRlYmFyQ2xpY2tlZCk9XCJ0ZW1wID0gJGV2ZW50XCI+XHJcbiAgICAgIDwvYXBwLXNpZGViYXI+XHJcbiAgICAgIDxtYWluIGNsYXNzPVwibWRsLWxheW91dF9fY29udGVudCBtZGwtY29sb3ItLWdyZXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICA8YXV0aC1yb3V0ZXItb3V0bGV0PjwvYXV0aC1yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5nZXRtZGwuaW8vMS4xLjMvbWF0ZXJpYWwubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8c2ltcGxlLW5vdGlmaWNhdGlvbnMgW29wdGlvbnNdPVwib3B0aW9uc1wiPjwvc2ltcGxlLW5vdGlmaWNhdGlvbnM+ICBcclxuICA8L2JvZHk+XHJcbiAgXHJcblxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgU2lkZWJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBNREwsIEF1dGhSb3V0ZXJPdXRsZXQsU2ltcGxlTm90aWZpY2F0aW9uc0NvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtBVVRIX1BST1ZJREVSUyxOb3RpZmljYXRpb25zU2VydmljZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgdGVtcDpib29sZWFuPWZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgICAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA1MDAwLFxyXG4gICAgICAgICAgbGFzdE9uQm90dG9tOiB0cnVlLFxyXG4gICAgICAgICAgY2xpY2tUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgbWF4TGVuZ3RoOiAwLFxyXG4gICAgICAgICAgbWF4U3RhY2s6IDcsXHJcbiAgICAgICAgICBzaG93UHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWVcclxuICAgIH07XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
