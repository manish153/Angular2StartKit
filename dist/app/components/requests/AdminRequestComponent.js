System.register(['@angular/core', "@angular/router-deprecated", "../apartment/ApartmentService", 'angular2-notifications'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, ApartmentService_1, angular2_notifications_1;
    var AdminRequestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            },
            function (angular2_notifications_1_1) {
                angular2_notifications_1 = angular2_notifications_1_1;
            }],
        execute: function() {
            let AdminRequestComponent = class AdminRequestComponent {
                constructor(apartmentService, _service) {
                    this.apartmentService = apartmentService;
                    this._service = _service;
                }
                ngOnInit() {
                    this.apartmentService.getAdminRequests().subscribe(res => this.adminrequests = res);
                    this.apartmentService.getUsersList().subscribe(res => this.dropdownValues = res);
                }
                onClickAssign(request) {
                    this.data = request;
                    //console.log(JSON.stringify(this.data));
                    this.apartmentService.postConvertToTask(this.data).then(() => {
                        var index = this.adminrequests.findIndex((request) => this.data == request);
                        this.adminrequests.splice(index, 1);
                        this._service.success('Task Created', 'Task Created');
                    });
                }
            };
            AdminRequestComponent = __decorate([
                core_1.Component({
                    selector: 'adminrequests',
                    template: `
       <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
        <div *ngFor="#request of adminrequests" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
        
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{request.taskname}}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
               {{request.taskdesc}}
              </div>
              <div class="mdl-card__actions mdl-card--border">
                 <select [(ngModel)]="request.assignedto">
                      <option *ngFor="#assign of dropdownValues" [ngValue]="assign.userEmail">{{assign.userEmail}}</option>
                  </select>
                  <a class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="onClickAssign(request)">Assign</a>
              </div>     
        </div>
       </div>
    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, angular2_notifications_1.NotificationsService])
            ], AdminRequestComponent);
            exports_1("AdminRequestComponent", AdminRequestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlcXVlc3RzL0FkbWluUmVxdWVzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFNRSxZQUFvQixnQkFBa0MsRUFBUyxRQUE4QjtvQkFBekUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFzQjtnQkFBSSxDQUFDO2dCQUVsRyxRQUFRO29CQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFFQyxhQUFhLENBQUMsT0FBTztvQkFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7b0JBQ3BCLHlDQUF5QztvQkFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ3hELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUcsT0FBTyxDQUFDLENBQUM7d0JBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUN0RCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQTlDRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtCVDtvQkFDRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7cUNBQUE7WUFFRix5REFzQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9yZXF1ZXN0cy9BZG1pblJlcXVlc3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vYXBhcnRtZW50L0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuaW1wb3J0IHtOb3RpZmljYXRpb25zU2VydmljZX0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRtaW5yZXF1ZXN0cycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgPGRpdiBjbGFzcz1cImRlbW8tZ3JhcGhzIG1kbC1zaGFkb3ctLTJkcCBtZGwtY29sb3ItLXdoaXRlIG1kbC1jZWxsIG1kbC1jZWxsLS04LWNvbFwiPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwiI3JlcXVlc3Qgb2YgYWRtaW5yZXF1ZXN0c1wiIGNsYXNzPVwiZGVtby11cGRhdGVzIG1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTQtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmQgbWRsLWNvbG9yLS10ZWFsLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj57e3JlcXVlc3QudGFza25hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWdyZXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgIHt7cmVxdWVzdC50YXNrZGVzY319XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwicmVxdWVzdC5hc3NpZ25lZHRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cIiNhc3NpZ24gb2YgZHJvcGRvd25WYWx1ZXNcIiBbbmdWYWx1ZV09XCJhc3NpZ24udXNlckVtYWlsXCI+e3thc3NpZ24udXNlckVtYWlsfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgKGNsaWNrKT1cIm9uQ2xpY2tBc3NpZ24ocmVxdWVzdClcIj5Bc3NpZ248L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZG1pblJlcXVlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG5cdC8vaXNTZXJ2aWNlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgYWRtaW5yZXF1ZXN0czogT2JqZWN0W107XHJcbiAgcHVibGljIGRyb3Bkb3duVmFsdWVzOiBPYmplY3RbXTtcclxuICBkYXRhOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlLHByaXZhdGUgX3NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7IH1cclxuICAgXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0QWRtaW5SZXF1ZXN0cygpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5hZG1pbnJlcXVlc3RzID0gcmVzKTtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRVc2Vyc0xpc3QoKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuZHJvcGRvd25WYWx1ZXMgPSByZXMpOyAgICAgICBcclxuICB9XHJcblxyXG4gICAgb25DbGlja0Fzc2lnbihyZXF1ZXN0KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gcmVxdWVzdDsgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLnBvc3RDb252ZXJ0VG9UYXNrKHRoaXMuZGF0YSkudGhlbigoKSA9PiB7ICAgICBcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFkbWlucmVxdWVzdHMuZmluZEluZGV4KChyZXF1ZXN0KSA9PiB0aGlzLmRhdGEgPT1yZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLmFkbWlucmVxdWVzdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3MoJ1Rhc2sgQ3JlYXRlZCcsICdUYXNrIENyZWF0ZWQnKTsgXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgfSAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
