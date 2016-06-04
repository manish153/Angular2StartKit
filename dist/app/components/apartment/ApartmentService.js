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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdJLFlBQVksSUFBVTtvQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQsNkJBQTZCO2dCQUM3QixhQUFhO29CQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFFRCxhQUFhLENBQUMsSUFBUztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNsQixPQUFPLEVBQUUsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztxQkFDL0QsQ0FBQzt5QkFDRCxHQUFHLENBQUMsQ0FBQyxHQUFhLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hELENBQUM7Z0JBRUQsMkJBQTJCO2dCQUMzQixVQUFVLENBQUMsU0FBaUI7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFhLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3hHLENBQUM7Z0JBRUQsWUFBWTtvQkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBYSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUVELHdCQUF3QjtnQkFDeEIsU0FBUyxDQUFDLElBQVM7b0JBQ2YsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLE1BQU07d0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbEIsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7eUJBQy9ELENBQUM7NkJBQ0QsR0FBRyxDQUFDLENBQUMsR0FBYSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQUssT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDakcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQztnQkFFRCxXQUFXO29CQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFhLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzdFLENBQUM7Z0JBRUQsVUFBVSxDQUFDLElBQVE7b0JBQ2YsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLE1BQU07d0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUM7NEJBQ2xCLE9BQU8sRUFBRSxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDO3lCQUM3RCxDQUFDOzZCQUNELEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFBLENBQUMsRUFBRSxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7b0JBQ2hHLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsU0FBUyxDQUFDLFNBQWlCO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRSxTQUFTLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDekYsQ0FBQztnQkFFRCxVQUFVLEtBQUssQ0FBQztnQkFFaEIsYUFBYSxDQUFDLElBQVE7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBQyxNQUFNO3dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQzs0QkFDbEIsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLENBQUM7eUJBQzdELENBQUM7NkJBQ0QsR0FBRyxDQUFDLENBQUMsR0FBYSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQUssT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtvQkFDaEcsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUdMLENBQUM7WUF6RUQ7Z0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7WUFDYiwrQ0F3RUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBhcnRtZW50U2VydmljZSB7XHJcblxyXG4gICAgaHR0cDogSHR0cDtcclxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qQVBBUlRNRU5UIFNFUlZJQ0UgTUVUSE9EUyovXHJcbiAgICBnZXRBcGFydG1lbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2FwaS9hcGFydG1lbnRzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0QXBhcnRtZW50KGRhdGE6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9hcGFydG1lbnRzJyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlBST0ZJTEUgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIGdldFByb2ZpbGUodXNlckVtYWlsOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9nZXRwcm9maWxlLyR7dXNlckVtYWlsfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcnNMaXN0KCl7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9nZXR1c2VycycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgLypUQVNLIFNFUlZJQ0UgTUVUSE9EUyovXHJcbiAgICBwb3N0VGFza3MoZGF0YTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XHJcbiAgICAgICAgIHRoaXMuaHR0cC5wb3N0KCcvYXBpL25ld3Rhc2snLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtyZXNvbHZlKGRhdGEpfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICAgICAgICB9KTsgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2FwaS9uZXd0YXNrJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYXNrKGRhdGE6YW55KXsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT4ge1xyXG4gICAgICAgICAgdGhpcy5odHRwLnB1dChgLi9hcGkvbmV3dGFzay8ke2RhdGEuX2lkfWAsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSx7IFxyXG4gICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoZGF0YSA9PiB7cmVzb2x2ZShkYXRhKX0sIGVycm9yID0+IHJlamVjdChlcnJvcikpXHJcbiAgICAgIH0pOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldE15VGFzayh1c2VyRW1haWw6IHN0cmluZykgeyBcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0TXlUYXNrJyArdXNlckVtYWlsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvbXl0YXNrLyR7dXNlckVtYWlsfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzaygpIHsgfVxyXG5cclxuICAgIG1hcmtDb21wbGV0ZWQoZGF0YTphbnkpIHsgXHJcbiAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT4ge1xyXG4gICAgICAgICAgdGhpcy5odHRwLnB1dChgLi9hcGkvbWFyay8ke2RhdGEuX2lkfWAsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSx7IFxyXG4gICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoZGF0YSA9PiB7cmVzb2x2ZShkYXRhKX0sIGVycm9yID0+IHJlamVjdChlcnJvcikpXHJcbiAgICAgIH0pOyAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
