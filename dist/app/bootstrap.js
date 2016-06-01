System.register(['angular2/platform/browser', 'angular2/core', 'angular2/common', 'angular2/router', 'angular2/platform/common', 'angular2/http', './services/AuthService', './components/apartment/ApartmentService', './components/app/AppComponent', './services/SharedService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, common_1, router_1, common_2, http_1, AuthService_1, ApartmentService_1, AppComponent_1, SharedService_1;
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
            function (common_2_1) {
                common_2 = common_2_1;
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
            browser_1.bootstrap(AppComponent_1.AppComponent, [
                AuthService_1.AuthService,
                SharedService_1.SharedService,
                ApartmentService_1.ApartmentService,
                router_1.ROUTER_PROVIDERS,
                common_1.CORE_DIRECTIVES,
                http_1.HTTP_PROVIDERS,
                core_1.provide(common_2.LocationStrategy, { useClass: common_2.PathLocationStrategy })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBLG1CQUFTLENBQUMsMkJBQVksRUFBRTtnQkFDcEIseUJBQVc7Z0JBQ1gsNkJBQWE7Z0JBQ2IsbUNBQWdCO2dCQUNoQix5QkFBZ0I7Z0JBQ2hCLHdCQUFlO2dCQUNmLHFCQUFjO2dCQUNkLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDO2FBQzlELENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlcidcclxuaW1wb3J0IHtwcm92aWRlfSAgICBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJ1xyXG5pbXBvcnQge1JPVVRFUl9CSU5ESU5HUywgUk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb24nXHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnXHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvQXV0aFNlcnZpY2UnXHJcbmltcG9ydCB7QXBhcnRtZW50U2VydmljZX0gZnJvbSAnLi9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlJ1xyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQnXHJcbmltcG9ydCB7U2hhcmVkU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9TaGFyZWRTZXJ2aWNlJ1xyXG5cclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xyXG4gICAgQXV0aFNlcnZpY2UsXHJcbiAgICBTaGFyZWRTZXJ2aWNlLFxyXG4gICAgQXBhcnRtZW50U2VydmljZSxcclxuICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICBDT1JFX0RJUkVDVElWRVMsXHJcbiAgICBIVFRQX1BST1ZJREVSUyxcclxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBQYXRoTG9jYXRpb25TdHJhdGVneX0pXHJcbl0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
