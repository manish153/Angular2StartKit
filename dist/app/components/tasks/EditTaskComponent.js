System.register(['angular2/core', "angular2/router", '../app/MaterialDesignLiteUpgradeElement', "../apartment/ApartmentService", "../../services/SharedService"], function(exports_1, context_1) {
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
    var core_1, router_1, MaterialDesignLiteUpgradeElement_1, ApartmentService_1, SharedService_1;
    var EditTaskComponent;
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
            },
            function (SharedService_1_1) {
                SharedService_1 = SharedService_1_1;
            }],
        execute: function() {
            let EditTaskComponent = class EditTaskComponent {
                constructor(apartmentService, router, sharedService) {
                    this.apartmentService = apartmentService;
                    this.router = router;
                    this.sharedService = sharedService;
                    this.data = this.sharedService.temp;
                }
                onSubmit(form) {
                    this.apartmentService.updateTask(this.data).then(_ => this.router.navigate(['Tasks']));
                }
            };
            EditTaskComponent = __decorate([
                core_1.Component({
                    selector: 'edit-tasks',
                    template: `<div mdl class="mdl-grid demo-content">
      
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <h3>EDIT Task Page</h3>   

                <form action="#" (ngSubmit)="onSubmit()">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="taskname" [(ngModel)]="data.taskname"/>
                    <label class="mdl-textfield__label" for="taskname">Task Name</label>
                    
                   </div> <br/>
                  <div class="mdl-textfield mdl-js-textfield">
                    <textarea class="mdl-textfield__input" type="text" rows= "5" id="taskdesc" [(ngModel)]="data.taskdesc"></textarea>
                    <label class="mdl-textfield__label" for="taskdesc">Task Description</label>
                  </div> <br/>
                <!--  <select [(ngModel)]="data.taskstatus">
                      <option *ngFor="#taskstatus of dropdownValues" [ngValue]="taskstatus">{{taskstatus}}</option>
                  </select> -->
      
                <br/>  <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">SAVE</button>
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
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, router_1.Router, SharedService_1.SharedService])
            ], EditTaskComponent);
            exports_1("EditTaskComponent", EditTaskComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Rhc2tzL0VkaXRUYXNrQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0ZBO2dCQUlJLFlBQW9CLGdCQUFrQyxFQUFTLE1BQWMsRUFBVyxhQUE0QjtvQkFBaEcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFXLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQUNsSCxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELFFBQVEsQ0FBQyxJQUFJO29CQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLENBQUM7WUFFTCxDQUFDO1lBN0ZEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwRVQ7b0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsc0NBQUcsQ0FBQztpQkFFdkMsQ0FBQzs7aUNBQUE7WUFFRixpREFZQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Rhc2tzL0VkaXRUYXNrQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge01ETH0gZnJvbSAnLi4vYXBwL01hdGVyaWFsRGVzaWduTGl0ZVVwZ3JhZGVFbGVtZW50JztcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7QXBhcnRtZW50U2VydmljZX0gZnJvbSBcIi4uL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2hhcmVkU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1NoYXJlZFNlcnZpY2VcIjsgIFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VkaXQtdGFza3MnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IG1kbCBjbGFzcz1cIm1kbC1ncmlkIGRlbW8tY29udGVudFwiPlxyXG4gICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWdyYXBocyBtZGwtc2hhZG93LS0yZHAgbWRsLWNvbG9yLS13aGl0ZSBtZGwtY2VsbCBtZGwtY2VsbC0tOC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5FRElUIFRhc2sgUGFnZTwvaDM+ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrbmFtZVwiIFsobmdNb2RlbCldPVwiZGF0YS50YXNrbmFtZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGZvcj1cInRhc2tuYW1lXCI+VGFzayBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIHJvd3M9IFwiNVwiIGlkPVwidGFza2Rlc2NcIiBbKG5nTW9kZWwpXT1cImRhdGEudGFza2Rlc2NcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgZm9yPVwidGFza2Rlc2NcIj5UYXNrIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDxici8+XHJcbiAgICAgICAgICAgICAgICA8IS0tICA8c2VsZWN0IFsobmdNb2RlbCldPVwiZGF0YS50YXNrc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cIiN0YXNrc3RhdHVzIG9mIGRyb3Bkb3duVmFsdWVzXCIgW25nVmFsdWVdPVwidGFza3N0YXR1c1wiPnt7dGFza3N0YXR1c319PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiAtLT5cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnIvPiAgPGJ1dHRvbiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWJ1dHRvbi0tY29sb3JlZFwiIHR5cGU9XCJzdWJtaXRcIj5TQVZFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWNhcmRzIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tOC1jb2wtdGFibGV0IG1kbC1ncmlkIG1kbC1ncmlkLS1uby1zcGFjaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLXVwZGF0ZXMgbWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tNC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZCBtZGwtY29sb3ItLXRlYWwtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPlZpZXcgVGFza3M8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgVmlldyBFeGlzdGluZyBUYXNrcyAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vVGFza3MnXVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+TXkgVGFza3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZXBhcmF0b3IgbWRsLWNlbGwtLTEtY29sXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLW9wdGlvbnMgbWRsLWNhcmQgbWRsLWNvbG9yLS1kZWVwLXB1cnBsZS01MDAgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tMy1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5WaWV3IG9wdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDFcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDFcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPkNsaWNrIHBlciBvYmplY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGtib3gyXCIgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGtib3gyXCIgY2xhc3M9XCJtZGwtY2hlY2tib3hfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1jaGVja2JveF9fbGFiZWxcIj5WaWV3cyBwZXIgb2JqZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94M1wiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94M1wiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+T2JqZWN0cyBzZWxlY3RlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDRcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDRcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPk9iamVjdHMgdmlld2VkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNTBcIj5DaGFuZ2UgbG9jYXRpb248L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5sb2NhdGlvbl9vbjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTURMXVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0VGFza0NvbXBvbmVudCB7XHJcblxyXG4gICAgZGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBhcnRtZW50U2VydmljZTogQXBhcnRtZW50U2VydmljZSxwcml2YXRlIHJvdXRlcjogUm91dGVyICwgcHJpdmF0ZSBzaGFyZWRTZXJ2aWNlOiBTaGFyZWRTZXJ2aWNlKSB7ICAgICAgXHJcbiAgICAgIHRoaXMuZGF0YT10aGlzLnNoYXJlZFNlcnZpY2UudGVtcDtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKSB7ICAgIFxyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLnVwZGF0ZVRhc2sodGhpcy5kYXRhKS50aGVuKF89PnRoaXMucm91dGVyLm5hdmlnYXRlKFsnVGFza3MnXSkpOyAgICBcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
