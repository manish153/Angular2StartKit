System.register(['angular2/core', "angular2/router", '../app/MaterialDesignLiteUpgradeElement', "../apartment/ApartmentService"], function(exports_1, context_1) {
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
    var core_1, router_1, MaterialDesignLiteUpgradeElement_1, ApartmentService_1;
    var CreateTaskComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (MaterialDesignLiteUpgradeElement_1_1) {
                MaterialDesignLiteUpgradeElement_1 = MaterialDesignLiteUpgradeElement_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            }],
        execute: function() {
            let CreateTaskComponent = class CreateTaskComponent {
                constructor(apartmentService, router) {
                    this.apartmentService = apartmentService;
                    this.router = router;
                    this.data = {};
                }
                ngOnInit() {
                    this.apartmentService.getUsersList().subscribe(res => this.dropdownValues = res);
                }
                onSubmit(form) {
                    console.log(JSON.stringify(this.data));
                    this.apartmentService.postTasks(this.data).then(_ => this.router.navigate(['Tasks']));
                    this.data = {};
                }
            };
            CreateTaskComponent = __decorate([
                core_1.Component({
                    selector: 'tasks',
                    template: `<div mdl class="mdl-grid demo-content">
      
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <h3>Create Task Page</h3>

                <form action="#" (ngSubmit)="onSubmit()">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="taskname" [(ngModel)]="data.taskname"/>
                    <label class="mdl-textfield__label" for="taskname">Task Name</label>                   
                   </div> <br/>
                  <div class="mdl-textfield mdl-js-textfield">
                    <textarea class="mdl-textfield__input" type="text" rows= "5" id="taskdesc" [(ngModel)]="data.taskdesc"></textarea>
                    <label class="mdl-textfield__label" for="taskdesc">Task Description</label>
                  </div> <br/>
                 <select [(ngModel)]="data.assignedto">
                      <option *ngFor="#assign of dropdownValues" [ngValue]="assign.userEmail">{{assign.userEmail}}</option>
                  </select>
      
                <br/><br/>  <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Create Task</button>
                </form>          
          </div>       

          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">View Tasks</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                View Existing Tasks  
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a [routerLink]="['../Tasks']" class="mdl-button mdl-js-button mdl-js-ripple-effect">My Tasks</a>
              </div>
            </div>
            <div class="demo-separator mdl-cell--1-col"></div>
            <div class="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__supporting-text mdl-color-text--blue-grey-50">
                <h3>View options</h3>
                <ul>
                  <li>
                    <label for="chkbox1" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox1" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Click per object</span>
                    </label>
                  </li>
                  <li>
                    <label for="chkbox2" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox2" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Views per object</span>
                    </label>
                  </li>
                  <li>
                    <label for="chkbox3" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox3" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Objects selected</span>
                    </label>
                  </li>
                  <li>
                    <label for="chkbox4" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox4" class="mdl-checkbox__input">
                      <span class="mdl-checkbox__label">Objects viewed</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50">Change location</a>
                <div class="mdl-layout-spacer"></div>
                <i class="material-icons">location_on</i>
              </div>
            </div>
          </div>
         </div>

    `,
                    directives: [router_1.ROUTER_DIRECTIVES, MaterialDesignLiteUpgradeElement_1.MDL]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, router_1.Router])
            ], CreateTaskComponent);
            exports_1("CreateTaskComponent", CreateTaskComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Rhc2tzL0NyZWF0ZVRhc2tDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1RkE7Z0JBT0ksWUFBb0IsZ0JBQWtDLEVBQVMsTUFBYztvQkFBekQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZixDQUFDO2dCQUVBLFFBQVE7b0JBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFFRixRQUFRLENBQUMsSUFBSTtvQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BGLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLENBQUM7WUFFTCxDQUFDO1lBckdEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwRVQ7b0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsc0NBQUcsQ0FBQztpQkFDdkMsQ0FBQzs7bUNBQUE7WUFFRixxREFxQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy90YXNrcy9DcmVhdGVUYXNrQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUyxSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtNREx9IGZyb20gJy4uL2FwcC9NYXRlcmlhbERlc2lnbkxpdGVVcGdyYWRlRWxlbWVudCc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuLi9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0YXNrcycsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgbWRsIGNsYXNzPVwibWRsLWdyaWQgZGVtby1jb250ZW50XCI+XHJcbiAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tZ3JhcGhzIG1kbC1zaGFkb3ctLTJkcCBtZGwtY29sb3ItLXdoaXRlIG1kbC1jZWxsIG1kbC1jZWxsLS04LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNyZWF0ZSBUYXNrIFBhZ2U8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGFza25hbWVcIiBbKG5nTW9kZWwpXT1cImRhdGEudGFza25hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBmb3I9XCJ0YXNrbmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+IDxici8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcm93cz0gXCI1XCIgaWQ9XCJ0YXNrZGVzY1wiIFsobmdNb2RlbCldPVwiZGF0YS50YXNrZGVzY1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBmb3I9XCJ0YXNrZGVzY1wiPlRhc2sgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gPGJyLz5cclxuICAgICAgICAgICAgICAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwiZGF0YS5hc3NpZ25lZHRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cIiNhc3NpZ24gb2YgZHJvcGRvd25WYWx1ZXNcIiBbbmdWYWx1ZV09XCJhc3NpZ24udXNlckVtYWlsXCI+e3thc3NpZ24udXNlckVtYWlsfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJyLz48YnIvPiAgPGJ1dHRvbiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWJ1dHRvbi0tY29sb3JlZFwiIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgVGFzazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jYXJkcyBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTgtY29sLXRhYmxldCBtZGwtZ3JpZCBtZGwtZ3JpZC0tbm8tc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby11cGRhdGVzIG1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTQtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmQgbWRsLWNvbG9yLS10ZWFsLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj5WaWV3IFRhc2tzPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICAgIFZpZXcgRXhpc3RpbmcgVGFza3MgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL1Rhc2tzJ11cIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPk15IFRhc2tzPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tc2VwYXJhdG9yIG1kbC1jZWxsLS0xLWNvbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1vcHRpb25zIG1kbC1jYXJkIG1kbC1jb2xvci0tZGVlcC1wdXJwbGUtNTAwIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTMtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+VmlldyBvcHRpb25zPC9oMz5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGtib3gxXCIgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGtib3gxXCIgY2xhc3M9XCJtZGwtY2hlY2tib3hfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1jaGVja2JveF9fbGFiZWxcIj5DbGljayBwZXIgb2JqZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94MlwiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94MlwiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+Vmlld3MgcGVyIG9iamVjdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDNcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDNcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPk9iamVjdHMgc2VsZWN0ZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGtib3g0XCIgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGtib3g0XCIgY2xhc3M9XCJtZGwtY2hlY2tib3hfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1jaGVja2JveF9fbGFiZWxcIj5PYmplY3RzIHZpZXdlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCBtZGwtY29sb3ItdGV4dC0tYmx1ZS1ncmV5LTUwXCI+Q2hhbmdlIGxvY2F0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bG9jYXRpb25fb248L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE1ETF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVUYXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBkYXRhOiBhbnk7XHJcblxyXG4gICAgLy9wdWJsaWMgZHJvcGRvd25WYWx1ZXM9IFtcIk9QRU5cIixcIkNMT1NFRFwiXTtcclxuICAgIHB1YmxpYyBkcm9wZG93blZhbHVlczogT2JqZWN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMuZGF0YSA9IHt9OyAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRVc2Vyc0xpc3QoKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuZHJvcGRvd25WYWx1ZXMgPSByZXMpOyAgICAgICBcclxuICAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZm9ybSkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7ICAgIFxyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLnBvc3RUYXNrcyh0aGlzLmRhdGEpLnRoZW4oXz0+dGhpcy5yb3V0ZXIubmF2aWdhdGUoWydUYXNrcyddKSk7ICAgXHJcbiAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
