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
                ApartmentService.prototype.getUsersList = function () {
                    return this.http.get('/api/getusers').map(function (res) { return res.json(); });
                };
                /*TASK SERVICE METHODS*/
                ApartmentService.prototype.postTasks = function (data) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.post('/api/newtask', JSON.stringify(data), {
                            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                        })
                            .map(function (res) { return res.json(); }).subscribe(function (data) { resolve(data); }, function (error) { return reject(error); });
                    });
                };
                ApartmentService.prototype.getAllTasks = function () {
                    return this.http.get('./api/newtask').map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.updateTask = function (data) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.put("./api/newtask/" + data._id, JSON.stringify(data), {
                            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                        })
                            .map(function (res) { return res.json(); }).subscribe(function (data) { resolve(data); }, function (error) { return reject(error); });
                    });
                };
                ApartmentService.prototype.getMyTask = function (userEmail) {
                    console.log('getMyTask' + userEmail);
                    return this.http.get("./api/mytask/" + userEmail).map(function (res) { return res.json(); });
                };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdJLDBCQUFZLElBQVU7b0JBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELDZCQUE2QjtnQkFDN0Isd0NBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hGLENBQUM7Z0JBRUQsd0NBQWEsR0FBYixVQUFjLElBQVM7b0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDbEIsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7cUJBQy9ELENBQUM7eUJBQ0QsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN4RCxDQUFDO2dCQUVELDJCQUEyQjtnQkFDM0IscUNBQVUsR0FBVixVQUFXLFNBQWlCO29CQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUNBQStCLFNBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDeEcsQ0FBQztnQkFFRCx1Q0FBWSxHQUFaO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzdFLENBQUM7Z0JBRUQsd0JBQXdCO2dCQUN4QixvQ0FBUyxHQUFULFVBQVUsSUFBUztvQkFBbkIsaUJBUUM7b0JBUEcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07d0JBQ2pDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbEIsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7eUJBQy9ELENBQUM7NkJBQ0QsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7b0JBQ2pHLENBQUMsQ0FBQyxDQUFDO2dCQUNULENBQUM7Z0JBRUQsc0NBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUVELHFDQUFVLEdBQVYsVUFBVyxJQUFRO29CQUFuQixpQkFTQztvQkFQRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUMsTUFBTTt3QkFDaEMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQWlCLElBQUksQ0FBQyxHQUFLLEVBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUM7NEJBQ2xCLE9BQU8sRUFBRSxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDO3lCQUM3RCxDQUFDOzZCQUNELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFBO29CQUNoRyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELG9DQUFTLEdBQVQsVUFBVSxTQUFpQjtvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsU0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN6RixDQUFDO2dCQUVELHFDQUFVLEdBQVYsY0FBZSxDQUFDO2dCQUVoQix3Q0FBYSxHQUFiLGNBQWtCLENBQUM7Z0JBL0R2QjtvQkFBQyxpQkFBVSxFQUFFOztvQ0FBQTtnQkFrRWIsdUJBQUM7WUFBRCxDQWpFQSxBQWlFQyxJQUFBO1lBakVELCtDQWlFQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCdcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGFydG1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBodHRwOiBIdHRwO1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgLypBUEFSVE1FTlQgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIGdldEFwYXJ0bWVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy4vYXBpL2FwYXJ0bWVudHMnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RBcGFydG1lbnQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL2FwYXJ0bWVudHMnLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qUFJPRklMRSBTRVJWSUNFIE1FVEhPRFMqL1xyXG4gICAgZ2V0UHJvZmlsZSh1c2VyRW1haWw6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAuL2FwaS9hcGFydG1lbnRzL2dldHByb2ZpbGUvJHt1c2VyRW1haWx9YCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2Vyc0xpc3QoKXsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL2dldHVzZXJzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTsgICBcclxuICAgIH1cclxuXHJcbiAgICAvKlRBU0sgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIHBvc3RUYXNrcyhkYXRhOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcclxuICAgICAgICAgdGhpcy5odHRwLnBvc3QoJy9hcGkvbmV3dGFzaycsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkuc3Vic2NyaWJlKGRhdGEgPT4ge3Jlc29sdmUoZGF0YSl9LCBlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy4vYXBpL25ld3Rhc2snKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2soZGF0YTphbnkpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT4ge1xyXG4gICAgICAgICAgdGhpcy5odHRwLnB1dChgLi9hcGkvbmV3dGFzay8ke2RhdGEuX2lkfWAsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSx7IFxyXG4gICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoZGF0YSA9PiB7cmVzb2x2ZShkYXRhKX0sIGVycm9yID0+IHJlamVjdChlcnJvcikpXHJcbiAgICAgIH0pOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldE15VGFzayh1c2VyRW1haWw6IHN0cmluZykgeyBcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0TXlUYXNrJyArdXNlckVtYWlsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvbXl0YXNrLyR7dXNlckVtYWlsfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzaygpIHsgfVxyXG5cclxuICAgIG1hcmtDb21wbGV0ZWQoKSB7IH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
