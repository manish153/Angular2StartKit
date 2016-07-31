System.register(['@angular/core', "@angular/router-deprecated", "../apartment/ApartmentService"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, ApartmentService_1;
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
            }],
        execute: function() {
            let AdminRequestComponent = class AdminRequestComponent {
                constructor(apartmentService) {
                    this.apartmentService = apartmentService;
                }
                ngOnInit() {
                    this.apartmentService.getAdminRequests().subscribe(res => this.adminrequests = res);
                    this.apartmentService.getUsersList().subscribe(res => this.dropdownValues = res);
                }
                onClickAssign(request) {
                    this.data = request;
                    console.log(JSON.stringify(this.data));
                    this.apartmentService.postConvertToTask(this.data).then(() => {
                        var index = this.adminrequests.findIndex((request) => this.data == request);
                        this.adminrequests.splice(index, 1);
                    });
                }
            };
            AdminRequestComponent = __decorate([
                core_1.Component({
                    selector: 'adminrequests',
                    styleUrls: ['../app/assets/app.css'],
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
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService])
            ], AdminRequestComponent);
            exports_1("AdminRequestComponent", AdminRequestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlcXVlc3RzL0FkbWluUmVxdWVzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFNRSxZQUFvQixnQkFBa0M7b0JBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7Z0JBQUksQ0FBQztnQkFFM0QsUUFBUTtvQkFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ3BGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBRUMsYUFBYSxDQUFDLE9BQU87b0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUN4RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFHLE9BQU8sQ0FBQyxDQUFDO3dCQUMzRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBOUNEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtCVDtvQkFDRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7cUNBQUE7WUFFRix5REFxQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9yZXF1ZXN0cy9BZG1pblJlcXVlc3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vYXBhcnRtZW50L0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZG1pbnJlcXVlc3RzJyxcclxuICAgIHN0eWxlVXJsczogWycuLi9hcHAvYXNzZXRzL2FwcC5jc3MnXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1ncmFwaHMgbWRsLXNoYWRvdy0tMmRwIG1kbC1jb2xvci0td2hpdGUgbWRsLWNlbGwgbWRsLWNlbGwtLTgtY29sXCI+XHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCIjcmVxdWVzdCBvZiBhZG1pbnJlcXVlc3RzXCIgY2xhc3M9XCJkZW1vLXVwZGF0ZXMgbWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tNC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZCBtZGwtY29sb3ItLXRlYWwtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPnt7cmVxdWVzdC50YXNrbmFtZX19PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICAge3tyZXF1ZXN0LnRhc2tkZXNjfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJyZXF1ZXN0LmFzc2lnbmVkdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI2Fzc2lnbiBvZiBkcm9wZG93blZhbHVlc1wiIFtuZ1ZhbHVlXT1cImFzc2lnbi51c2VyRW1haWxcIj57e2Fzc2lnbi51c2VyRW1haWx9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIiAoY2xpY2spPVwib25DbGlja0Fzc2lnbihyZXF1ZXN0KVwiPkFzc2lnbjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluUmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcblx0Ly9pc1NlcnZpY2U6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBhZG1pbnJlcXVlc3RzOiBPYmplY3RbXTtcclxuICBwdWJsaWMgZHJvcGRvd25WYWx1ZXM6IE9iamVjdFtdO1xyXG4gIGRhdGE6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UpIHsgfVxyXG4gICBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRBZG1pblJlcXVlc3RzKCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmFkbWlucmVxdWVzdHMgPSByZXMpO1xyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmdldFVzZXJzTGlzdCgpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5kcm9wZG93blZhbHVlcyA9IHJlcyk7ICAgICAgIFxyXG4gIH1cclxuXHJcbiAgICBvbkNsaWNrQXNzaWduKHJlcXVlc3QpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSByZXF1ZXN0OyAgXHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLnBvc3RDb252ZXJ0VG9UYXNrKHRoaXMuZGF0YSkudGhlbigoKSA9PiB7ICAgICBcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFkbWlucmVxdWVzdHMuZmluZEluZGV4KChyZXF1ZXN0KSA9PiB0aGlzLmRhdGEgPT1yZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLmFkbWlucmVxdWVzdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9KTsgICAgXHJcbiAgICB9ICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
