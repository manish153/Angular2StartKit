System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var ApartmentService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            ApartmentService = (function () {
                function ApartmentService(http) {
                    this.http = http;
                }
                /*APARTMENT SERVICE METHODS*/
                ApartmentService.prototype.getApartments = function () {
                    return this.http.get('./api/apartments').map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.postApartment = function (data) {
                    return this.http.post('/api/apartments', JSON.stringify(data), {
                        headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                    })
                        .map(function (res) { return res.json(); }).subscribe();
                };
                /*PROFILE SERVICE METHODS*/
                ApartmentService.prototype.getProfile = function (userEmail) {
                    return this.http.get("./api/apartments/getprofile/" + userEmail).map(function (res) { return res.json(); });
                };
                /*TASK SERVICE METHODS*/
                ApartmentService.prototype.postTasks = function (data) {
                    return this.http.post('/api/newtask', JSON.stringify(data), {
                        headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                    })
                        .map(function (res) { return res.json(); }).subscribe();
                };
                ApartmentService.prototype.getAllTasks = function () {
                    return this.http.get('./api/newtask').map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.updateTask = function (data) {
                    console.log(data._id);
                    return this.http.put("./api/newtask/" + data._id, JSON.stringify(data), { headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                    })
                        .map(function (res) { return res.json(); }).subscribe();
                };
                ApartmentService.prototype.getMyTask = function () { };
                ApartmentService.prototype.deleteTask = function () { };
                ApartmentService.prototype.markCompleted = function () { };
                ApartmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApartmentService);
                return ApartmentService;
            }());
            exports_1("ApartmentService", ApartmentService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdJLDBCQUFZLElBQVU7b0JBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELDZCQUE2QjtnQkFDN0Isd0NBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hGLENBQUM7Z0JBRUQsd0NBQWEsR0FBYixVQUFjLElBQVM7b0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDbEIsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7cUJBQy9ELENBQUM7eUJBQ0QsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN4RCxDQUFDO2dCQUVELDJCQUEyQjtnQkFDM0IscUNBQVUsR0FBVixVQUFXLFNBQWlCO29CQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUNBQStCLFNBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDeEcsQ0FBQztnQkFHRCx3QkFBd0I7Z0JBQ3hCLG9DQUFTLEdBQVQsVUFBVSxJQUFTO29CQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ2xCLE9BQU8sRUFBRSxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO3FCQUMvRCxDQUFDO3lCQUNELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDeEQsQ0FBQztnQkFFRCxzQ0FBVyxHQUFYO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzdFLENBQUM7Z0JBRUQscUNBQVUsR0FBVixVQUFXLElBQVE7b0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsSUFBSSxDQUFDLEdBQUssRUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDO3FCQUNqRixDQUFDO3lCQUNELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEQsQ0FBQztnQkFFRCxvQ0FBUyxHQUFULGNBQWMsQ0FBQztnQkFFZixxQ0FBVSxHQUFWLGNBQWUsQ0FBQztnQkFFaEIsd0NBQWEsR0FBYixjQUFrQixDQUFDO2dCQXBEdkI7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBdURiLHVCQUFDO1lBQUQsQ0F0REEsQUFzREMsSUFBQTtZQXRERCwrQ0FzREMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBhcnRtZW50U2VydmljZSB7XHJcblxyXG4gICAgaHR0cDogSHR0cDtcclxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qQVBBUlRNRU5UIFNFUlZJQ0UgTUVUSE9EUyovXHJcbiAgICBnZXRBcGFydG1lbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2FwaS9hcGFydG1lbnRzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0QXBhcnRtZW50KGRhdGE6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9hcGFydG1lbnRzJyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlBST0ZJTEUgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIGdldFByb2ZpbGUodXNlckVtYWlsOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9nZXRwcm9maWxlLyR7dXNlckVtYWlsfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qVEFTSyBTRVJWSUNFIE1FVEhPRFMqL1xyXG4gICAgcG9zdFRhc2tzKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9uZXd0YXNrJyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnLi9hcGkvbmV3dGFzaycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFzayhkYXRhOmFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5faWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAuL2FwaS9uZXd0YXNrLyR7ZGF0YS5faWR9YCxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLHsgaGVhZGVyczogbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoKTsgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRNeVRhc2soKSB7IH1cclxuXHJcbiAgICBkZWxldGVUYXNrKCkgeyB9XHJcblxyXG4gICAgbWFya0NvbXBsZXRlZCgpIHsgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
