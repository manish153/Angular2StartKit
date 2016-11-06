System.register(['@angular/http', '@angular/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
                    return this.http.get('./api/businessunits/butype').map((res) => res.json());
                }
                getStats() {
                    console.log('Request reached');
                    return this.http.get('./api/apartments/getstats').map((res) => res.json());
                }
                getDetails(aptType, aptStatus) {
                    console.log('request reached getDetails' + aptType + aptStatus);
                    return this.http.get(`./api/apartments/getdetails/${aptType}/${aptStatus}`).map((res) => res.json());
                }
                getFiles(_idapt) {
                    return this.http.get(`./api/apartments/files/${_idapt}`).map((res) => res.json());
                }
                /*PROFILE SERVICE METHODS*/
                getProfile(userEmail) {
                    return this.http.get(`./api/apartments/getprofile/${userEmail}`).map((res) => res.json());
                }
                // getUsersList(){        
                //     return this.http.get('/api/getusers').map((res: Response) => res.json());   
                // }
                getInternalUsersList() {
                    return this.http.get('/api/getinternalusers').map((res) => res.json());
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
                /*REQUEST SERVICE METHODS*/
                postRequests(data) {
                    return new Promise((resolve, reject) => {
                        this.http.post('/api/newrequest', JSON.stringify(data), {
                            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                        })
                            .map((res) => res.json()).subscribe(data => { resolve(data); }, error => reject(error));
                    });
                }
                getMyRequests(userEmail) {
                    //console.log('getMyTask' +userEmail);
                    return this.http.get(`./api/myrequest/${userEmail}`).map((res) => res.json());
                }
                getAdminRequests() {
                    return this.http.get('./api/adminrequest').map((res) => res.json());
                }
                postConvertToTask(data) {
                    return new Promise((resolve, reject) => {
                        this.http.put(`./api/convertrequest/${data._id}`, JSON.stringify(data), {
                            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                        })
                            .map((res) => res.json()).subscribe(data => { resolve(data); }, error => reject(error));
                    });
                }
                editApt(data) {
                    return new Promise((resolve, reject) => {
                        this.http.put(`./api/editapt/${data._id}`, JSON.stringify(data), {
                            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                        })
                            .map((res) => res.json()).subscribe(data => { resolve(data); }, error => reject(error));
                    });
                }
                searchApt(aptID) {
                    console.log('Inside searchApt ' + aptID);
                    return this.http.get(`./api/apartments/search/${aptID}`).map((res) => res.json());
                    //   return new Promise((resolve,reject)=> {
                    //      this.http.get(`./api/apartments/search/${aptID}`)
                    //         .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error));
                    //  console.log(resolve);
                    //   });  
                }
                searchApt2(aptID) {
                    console.log('Inside searchApt ' + aptID);
                    return this.http.get(`./api/apartments/search/${aptID}`).map((res) => res.json());
                    //   return new Promise((resolve,reject)=> {
                    //      this.http.get(`./api/apartments/search/${aptID}`)
                    //         .map((res: Response) => res.json()).subscribe(data => {resolve(data)}, error => reject(error));
                    //  console.log(resolve);
                    //   });  
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUdJLFlBQVksSUFBVTtvQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQsNkJBQTZCO2dCQUM3QixLQUFLO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFFRCxhQUFhO29CQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDMUYsQ0FBQztnQkFFRCxRQUFRO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBYSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RixDQUFDO2dCQUVELFVBQVUsQ0FBQyxPQUFlLEVBQUUsU0FBaUI7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUUsT0FBTyxHQUFFLFNBQVMsQ0FBQyxDQUFBO29CQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsK0JBQStCLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMs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SSxFQUFFLENBQUMsQ0FBQztvQkFDOUYsNENBQTRDO29CQUM1Qyx5REFBeUQ7b0JBQ3pELDBHQUEwRztvQkFDMUcseUJBQXlCO29CQUNyQixVQUFVO2dCQUNkLENBQUM7Z0JBR0QsVUFBVSxDQUFDLEtBQWM7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUUsS0FBSyxDQUFDLENBQUE7b0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFhLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzlGLDRDQUE0QztvQkFDNUMseURBQXlEO29CQUN6RCwwR0FBMEc7b0JBQzFHLHlCQUF5QjtvQkFDckIsVUFBVTtnQkFDZCxDQUFDO1lBQ0wsQ0FBQztZQTdKRDtnQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtZQUNiLCtDQTRKQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwYXJ0bWVudFNlcnZpY2Uge1xyXG5cclxuICAgIGh0dHA6IEh0dHA7XHJcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgIH1cclxuXHJcbiAgICAvKkFQQVJUTUVOVCBTRVJWSUNFIE1FVEhPRFMqL1xyXG4gICAgZ2V0QlUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy4vYXBpL2J1c2luZXNzdW5pdHMnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFwYXJ0bWVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy4vYXBpL2J1c2luZXNzdW5pdHMvYnV0eXBlJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0U3RhdHMoKXsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgcmVhY2hlZCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2FwaS9hcGFydG1lbnRzL2dldHN0YXRzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXRhaWxzKGFwdFR5cGU6IHN0cmluZywgYXB0U3RhdHVzOiBzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHJlYWNoZWQgZ2V0RGV0YWlscycgK2FwdFR5cGUgK2FwdFN0YXR1cylcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9nZXRkZXRhaWxzLyR7YXB0VHlwZX0vJHthcHRTdGF0dXN9YCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWxlcyhfaWRhcHQ6IHN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC4vYXBpL2FwYXJ0bWVudHMvZmlsZXMvJHtfaWRhcHR9YCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlBST0ZJTEUgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIGdldFByb2ZpbGUodXNlckVtYWlsOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9nZXRwcm9maWxlLyR7dXNlckVtYWlsfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0VXNlcnNMaXN0KCl7ICAgICAgICBcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9nZXR1c2VycycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7ICAgXHJcbiAgICAvLyB9XHJcbiAgIFxyXG4gICAgZ2V0SW50ZXJuYWxVc2Vyc0xpc3QoKXsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL2dldGludGVybmFsdXNlcnMnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByb2ZpbGUoZGF0YTogYW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW4gdGhlIHNlcnZpY2UgbWV0aG9kJyArZGF0YS5faWQpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5wdXQoYC9hcGkvYXBhcnRtZW50cy91cGRhdGVwcm9maWxlLyR7ZGF0YS5faWR9YCxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlRBU0sgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIHBvc3RUYXNrcyhkYXRhOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcclxuICAgICAgICAgdGhpcy5odHRwLnBvc3QoJy9hcGkvbmV3dGFzaycsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkuc3Vic2NyaWJlKGRhdGEgPT4ge3Jlc29sdmUoZGF0YSl9LCBlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy4vYXBpL25ld3Rhc2snKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2soZGF0YTphbnkpeyAgXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLl9pZCk7ICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XHJcbiAgICAgICAgICB0aGlzLmh0dHAucHV0KGAuL2FwaS9uZXd0YXNrLyR7ZGF0YS5faWR9YCxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLHsgXHJcbiAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtyZXNvbHZlKGRhdGEpfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSlcclxuICAgICAgfSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TXlUYXNrKHVzZXJFbWFpbDogc3RyaW5nKSB7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRNeVRhc2snICt1c2VyRW1haWwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAuL2FwaS9teXRhc2svJHt1c2VyRW1haWx9YCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKCkgeyB9XHJcblxyXG4gICAgbWFya0NvbXBsZXRlZChkYXRhOmFueSkgeyBcclxuICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XHJcbiAgICAgICAgICB0aGlzLmh0dHAucHV0KGAuL2FwaS9tYXJrLyR7ZGF0YS5faWR9YCxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLHsgXHJcbiAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtyZXNvbHZlKGRhdGEpfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSlcclxuICAgICAgfSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgLypSRVFVRVNUIFNFUlZJQ0UgTUVUSE9EUyovXHJcbiAgICBwb3N0UmVxdWVzdHMoZGF0YTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XHJcbiAgICAgICAgIHRoaXMuaHR0cC5wb3N0KCcvYXBpL25ld3JlcXVlc3QnLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtyZXNvbHZlKGRhdGEpfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICAgICAgICB9KTsgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldE15UmVxdWVzdHModXNlckVtYWlsOiBzdHJpbmcpIHsgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0TXlUYXNrJyArdXNlckVtYWlsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvbXlyZXF1ZXN0LyR7dXNlckVtYWlsfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRtaW5SZXF1ZXN0cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2FwaS9hZG1pbnJlcXVlc3QnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RDb252ZXJ0VG9UYXNrKGRhdGE6YW55KSB7IFxyXG4gICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcclxuICAgICAgICAgIHRoaXMuaHR0cC5wdXQoYC4vYXBpL2NvbnZlcnRyZXF1ZXN0LyR7ZGF0YS5faWR9YCxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLHsgXHJcbiAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtyZXNvbHZlKGRhdGEpfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSlcclxuICAgICAgfSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgIGVkaXRBcHQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XHJcbiAgICAgICAgIHRoaXMuaHR0cC5wdXQoYC4vYXBpL2VkaXRhcHQvJHtkYXRhLl9pZH1gLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtyZXNvbHZlKGRhdGEpfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICAgICAgICB9KTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEFwdChhcHRJRCA6IHN0cmluZyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgc2VhcmNoQXB0ICcgK2FwdElEKVxyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9zZWFyY2gvJHthcHRJRH1gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcclxuICAgIC8vICAgICAgdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9zZWFyY2gvJHthcHRJRH1gKVxyXG4gICAgLy8gICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoZGF0YSA9PiB7cmVzb2x2ZShkYXRhKX0sIGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKHJlc29sdmUpO1xyXG4gICAgICAgIC8vICAgfSk7ICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2VhcmNoQXB0MihhcHRJRCA6IHN0cmluZyk6T2JzZXJ2YWJsZTxPYmplY3RbXT57XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgc2VhcmNoQXB0ICcgK2FwdElEKVxyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9zZWFyY2gvJHthcHRJRH1gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcclxuICAgIC8vICAgICAgdGhpcy5odHRwLmdldChgLi9hcGkvYXBhcnRtZW50cy9zZWFyY2gvJHthcHRJRH1gKVxyXG4gICAgLy8gICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoZGF0YSA9PiB7cmVzb2x2ZShkYXRhKX0sIGVycm9yID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKHJlc29sdmUpO1xyXG4gICAgICAgIC8vICAgfSk7ICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
