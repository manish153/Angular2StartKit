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
            let ApartmentService = class ApartmentService {
                constructor(http) {
                    this.http = http;
                }
                /*APARTMENT SERVICE METHODS*/
                getBU() {
                    return this.http.get('./api/businessunits').map((res) => res.json());
                }
                getApartments() {
                    return this.http.get('./api/apartments').map((res) => res.json());
                }
                postApartment(data) {
                    return this.http.post('/api/apartments', JSON.stringify(data), {
                        headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                    })
                        .map((res) => res.json()).subscribe();
                }
                /*PROFILE SERVICE METHODS*/
                getProfile(userEmail) {
                    return this.http.get(`./api/apartments/getprofile/${userEmail}`).map((res) => res.json());
                }
                getUsersList() {
                    return this.http.get('/api/getusers').map((res) => res.json());
                }
                updateProfile(data) {
                    console.log('in the service method' + data._id);
                    this.http.put(`/api/apartments/updateprofile/${data._id}`, JSON.stringify(data), {
                        headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                    })
                        .map((res) => res.json()).subscribe();
                }
                /*TASK SERVICE METHODS*/
                postTasks(data) {
                    return new Promise((resolve, reject) => {
                        this.http.post('/api/newtask', JSON.stringify(data), {
                            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                        })
                            .map((res) => res.json()).subscribe(data => { resolve(data); }, error => reject(error));
                    });
                }
                getAllTasks() {
                    return this.http.get('./api/newtask').map((res) => res.json());
                }
                updateTask(data) {
                    console.log(data._id);
                    return new Promise((resolve, reject) => {
                        this.http.put(`./api/newtask/${data._id}`, JSON.stringify(data), {
                            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                        })
                            .map((res) => res.json()).subscribe(data => { resolve(data); }, error => reject(error));
                    });
                }
                getMyTask(userEmail) {
                    console.log('getMyTask' + userEmail);
                    return this.http.get(`./api/mytask/${userEmail}`).map((res) => res.json());
                }
                deleteTask() { }
                markCompleted(data) {
                    return new Promise((resolve, reject) => {
                        this.http.put(`./api/mark/${data._id}`, JSON.stringify(data), {
                            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                        })
                            .map((res) => res.json()).subscribe(data => { resolve(data); }, error => reject(error));
                    });
                }
            };
            ApartmentService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], ApartmentService);
            exports_1("ApartmentService", ApartmentService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdJLFlBQVksSUFBVTtvQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQsNkJBQTZCO2dCQUM3QixLQUFLO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFFRCxhQUFhO29CQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFFRCxhQUFhLENBQUMsSUFBUztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNsQixPQUFPLEVBQUUsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztxQkFDL0QsQ0FBQzt5QkFDRCxHQUFHLENBQUMsQ0FBQyxHQUFhLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hELENBQUM7Z0JBRUQsMkJBQTJCO2dCQUMzQixVQUFVLENBQUMsU0FBaUI7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFhLEtBQUss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LEVBQUUsQ0FBQyxDQUFDO2dCQUN6RixDQUFDO2dCQUVELFVBQVUsS0FBSyxDQUFDO2dCQUVoQixhQUFhLENBQUMsSUFBUTtvQkFDakIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLE1BQU07d0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDOzRCQUNsQixPQUFPLEVBQUUsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQzt5QkFDN0QsQ0FBQzs2QkFDRCxHQUFHLENBQUMsQ0FBQyxHQUFhLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksTUFBSyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO29CQUNoRyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBR0wsQ0FBQztZQXhGRDtnQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtZQUNiLCtDQXVGQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCdcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGFydG1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBodHRwOiBIdHRwO1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgLypBUEFSVE1FTlQgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIGdldEJVKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2FwaS9idXNpbmVzc3VuaXRzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcGFydG1lbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2FwaS9hcGFydG1lbnRzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0QXBhcnRtZW50KGRhdGE6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9hcGFydG1lbnRzJyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlBST0ZJTEUgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIGdldFByb2ZpbGUodXNlckVtYWlsOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9nZXRwcm9maWxlLyR7dXNlckVtYWlsfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcnNMaXN0KCl7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9nZXR1c2VycycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvZmlsZShkYXRhOiBhbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiB0aGUgc2VydmljZSBtZXRob2QnICtkYXRhLl9pZCk7XHJcbiAgICAgICAgdGhpcy5odHRwLnB1dChgL2FwaS9hcGFydG1lbnRzL3VwZGF0ZXByb2ZpbGUvJHtkYXRhLl9pZH1gLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZSgpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qVEFTSyBTRVJWSUNFIE1FVEhPRFMqL1xyXG4gICAgcG9zdFRhc2tzKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT4ge1xyXG4gICAgICAgICB0aGlzLmh0dHAucG9zdCgnL2FwaS9uZXd0YXNrJyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoZGF0YSA9PiB7cmVzb2x2ZShkYXRhKX0sIGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgICAgICAgfSk7ICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnLi9hcGkvbmV3dGFzaycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFzayhkYXRhOmFueSl7ICBcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuX2lkKTsgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcclxuICAgICAgICAgIHRoaXMuaHR0cC5wdXQoYC4vYXBpL25ld3Rhc2svJHtkYXRhLl9pZH1gLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSkseyBcclxuICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkuc3Vic2NyaWJlKGRhdGEgPT4ge3Jlc29sdmUoZGF0YSl9LCBlcnJvciA9PiByZWplY3QoZXJyb3IpKVxyXG4gICAgICB9KTsgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRNeVRhc2sodXNlckVtYWlsOiBzdHJpbmcpIHsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldE15VGFzaycgK3VzZXJFbWFpbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC4vYXBpL215dGFzay8ke3VzZXJFbWFpbH1gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2soKSB7IH1cclxuXHJcbiAgICBtYXJrQ29tcGxldGVkKGRhdGE6YW55KSB7IFxyXG4gICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcclxuICAgICAgICAgIHRoaXMuaHR0cC5wdXQoYC4vYXBpL21hcmsvJHtkYXRhLl9pZH1gLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSkseyBcclxuICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkuc3Vic2NyaWJlKGRhdGEgPT4ge3Jlc29sdmUoZGF0YSl9LCBlcnJvciA9PiByZWplY3QoZXJyb3IpKVxyXG4gICAgICB9KTsgICBcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
