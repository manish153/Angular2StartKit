System.register(['@angular/core', "@angular/router-deprecated", '../app/MaterialDesignLiteUpgradeElement', "../apartment/ApartmentService", 'angular2-notifications'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, MaterialDesignLiteUpgradeElement_1, ApartmentService_1, angular2_notifications_1;
    var CreateRequestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (MaterialDesignLiteUpgradeElement_1_1) {
                MaterialDesignLiteUpgradeElement_1 = MaterialDesignLiteUpgradeElement_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            },
            function (angular2_notifications_1_1) {
                angular2_notifications_1 = angular2_notifications_1_1;
            }],
        execute: function() {
            let CreateRequestComponent = class CreateRequestComponent {
                constructor(apartmentService, router, _service) {
                    this.apartmentService = apartmentService;
                    this.router = router;
                    this._service = _service;
                    //public dropdownValues= ["OPEN","CLOSED"];
                    //public dropdownValues: Object[];
                    this.options = {
                        timeOut: 5000,
                        lastOnBottom: true,
                        clickToClose: true,
                        maxLength: 0,
                        maxStack: 7,
                        showProgressBar: true,
                        pauseOnHover: true
                    };
                    this.data = {};
                }
                ngOnInit() {
                    //this.apartmentService.getUsersList().subscribe(res => this.dropdownValues = res);       
                }
                onSubmit(form) {
                    //console.log(JSON.stringify(this.data));
                    this._service.success('Request Created', 'Request Created');
                    this.apartmentService.postRequests(this.data).then(_ => this.router.navigate(['Requests']));
                    this.data = {};
                }
            };
            CreateRequestComponent = __decorate([
                core_1.Component({
                    selector: 'requests',
                    template: `<div mdl class="mdl-grid demo-content">      
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <h3>Create Service Request </h3>

                <form action="#" (ngSubmit)="onSubmit()">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="taskname" [(ngModel)]="data.taskname"/>
                    <label class="mdl-textfield__label" for="taskname">Title</label>                   
                   </div> <br/>
                  <div class="mdl-textfield mdl-js-textfield">
                    <textarea class="mdl-textfield__input" type="text" rows= "5" id="taskdesc" [(ngModel)]="data.taskdesc"></textarea>
                    <label class="mdl-textfield__label" for="taskdesc">Description</label>
                  </div> <br/>
      
                <br/><br/> <button [routerLink]="['../Requests']" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Cancel</button> 
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Create Task</button>

                </form>          
          </div>       

          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">View All Requests</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                View All Requests 
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a [routerLink]="['../Requests']" class="mdl-button mdl-js-button mdl-js-ripple-effect">View All Requests</a>
              </div>
            </div> 
          <simple-notifications [options]="options"></simple-notifications>        
         </div>
    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES, MaterialDesignLiteUpgradeElement_1.MDL, angular2_notifications_1.SimpleNotificationsComponent],
                    providers: [angular2_notifications_1.NotificationsService]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, router_deprecated_1.Router, angular2_notifications_1.NotificationsService])
            ], CreateRequestComponent);
            exports_1("CreateRequestComponent", CreateRequestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlcXVlc3RzL0NyZWF0ZVJlcXVlc3RDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpREE7Z0JBaUJJLFlBQW9CLGdCQUFrQyxFQUFTLE1BQWMsRUFBUyxRQUE4QjtvQkFBaEcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQXNCO29CQWJwSCwyQ0FBMkM7b0JBQzNDLGtDQUFrQztvQkFFM0IsWUFBTyxHQUFHO3dCQUNYLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFlBQVksRUFBRSxJQUFJO3dCQUNsQixZQUFZLEVBQUUsSUFBSTt3QkFDbEIsU0FBUyxFQUFFLENBQUM7d0JBQ1osUUFBUSxFQUFFLENBQUM7d0JBQ1gsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLFlBQVksRUFBRSxJQUFJO3FCQUN2QixDQUFDO29CQUdGLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUVmLENBQUM7Z0JBRUEsUUFBUTtvQkFDTiwwRkFBMEY7Z0JBRTVGLENBQUM7Z0JBRUYsUUFBUSxDQUFDLElBQUk7b0JBQ2IseUNBQXlDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxRixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZixDQUFDO1lBRUwsQ0FBQztZQTNFRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrQ1Q7b0JBQ0QsVUFBVSxFQUFFLENBQUMscUNBQWlCLEVBQUUsc0NBQUcsRUFBQyxxREFBNEIsQ0FBQztvQkFDakUsU0FBUyxFQUFFLENBQUMsNkNBQW9CLENBQUM7aUJBQ3BDLENBQUM7O3NDQUFBO1lBRUYsMkRBa0NDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcmVxdWVzdHMvQ3JlYXRlUmVxdWVzdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuaW1wb3J0IHtNREx9IGZyb20gJy4uL2FwcC9NYXRlcmlhbERlc2lnbkxpdGVVcGdyYWRlRWxlbWVudCc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuLi9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge1NpbXBsZU5vdGlmaWNhdGlvbnNDb21wb25lbnQsTm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZXF1ZXN0cycsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgbWRsIGNsYXNzPVwibWRsLWdyaWQgZGVtby1jb250ZW50XCI+ICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1ncmFwaHMgbWRsLXNoYWRvdy0tMmRwIG1kbC1jb2xvci0td2hpdGUgbWRsLWNlbGwgbWRsLWNlbGwtLTgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q3JlYXRlIFNlcnZpY2UgUmVxdWVzdCA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGFza25hbWVcIiBbKG5nTW9kZWwpXT1cImRhdGEudGFza25hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBmb3I9XCJ0YXNrbmFtZVwiPlRpdGxlPC9sYWJlbD4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj4gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgdHlwZT1cInRleHRcIiByb3dzPSBcIjVcIiBpZD1cInRhc2tkZXNjXCIgWyhuZ01vZGVsKV09XCJkYXRhLnRhc2tkZXNjXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGZvcj1cInRhc2tkZXNjXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gPGJyLz5cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnIvPjxici8+IDxidXR0b24gW3JvdXRlckxpbmtdPVwiWycuLi9SZXF1ZXN0cyddXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1idXR0b24tLWNvbG9yZWRcIj5DYW5jZWw8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uLS1jb2xvcmVkXCIgdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBUYXNrPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jYXJkcyBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTgtY29sLXRhYmxldCBtZGwtZ3JpZCBtZGwtZ3JpZC0tbm8tc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby11cGRhdGVzIG1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTQtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmQgbWRsLWNvbG9yLS10ZWFsLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj5WaWV3IEFsbCBSZXF1ZXN0czwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWdyZXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICBWaWV3IEFsbCBSZXF1ZXN0cyBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9SZXF1ZXN0cyddXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5WaWV3IEFsbCBSZXF1ZXN0czwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgPHNpbXBsZS1ub3RpZmljYXRpb25zIFtvcHRpb25zXT1cIm9wdGlvbnNcIj48L3NpbXBsZS1ub3RpZmljYXRpb25zPiAgICAgICAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTURMLFNpbXBsZU5vdGlmaWNhdGlvbnNDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbTm90aWZpY2F0aW9uc1NlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlUmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgZGF0YTogYW55O1xyXG5cclxuICAgIC8vcHVibGljIGRyb3Bkb3duVmFsdWVzPSBbXCJPUEVOXCIsXCJDTE9TRURcIl07XHJcbiAgICAvL3B1YmxpYyBkcm9wZG93blZhbHVlczogT2JqZWN0W107XHJcblxyXG4gICAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA1MDAwLFxyXG4gICAgICAgICAgbGFzdE9uQm90dG9tOiB0cnVlLFxyXG4gICAgICAgICAgY2xpY2tUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgbWF4TGVuZ3RoOiAwLFxyXG4gICAgICAgICAgbWF4U3RhY2s6IDcsXHJcbiAgICAgICAgICBzaG93UHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfc2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHtcclxuICAgIHRoaXMuZGF0YSA9IHt9OyAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgLy90aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0VXNlcnNMaXN0KCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmRyb3Bkb3duVmFsdWVzID0gcmVzKTsgICAgICAgXHJcblxyXG4gICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgdGhpcy5fc2VydmljZS5zdWNjZXNzKCdSZXF1ZXN0IENyZWF0ZWQnLCAnUmVxdWVzdCBDcmVhdGVkJyk7ICAgXHJcbiAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UucG9zdFJlcXVlc3RzKHRoaXMuZGF0YSkudGhlbihfPT50aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ1JlcXVlc3RzJ10pKTsgICBcclxuICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
