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
                    this.apartmentService.getInternalUsersList().subscribe(res => this.dropdownValues = res);
                    console.log(JSON.stringify(this.data));
                }
                onClickAssign(request) {
                    this.data = request;
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
                      <option *ngFor="#assign of dropdownValues" [ngValue]="assign.Email">{{assign.Email}}</option>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlcXVlc3RzL0FkbWluUmVxdWVzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFNRSxZQUFvQixnQkFBa0MsRUFBUyxRQUE4QjtvQkFBekUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFzQjtnQkFBSSxDQUFDO2dCQUVsRyxRQUFRO29CQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUMsYUFBYSxDQUFDLE9BQU87b0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO29CQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksSUFBRyxPQUFPLENBQUMsQ0FBQzt3QkFDM0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQ3RELENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBOUNEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0JUO29CQUNELFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO2lCQUNsQyxDQUFDOztxQ0FBQTtZQUVGLHlEQXNCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3JlcXVlc3RzL0FkbWluUmVxdWVzdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZFwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuLi9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbnNTZXJ2aWNlfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZG1pbnJlcXVlc3RzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1ncmFwaHMgbWRsLXNoYWRvdy0tMmRwIG1kbC1jb2xvci0td2hpdGUgbWRsLWNlbGwgbWRsLWNlbGwtLTgtY29sXCI+XHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCIjcmVxdWVzdCBvZiBhZG1pbnJlcXVlc3RzXCIgY2xhc3M9XCJkZW1vLXVwZGF0ZXMgbWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tNC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZCBtZGwtY29sb3ItLXRlYWwtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPnt7cmVxdWVzdC50YXNrbmFtZX19PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICAge3tyZXF1ZXN0LnRhc2tkZXNjfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJyZXF1ZXN0LmFzc2lnbmVkdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI2Fzc2lnbiBvZiBkcm9wZG93blZhbHVlc1wiIFtuZ1ZhbHVlXT1cImFzc2lnbi5FbWFpbFwiPnt7YXNzaWduLkVtYWlsfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgKGNsaWNrKT1cIm9uQ2xpY2tBc3NpZ24ocmVxdWVzdClcIj5Bc3NpZ248L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZG1pblJlcXVlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG5cdC8vaXNTZXJ2aWNlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgYWRtaW5yZXF1ZXN0czogT2JqZWN0W107XHJcbiAgcHVibGljIGRyb3Bkb3duVmFsdWVzOiBPYmplY3RbXTtcclxuICBkYXRhOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlLHByaXZhdGUgX3NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7IH1cclxuICAgXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0QWRtaW5SZXF1ZXN0cygpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5hZG1pbnJlcXVlc3RzID0gcmVzKTtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRJbnRlcm5hbFVzZXJzTGlzdCgpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5kcm9wZG93blZhbHVlcyA9IHJlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTsgICAgICAgXHJcbiAgfVxyXG5cclxuICAgIG9uQ2xpY2tBc3NpZ24ocmVxdWVzdCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcXVlc3Q7ICBcclxuICAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UucG9zdENvbnZlcnRUb1Rhc2sodGhpcy5kYXRhKS50aGVuKCgpID0+IHsgICAgIFxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWRtaW5yZXF1ZXN0cy5maW5kSW5kZXgoKHJlcXVlc3QpID0+IHRoaXMuZGF0YSA9PXJlcXVlc3QpO1xyXG4gICAgICAgIHRoaXMuYWRtaW5yZXF1ZXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2Uuc3VjY2VzcygnVGFzayBDcmVhdGVkJywgJ1Rhc2sgQ3JlYXRlZCcpOyBcclxuICAgICAgICB9KTsgICAgXHJcbiAgICB9ICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
