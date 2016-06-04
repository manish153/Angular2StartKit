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
                    <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="taskname" [(ngModel)]="data.taskname"/>
                    <label class="mdl-textfield__label" for="taskname">Task Name</label>
                    <span class="mdl-textfield__error">Only alphabet and no spaces, please!</span>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Rhc2tzL0NyZWF0ZVRhc2tDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3RkE7Z0JBT0ksWUFBb0IsZ0JBQWtDLEVBQVMsTUFBYztvQkFBekQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZixDQUFDO2dCQUVBLFFBQVE7b0JBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFFRixRQUFRLENBQUMsSUFBSTtvQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BGLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLENBQUM7WUFFTCxDQUFDO1lBdEdEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkVUO29CQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHNDQUFHLENBQUM7aUJBQ3ZDLENBQUM7O21DQUFBO1lBRUYscURBcUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdGFza3MvQ3JlYXRlVGFza0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7TURMfSBmcm9tICcuLi9hcHAvTWF0ZXJpYWxEZXNpZ25MaXRlVXBncmFkZUVsZW1lbnQnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vYXBhcnRtZW50L0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFza3MnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IG1kbCBjbGFzcz1cIm1kbC1ncmlkIGRlbW8tY29udGVudFwiPlxyXG4gICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWdyYXBocyBtZGwtc2hhZG93LS0yZHAgbWRsLWNvbG9yLS13aGl0ZSBtZGwtY2VsbCBtZGwtY2VsbC0tOC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5DcmVhdGUgVGFzayBQYWdlPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwYXR0ZXJuPVwiW0EtWixhLXpdKlwiIGlkPVwidGFza25hbWVcIiBbKG5nTW9kZWwpXT1cImRhdGEudGFza25hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBmb3I9XCJ0YXNrbmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19lcnJvclwiPk9ubHkgYWxwaGFiZXQgYW5kIG5vIHNwYWNlcywgcGxlYXNlITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIHJvd3M9IFwiNVwiIGlkPVwidGFza2Rlc2NcIiBbKG5nTW9kZWwpXT1cImRhdGEudGFza2Rlc2NcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgZm9yPVwidGFza2Rlc2NcIj5UYXNrIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDxici8+XHJcbiAgICAgICAgICAgICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cImRhdGEuYXNzaWduZWR0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIjYXNzaWduIG9mIGRyb3Bkb3duVmFsdWVzXCIgW25nVmFsdWVdPVwiYXNzaWduLnVzZXJFbWFpbFwiPnt7YXNzaWduLnVzZXJFbWFpbH19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIDxici8+PGJyLz4gIDxidXR0b24gY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1idXR0b24tLWNvbG9yZWRcIiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlIFRhc2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT4gICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2FyZHMgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS04LWNvbC10YWJsZXQgbWRsLWdyaWQgbWRsLWdyaWQtLW5vLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+VmlldyBUYXNrczwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWdyZXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICBWaWV3IEV4aXN0aW5nIFRhc2tzICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9UYXNrcyddXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5NeSBUYXNrczwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLXNlcGFyYXRvciBtZGwtY2VsbC0tMS1jb2xcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tb3B0aW9ucyBtZGwtY2FyZCBtZGwtY29sb3ItLWRlZXAtcHVycGxlLTUwMCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS0zLWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS01MFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlZpZXcgb3B0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94MVwiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94MVwiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+Q2xpY2sgcGVyIG9iamVjdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDJcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDJcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPlZpZXdzIHBlciBvYmplY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGtib3gzXCIgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGtib3gzXCIgY2xhc3M9XCJtZGwtY2hlY2tib3hfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1jaGVja2JveF9fbGFiZWxcIj5PYmplY3RzIHNlbGVjdGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94NFwiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94NFwiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+T2JqZWN0cyB2aWV3ZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgbWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS01MFwiPkNoYW5nZSBsb2NhdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmxvY2F0aW9uX29uPC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBNRExdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlVGFza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgZGF0YTogYW55O1xyXG5cclxuICAgIC8vcHVibGljIGRyb3Bkb3duVmFsdWVzPSBbXCJPUEVOXCIsXCJDTE9TRURcIl07XHJcbiAgICBwdWJsaWMgZHJvcGRvd25WYWx1ZXM6IE9iamVjdFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBhcnRtZW50U2VydmljZTogQXBhcnRtZW50U2VydmljZSxwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLmRhdGEgPSB7fTsgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0VXNlcnNMaXN0KCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmRyb3Bkb3duVmFsdWVzID0gcmVzKTsgICAgICAgXHJcbiAgICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm0pIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpOyAgICBcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5wb3N0VGFza3ModGhpcy5kYXRhKS50aGVuKF89PnRoaXMucm91dGVyLm5hdmlnYXRlKFsnVGFza3MnXSkpOyAgIFxyXG4gICAgdGhpcy5kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
