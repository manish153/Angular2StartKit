System.register(['@angular/platform-browser-dynamic', '@angular/core', '@angular/common', '@angular/router-deprecated', '@angular/http', './services/AuthService', './components/apartment/ApartmentService', './components/app/AppComponent', './services/SharedService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, common_1, router_deprecated_1, common_2, http_1, AuthService_1, ApartmentService_1, AppComponent_1, SharedService_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
            },
            function (SharedService_1_1) {
                SharedService_1 = SharedService_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(AppComponent_1.AppComponent, [
                AuthService_1.AuthService,
                SharedService_1.SharedService,
                ApartmentService_1.ApartmentService,
                router_deprecated_1.ROUTER_PROVIDERS,
                common_1.CORE_DIRECTIVES,
                http_1.HTTP_PROVIDERS,
                core_1.provide(common_2.LocationStrategy, { useClass: common_2.PathLocationStrategy })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQSxvQ0FBUyxDQUFDLDJCQUFZLEVBQUU7Z0JBQ3BCLHlCQUFXO2dCQUNYLDZCQUFhO2dCQUNiLG1DQUFnQjtnQkFDaEIsb0NBQWdCO2dCQUNoQix3QkFBZTtnQkFDZixxQkFBYztnQkFDZCxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQzthQUM5RCxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2Jvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJ1xyXG5pbXBvcnQge3Byb3ZpZGV9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7Uk9VVEVSX0JJTkRJTkdTLCBST1VURVJfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCdcclxuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJ1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJ1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gJy4vY29tcG9uZW50cy9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZSdcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvQXBwQ29tcG9uZW50J1xyXG5pbXBvcnQge1NoYXJlZFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvU2hhcmVkU2VydmljZSdcclxuXHJcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcclxuICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgU2hhcmVkU2VydmljZSxcclxuICAgIEFwYXJ0bWVudFNlcnZpY2UsXHJcbiAgICBST1VURVJfUFJPVklERVJTLFxyXG4gICAgQ09SRV9ESVJFQ1RJVkVTLFxyXG4gICAgSFRUUF9QUk9WSURFUlMsXHJcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3l9KVxyXG5dKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
