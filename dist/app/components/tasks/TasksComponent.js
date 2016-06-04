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
    var TasksComponent;
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
            let TasksComponent = class TasksComponent {
                constructor(apartmentService, sharedService, router) {
                    this.apartmentService = apartmentService;
                    this.sharedService = sharedService;
                    this.router = router;
                    this.userEmail = JSON.parse(localStorage.getItem('profile'));
                }
                ngOnInit() {
                    console.log(this.userEmail.email);
                    this.apartmentService.getMyTask(this.userEmail.email).subscribe(res => this.tasks = res);
                    console.log('onInit' + this.tasks);
                }
                onClick1(task) {
                    this.sharedService.temp = task;
                    console.log('value in the shared service ' + JSON.stringify(this.sharedService.temp));
                }
                onClickMark(task) {
                    this.data = task;
                    //this.apartmentService.markCompleted(this.data).then(_=>this.router.navigate(['AllTasks']));    
                    this.apartmentService.markCompleted(this.data).then(() => {
                        var index = this.tasks.findIndex((task) => this.data);
                        this.tasks.splice(index, 1);
                    });
                }
            };
            TasksComponent = __decorate([
                core_1.Component({
                    selector: 'tasks',
                    styleUrls: ['../app/assets/app.css'],
                    template: `<div mdl class="mdl-grid demo-content">
      
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <h3>Tasks Page</h3>

              <div *ngFor="#task of tasks" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{task.taskname}}</h2>
                </div>
                <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                {{task.taskdesc}}
                </div>
                <div class="mdl-card__actions mdl-card--border">                
                <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{task.assignedto}}</a>
                
                               
                <a *ngIf="task.taskstatus=='OPEN'" class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="onClickMark(task)">Mark Completed</a>
                <a [routerLink]="['/Tasks']" *ngIf="task.taskstatus=='CLOSED'" class="mdl-button mdl-js-button mdl-js-ripple-effect">Completed</a>
                <a [routerLink]="['/EditTask']" class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="onClick1(task)">EDIT</a>               
                </div>
             </div>          
          </div>
          

          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">Create New Task</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                Create New Tasks For Team Members 
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a [routerLink]="['../CreateTask']" class="mdl-button mdl-js-button mdl-js-ripple-effect">Create</a>
                <a [routerLink]="['../AllTasks']" class="mdl-button mdl-js-button mdl-js-ripple-effect">View All Tasks</a>
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
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, SharedService_1.SharedService, router_1.Router])
            ], TasksComponent);
            exports_1("TasksComponent", TasksComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Rhc2tzL1Rhc2tzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEZBO2dCQUtJLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQVMsTUFBYztvQkFBL0YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQURuSCxjQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQytELENBQUM7Z0JBRXhILFFBQVE7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUV6RixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRUQsUUFBUSxDQUFDLElBQUk7b0JBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2dCQUN2RixDQUFDO2dCQUVELFdBQVcsQ0FBQyxJQUFJO29CQUNiLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDO29CQUNuQixpR0FBaUc7b0JBQy9GLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBL0dEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0RVQ7b0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUMsc0NBQUcsQ0FBQztpQkFFdEMsQ0FBQzs7OEJBQUE7WUFFRiwyQ0EyQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy90YXNrcy9UYXNrc0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7TURMfSBmcm9tICcuLi9hcHAvTWF0ZXJpYWxEZXNpZ25MaXRlVXBncmFkZUVsZW1lbnQnO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuLi9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge1NoYXJlZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9TaGFyZWRTZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFza3MnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL2FwcC9hc3NldHMvYXBwLmNzcyddLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IG1kbCBjbGFzcz1cIm1kbC1ncmlkIGRlbW8tY29udGVudFwiPlxyXG4gICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWdyYXBocyBtZGwtc2hhZG93LS0yZHAgbWRsLWNvbG9yLS13aGl0ZSBtZGwtY2VsbCBtZGwtY2VsbC0tOC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5UYXNrcyBQYWdlPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCIjdGFzayBvZiB0YXNrc1wiIGNsYXNzPVwiZGVtby11cGRhdGVzIG1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTQtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZCBtZGwtY29sb3ItLXRlYWwtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPnt7dGFzay50YXNrbmFtZX19PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWdyZXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICB7e3Rhc2sudGFza2Rlc2N9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj57e3Rhc2suYXNzaWduZWR0b319PC9hPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwidGFzay50YXNrc3RhdHVzPT0nT1BFTidcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIChjbGljayk9XCJvbkNsaWNrTWFyayh0YXNrKVwiPk1hcmsgQ29tcGxldGVkPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvVGFza3MnXVwiICpuZ0lmPVwidGFzay50YXNrc3RhdHVzPT0nQ0xPU0VEJ1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+Q29tcGxldGVkPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvRWRpdFRhc2snXVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgKGNsaWNrKT1cIm9uQ2xpY2sxKHRhc2spXCI+RURJVDwvYT4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jYXJkcyBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTgtY29sLXRhYmxldCBtZGwtZ3JpZCBtZGwtZ3JpZC0tbm8tc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby11cGRhdGVzIG1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcCBtZGwtY2VsbCBtZGwtY2VsbC0tNC1jb2wgbWRsLWNlbGwtLTQtY29sLXRhYmxldCBtZGwtY2VsbC0tMTItY29sLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmQgbWRsLWNvbG9yLS10ZWFsLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj5DcmVhdGUgTmV3IFRhc2s8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBUYXNrcyBGb3IgVGVhbSBNZW1iZXJzIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL0NyZWF0ZVRhc2snXVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+Q3JlYXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9BbGxUYXNrcyddXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5WaWV3IEFsbCBUYXNrczwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLXNlcGFyYXRvciBtZGwtY2VsbC0tMS1jb2xcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tb3B0aW9ucyBtZGwtY2FyZCBtZGwtY29sb3ItLWRlZXAtcHVycGxlLTUwMCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS0zLWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS01MFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlZpZXcgb3B0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94MVwiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94MVwiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+Q2xpY2sgcGVyIG9iamVjdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDJcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDJcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPlZpZXdzIHBlciBvYmplY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGtib3gzXCIgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGtib3gzXCIgY2xhc3M9XCJtZGwtY2hlY2tib3hfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1jaGVja2JveF9fbGFiZWxcIj5PYmplY3RzIHNlbGVjdGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94NFwiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94NFwiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+T2JqZWN0cyB2aWV3ZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgbWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS01MFwiPkNoYW5nZSBsb2NhdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmxvY2F0aW9uX29uPC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsTURMXVxyXG4gICAgLyoscHJvdmlkZXJzOiBbVGFza1NlcnZpY2VdKi9cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIHRhc2tzOiBPYmplY3RbXTtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIHVzZXJFbWFpbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UsIHByaXZhdGUgc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZSxwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckVtYWlsLmVtYWlsKTsgIFxyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmdldE15VGFzayh0aGlzLnVzZXJFbWFpbC5lbWFpbCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLnRhc2tzID0gcmVzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnb25Jbml0JyArdGhpcy50YXNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljazEodGFzayl7XHJcbiAgICAgIHRoaXMuc2hhcmVkU2VydmljZS50ZW1wID0gdGFzaztcclxuICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGluIHRoZSBzaGFyZWQgc2VydmljZSAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zaGFyZWRTZXJ2aWNlLnRlbXApKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tNYXJrKHRhc2spe1xyXG4gICAgICAgdGhpcy5kYXRhICA9IHRhc2s7XHJcbiAgICAgIC8vdGhpcy5hcGFydG1lbnRTZXJ2aWNlLm1hcmtDb21wbGV0ZWQodGhpcy5kYXRhKS50aGVuKF89PnRoaXMucm91dGVyLm5hdmlnYXRlKFsnQWxsVGFza3MnXSkpOyAgICBcclxuICAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UubWFya0NvbXBsZXRlZCh0aGlzLmRhdGEpLnRoZW4oKCkgPT4geyAgICAgXHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRoaXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
