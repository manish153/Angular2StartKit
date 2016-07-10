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
                /*REQUEST SERVICE METHODS*/
                postRequests(data) {
                    return new Promise((resolve, reject) => {
                        this.http.post('/api/newrequest', JSON.stringify(data), {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdJLFlBQVksSUFBVTtvQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQsNkJBQTZCO2dCQUM3QixLQUFLO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFFRCxhQUFhO29CQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDMUYsQ0FBQztnQkFFRCxRQUFRO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBYSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RixDQUFDO2dCQUVELFVBQVUsQ0FBQyxPQUFlLEVBQUUsU0FBaUI7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUUsT0FBTyxHQUFFLFNBQVMsQ0FBQyxDQUFBO29CQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsK0JBQStCLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMs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Q2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNsQixPQUFPLEVBQUUsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzt5QkFDL0QsQ0FBQzs2QkFDRCxHQUFHLENBQUMsQ0FBQyxHQUFhLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksTUFBSyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNqRyxDQUFDLENBQUMsQ0FBQztnQkFDVCxDQUFDO1lBR0wsQ0FBQztZQXpHRDtnQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtZQUNiLCtDQXdHQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGFydG1lbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBodHRwOiBIdHRwO1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgLypBUEFSVE1FTlQgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIGdldEJVKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2FwaS9idXNpbmVzc3VuaXRzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcGFydG1lbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcuL2FwaS9idXNpbmVzc3VuaXRzL2J1dHlwZScpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFN0YXRzKCl7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IHJlYWNoZWQnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnLi9hcGkvYXBhcnRtZW50cy9nZXRzdGF0cycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGV0YWlscyhhcHRUeXBlOiBzdHJpbmcsIGFwdFN0YXR1czogc3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCByZWFjaGVkIGdldERldGFpbHMnICthcHRUeXBlICthcHRTdGF0dXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC4vYXBpL2FwYXJ0bWVudHMvZ2V0ZGV0YWlscy8ke2FwdFR5cGV9LyR7YXB0U3RhdHVzfWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsZXMoX2lkYXB0OiBzdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAuL2FwaS9hcGFydG1lbnRzL2ZpbGVzLyR7X2lkYXB0fWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLypQUk9GSUxFIFNFUlZJQ0UgTUVUSE9EUyovXHJcbiAgICBnZXRQcm9maWxlKHVzZXJFbWFpbDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC4vYXBpL2FwYXJ0bWVudHMvZ2V0cHJvZmlsZS8ke3VzZXJFbWFpbH1gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJzTGlzdCgpeyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvZ2V0dXNlcnMnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByb2ZpbGUoZGF0YTogYW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW4gdGhlIHNlcnZpY2UgbWV0aG9kJyArZGF0YS5faWQpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5wdXQoYC9hcGkvYXBhcnRtZW50cy91cGRhdGVwcm9maWxlLyR7ZGF0YS5faWR9YCxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlRBU0sgU0VSVklDRSBNRVRIT0RTKi9cclxuICAgIHBvc3RUYXNrcyhkYXRhOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcclxuICAgICAgICAgdGhpcy5odHRwLnBvc3QoJy9hcGkvbmV3dGFzaycsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkuc3Vic2NyaWJlKGRhdGEgPT4ge3Jlc29sdmUoZGF0YSl9LCBlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy4vYXBpL25ld3Rhc2snKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2soZGF0YTphbnkpeyAgXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLl9pZCk7ICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XHJcbiAgICAgICAgICB0aGlzLmh0dHAucHV0KGAuL2FwaS9uZXd0YXNrLyR7ZGF0YS5faWR9YCxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLHsgXHJcbiAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtyZXNvbHZlKGRhdGEpfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSlcclxuICAgICAgfSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TXlUYXNrKHVzZXJFbWFpbDogc3RyaW5nKSB7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRNeVRhc2snICt1c2VyRW1haWwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAuL2FwaS9teXRhc2svJHt1c2VyRW1haWx9YCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKCkgeyB9XHJcblxyXG4gICAgbWFya0NvbXBsZXRlZChkYXRhOmFueSkgeyBcclxuICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XHJcbiAgICAgICAgICB0aGlzLmh0dHAucHV0KGAuL2FwaS9tYXJrLyR7ZGF0YS5faWR9YCxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLHsgXHJcbiAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtyZXNvbHZlKGRhdGEpfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSlcclxuICAgICAgfSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgLypSRVFVRVNUIFNFUlZJQ0UgTUVUSE9EUyovXHJcbiAgICBwb3N0UmVxdWVzdHMoZGF0YTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XHJcbiAgICAgICAgIHRoaXMuaHR0cC5wb3N0KCcvYXBpL25ld3JlcXVlc3QnLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtyZXNvbHZlKGRhdGEpfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICAgICAgICB9KTsgIFxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
