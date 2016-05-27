System.register(['angular2/core', 'angular2/router', 'angular2-jwt', '../home/HomeComponent', '../about/AboutComponent', './HeaderComponent', '../login/LoginComponent', './SidebarComponent', './DashboardComponent', './MaterialDesignLiteUpgradeElement', './AuthRouterOutlet', '../profile/ProfileComponent', '../requests/RequestsComponent', '../tasks/TasksComponent', '../payments/PaymentsComponent', '../residents/ResidentsComponent', '../community/CommunityComponent', '../apartment/BusinessRootComponent'], function(exports_1, context_1) {
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
    var core_1, router_1, angular2_jwt_1, HomeComponent_1, AboutComponent_1, HeaderComponent_1, LoginComponent_1, SidebarComponent_1, DashboardComponent_1, MaterialDesignLiteUpgradeElement_1, AuthRouterOutlet_1, ProfileComponent_1, RequestsComponent_1, TasksComponent_1, PaymentsComponent_1, ResidentsComponent_1, CommunityComponent_1, BusinessRootComponent_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
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
                        { path: 'app/payment', component: PaymentsComponent_1.PaymentsComponent, as: 'Payments' },
                        { path: 'app/residents', component: ResidentsComponent_1.ResidentsComponent, as: 'Residents' },
                        { path: 'app/community', component: CommunityComponent_1.CommunityComponent, as: 'Community' },
                        { path: 'app/businessunits/...', component: BusinessRootComponent_1.BusinessRootComponent, as: 'BusinessRoots' },
                        { path: 'app/**', redirectTo: ['Dashboard'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        /*template: '<router-outlet></router-outlet>',*/
                        template: "\n    <body>\n    <div mdl class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n      <app-header mdl class=\"demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600\"></app-header>\n      <app-sidebar class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\n      </app-sidebar>\n      <main class=\"mdl-layout__content mdl-color--grey-100\">\n         \n         <auth-router-outlet></auth-router-outlet>\n\n         \n      </main>\n    </div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" style=\"position: fixed; left: -1000px; height: -1000px;\">\n        <defs>\n          <mask id=\"piemask\" maskContentUnits=\"objectBoundingBox\">\n            <circle cx=0.5 cy=0.5 r=0.49 fill=\"white\" />\n            <circle cx=0.5 cy=0.5 r=0.40 fill=\"black\" />\n          </mask>\n          <g id=\"piechart\">\n            <circle cx=0.5 cy=0.5 r=0.5 />\n            <path d=\"M 0.5 0.5 0.5 0 A 0.5 0.5 0 0 1 0.95 0.28 z\" stroke=\"none\" fill=\"rgba(255, 255, 255, 0.75)\" />\n          </g>\n        </defs>\n      </svg>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 500 250\" style=\"position: fixed; left: -1000px; height: -1000px;\">\n        <defs>\n          <g id=\"chart\">\n            <g id=\"Gridlines\">\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"27.3\" x2=\"468.3\" y2=\"27.3\" />\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"66.7\" x2=\"468.3\" y2=\"66.7\" />\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"105.3\" x2=\"468.3\" y2=\"105.3\" />\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"144.7\" x2=\"468.3\" y2=\"144.7\" />\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"184.3\" x2=\"468.3\" y2=\"184.3\" />\n            </g>\n            <g id=\"Numbers\">\n              <text transform=\"matrix(1 0 0 1 485 29.3333)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">500</text>\n              <text transform=\"matrix(1 0 0 1 485 69)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">400</text>\n              <text transform=\"matrix(1 0 0 1 485 109.3333)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">300</text>\n              <text transform=\"matrix(1 0 0 1 485 149)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">200</text>\n              <text transform=\"matrix(1 0 0 1 485 188.3333)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">100</text>\n              <text transform=\"matrix(1 0 0 1 0 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">1</text>\n              <text transform=\"matrix(1 0 0 1 78 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">2</text>\n              <text transform=\"matrix(1 0 0 1 154.6667 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">3</text>\n              <text transform=\"matrix(1 0 0 1 232.1667 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">4</text>\n              <text transform=\"matrix(1 0 0 1 309 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">5</text>\n              <text transform=\"matrix(1 0 0 1 386.6667 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">6</text>\n              <text transform=\"matrix(1 0 0 1 464.3333 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">7</text>\n            </g>\n            <g id=\"Layer_5\">\n              <polygon opacity=\"0.36\" stroke-miterlimit=\"10\" points=\"0,223.3 48,138.5 154.7,169 211,88.5\n              294.5,80.5 380,165.2 437,75.5 469.5,223.3 \t\"/>\n            </g>\n            <g id=\"Layer_4\">\n              <polygon stroke-miterlimit=\"10\" points=\"469.3,222.7 1,222.7 48.7,166.7 155.7,188.3 212,132.7\n              296.7,128 380.7,184.3 436.7,125 \t\"/>\n            </g>\n          </g>\n        </defs>\n      </svg>\n      \n    <script src=\"https://code.getmdl.io/1.1.3/material.min.js\"></script>\n  </body>\n\n    ",
                        /*styleUrls: ['../app/assets/styles.css'], */
                        directives: [router_1.ROUTER_DIRECTIVES, SidebarComponent_1.SidebarComponent, HeaderComponent_1.HeaderComponent, MaterialDesignLiteUpgradeElement_1.MDL, AuthRouterOutlet_1.AuthRouterOutlet],
                        providers: [angular2_jwt_1.AUTH_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=AppComponent.js.map