System.register(['angular2/platform/browser', 'angular2/core', 'angular2/common', 'angular2/router', 'angular2/http', './services/AuthService', './components/apartment/ApartmentService', './components/app/AppComponent'], function(exports_1) {
    var browser_1, core_1, common_1, router_1, http_1, AuthService_1, ApartmentService_1, AppComponent_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            },
            function (AppComponent_1_1) {
                AppComponent_1 = AppComponent_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(AppComponent_1.AppComponent, [
                AuthService_1.AuthService,
                ApartmentService_1.ApartmentService,
                router_1.ROUTER_PROVIDERS,
                common_1.CORE_DIRECTIVES,
                http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQSxtQkFBUyxDQUFDLDJCQUFZLEVBQUU7Z0JBQ3BCLHlCQUFXO2dCQUNYLG1DQUFnQjtnQkFDaEIseUJBQWdCO2dCQUNoQix3QkFBZTtnQkFDZixxQkFBYztnQkFDZCxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQzthQUM5RCxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2Jvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJ1xyXG5pbXBvcnQge3Byb3ZpZGV9ICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnXHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nXHJcbmltcG9ydCB7Uk9VVEVSX0JJTkRJTkdTLCBST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJ1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJ1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gJy4vY29tcG9uZW50cy9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZSdcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvQXBwQ29tcG9uZW50J1xyXG5cclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xyXG4gICAgQXV0aFNlcnZpY2UsXHJcbiAgICBBcGFydG1lbnRTZXJ2aWNlLFxyXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcclxuICAgIENPUkVfRElSRUNUSVZFUyxcclxuICAgIEhUVFBfUFJPVklERVJTLFxyXG4gICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IFBhdGhMb2NhdGlvblN0cmF0ZWd5fSlcclxuXSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
