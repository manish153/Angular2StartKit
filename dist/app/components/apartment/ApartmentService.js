System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1) {
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
                ApartmentService.prototype.getEntries = function () {
                    return this.http.get('./api/apartments').map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.getProfile = function (userEmail) {
                    return this.http.get("./api/apartments/getprofile/" + userEmail).map(function (res) { return res.json(); });
                };
                ApartmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApartmentService);
                return ApartmentService;
            })();
            exports_1("ApartmentService", ApartmentService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkFwYXJ0bWVudFNlcnZpY2UiLCJBcGFydG1lbnRTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXBhcnRtZW50U2VydmljZS5nZXRFbnRyaWVzIiwiQXBhcnRtZW50U2VydmljZS5nZXRQcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBSUlBLDBCQUFZQSxJQUFVQTtvQkFDbEJDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBRURELHFDQUFVQSxHQUFWQTtvQkFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFDQSxHQUFhQSxJQUFLQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQTtnQkFDaEZBLENBQUNBO2dCQUVERixxQ0FBVUEsR0FBVkEsVUFBV0EsU0FBaUJBO29CQUN6QkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUNBQStCQSxTQUFXQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFDQSxHQUFhQSxJQUFLQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQTtnQkFDdkdBLENBQUNBO2dCQWRMSDtvQkFBQ0EsaUJBQVVBLEVBQUVBOztxQ0FlWkE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCwrQ0FlQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCdcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGFydG1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBodHRwOiBIdHRwO1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW50cmllcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnLi9hcGkvYXBhcnRtZW50cycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvZmlsZSh1c2VyRW1haWwgOnN0cmluZyl7XHJcbiAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9nZXRwcm9maWxlLyR7dXNlckVtYWlsfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9IFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
