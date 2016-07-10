System.register(['@angular/core', "@angular/router-deprecated", '../app/MaterialDesignLiteUpgradeElement', "../apartment/ApartmentService"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, MaterialDesignLiteUpgradeElement_1, ApartmentService_1;
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
            }],
        execute: function() {
            let CreateRequestComponent = class CreateRequestComponent {
                //public dropdownValues= ["OPEN","CLOSED"];
                //public dropdownValues: Object[];
                constructor(apartmentService, router) {
                    this.apartmentService = apartmentService;
                    this.router = router;
                    this.data = {};
                }
                ngOnInit() {
                    //this.apartmentService.getUsersList().subscribe(res => this.dropdownValues = res);       
                }
                onSubmit(form) {
                    console.log(JSON.stringify(this.data));
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
      
                <br/><br/> <button [routerLink]="['../Requests']" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Cancel</button> 
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
         </div>
    `,
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES, MaterialDesignLiteUpgradeElement_1.MDL]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, router_deprecated_1.Router])
            ], CreateRequestComponent);
            exports_1("CreateRequestComponent", CreateRequestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlcXVlc3RzL0NyZWF0ZVJlcXVlc3RDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4Q0E7Z0JBSUksMkNBQTJDO2dCQUMzQyxrQ0FBa0M7Z0JBRWxDLFlBQW9CLGdCQUFrQyxFQUFTLE1BQWM7b0JBQXpELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFDN0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2YsQ0FBQztnQkFFQSxRQUFRO29CQUNOLDBGQUEwRjtnQkFDNUYsQ0FBQztnQkFFRixRQUFRLENBQUMsSUFBSTtvQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFGLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLENBQUM7WUFFTCxDQUFDO1lBNUREO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUNUO29CQUNELFVBQVUsRUFBRSxDQUFDLHFDQUFpQixFQUFFLHNDQUFHLENBQUM7aUJBQ3ZDLENBQUM7O3NDQUFBO1lBRUYsMkRBcUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcmVxdWVzdHMvQ3JlYXRlUmVxdWVzdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuaW1wb3J0IHtNREx9IGZyb20gJy4uL2FwcC9NYXRlcmlhbERlc2lnbkxpdGVVcGdyYWRlRWxlbWVudCc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuLi9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZXF1ZXN0cycsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgbWRsIGNsYXNzPVwibWRsLWdyaWQgZGVtby1jb250ZW50XCI+ICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1ncmFwaHMgbWRsLXNoYWRvdy0tMmRwIG1kbC1jb2xvci0td2hpdGUgbWRsLWNlbGwgbWRsLWNlbGwtLTgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q3JlYXRlIFNlcnZpY2UgUmVxdWVzdCA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGFza25hbWVcIiBbKG5nTW9kZWwpXT1cImRhdGEudGFza25hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBmb3I9XCJ0YXNrbmFtZVwiPlRpdGxlPC9sYWJlbD4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj4gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgdHlwZT1cInRleHRcIiByb3dzPSBcIjVcIiBpZD1cInRhc2tkZXNjXCIgWyhuZ01vZGVsKV09XCJkYXRhLnRhc2tkZXNjXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGZvcj1cInRhc2tkZXNjXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gPGJyLz5cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnIvPjxici8+IDxidXR0b24gW3JvdXRlckxpbmtdPVwiWycuLi9SZXF1ZXN0cyddXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1idXR0b24tLWNvbG9yZWRcIiB0eXBlPVwic3VibWl0XCI+Q2FuY2VsPC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWJ1dHRvbi0tY29sb3JlZFwiIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgVGFzazwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT4gICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2FyZHMgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS04LWNvbC10YWJsZXQgbWRsLWdyaWQgbWRsLWdyaWQtLW5vLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+VmlldyBBbGwgUmVxdWVzdHM8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgVmlldyBBbGwgUmVxdWVzdHMgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vUmVxdWVzdHMnXVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+VmlldyBBbGwgUmVxdWVzdHM8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE1ETF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVSZXF1ZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBkYXRhOiBhbnk7XHJcblxyXG4gICAgLy9wdWJsaWMgZHJvcGRvd25WYWx1ZXM9IFtcIk9QRU5cIixcIkNMT1NFRFwiXTtcclxuICAgIC8vcHVibGljIGRyb3Bkb3duVmFsdWVzOiBPYmplY3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UscHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5kYXRhID0ge307ICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgLy90aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0VXNlcnNMaXN0KCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmRyb3Bkb3duVmFsdWVzID0gcmVzKTsgICAgICAgXHJcbiAgICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm0pIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpOyAgICBcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5wb3N0UmVxdWVzdHModGhpcy5kYXRhKS50aGVuKF89PnRoaXMucm91dGVyLm5hdmlnYXRlKFsnUmVxdWVzdHMnXSkpOyAgIFxyXG4gICAgdGhpcy5kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
