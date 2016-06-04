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
                        var index = this.tasks.findIndex((task) => this.data == task);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Rhc2tzL1Rhc2tzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEZBO2dCQUtJLFlBQW9CLGdCQUFrQyxFQUFVLGFBQTRCLEVBQVMsTUFBYztvQkFBL0YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQURuSCxjQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQytELENBQUM7Z0JBRXhILFFBQVE7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUV6RixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRUQsUUFBUSxDQUFDLElBQUk7b0JBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2dCQUN2RixDQUFDO2dCQUVELFdBQVcsQ0FBQyxJQUFJO29CQUNiLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDO29CQUNuQixpR0FBaUc7b0JBQy9GLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksSUFBRyxJQUFJLENBQUMsQ0FBQzt3QkFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQS9HRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxPQUFPO29CQUNqQixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEVUO29CQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFDLHNDQUFHLENBQUM7aUJBRXRDLENBQUM7OzhCQUFBO1lBRUYsMkNBMkJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdGFza3MvVGFza3NDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge01ETH0gZnJvbSAnLi4vYXBwL01hdGVyaWFsRGVzaWduTGl0ZVVwZ3JhZGVFbGVtZW50JztcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vYXBhcnRtZW50L0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaGFyZWRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvU2hhcmVkU2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Rhc2tzJyxcclxuICAgIHN0eWxlVXJsczogWycuLi9hcHAvYXNzZXRzL2FwcC5jc3MnXSxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBtZGwgY2xhc3M9XCJtZGwtZ3JpZCBkZW1vLWNvbnRlbnRcIj5cclxuICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1ncmFwaHMgbWRsLXNoYWRvdy0tMmRwIG1kbC1jb2xvci0td2hpdGUgbWRsLWNlbGwgbWRsLWNlbGwtLTgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+VGFza3MgUGFnZTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwiI3Rhc2sgb2YgdGFza3NcIiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmQgbWRsLWNvbG9yLS10ZWFsLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj57e3Rhc2sudGFza25hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAge3t0YXNrLnRhc2tkZXNjfX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+e3t0YXNrLmFzc2lnbmVkdG99fTwvYT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cInRhc2sudGFza3N0YXR1cz09J09QRU4nXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIiAoY2xpY2spPVwib25DbGlja01hcmsodGFzaylcIj5NYXJrIENvbXBsZXRlZDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL1Rhc2tzJ11cIiAqbmdJZj1cInRhc2sudGFza3N0YXR1cz09J0NMT1NFRCdcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPkNvbXBsZXRlZDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0VkaXRUYXNrJ11cIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIChjbGljayk9XCJvbkNsaWNrMSh0YXNrKVwiPkVESVQ8L2E+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2FyZHMgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS04LWNvbC10YWJsZXQgbWRsLWdyaWQgbWRsLWdyaWQtLW5vLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+Q3JlYXRlIE5ldyBUYXNrPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtY29sb3ItdGV4dC0tZ3JleS02MDBcIj5cclxuICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgVGFza3MgRm9yIFRlYW0gTWVtYmVycyBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9DcmVhdGVUYXNrJ11cIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPkNyZWF0ZTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vQWxsVGFza3MnXVwiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+VmlldyBBbGwgVGFza3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZXBhcmF0b3IgbWRsLWNlbGwtLTEtY29sXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLW9wdGlvbnMgbWRsLWNhcmQgbWRsLWNvbG9yLS1kZWVwLXB1cnBsZS01MDAgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tMy1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5WaWV3IG9wdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDFcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDFcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPkNsaWNrIHBlciBvYmplY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGtib3gyXCIgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGtib3gyXCIgY2xhc3M9XCJtZGwtY2hlY2tib3hfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1jaGVja2JveF9fbGFiZWxcIj5WaWV3cyBwZXIgb2JqZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94M1wiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94M1wiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+T2JqZWN0cyBzZWxlY3RlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDRcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDRcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPk9iamVjdHMgdmlld2VkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNTBcIj5DaGFuZ2UgbG9jYXRpb248L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5sb2NhdGlvbl9vbjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLE1ETF1cclxuICAgIC8qLHByb3ZpZGVyczogW1Rhc2tTZXJ2aWNlXSovXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFza3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyB0YXNrczogT2JqZWN0W107XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICB1c2VyRW1haWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlLCBwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2UscHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJFbWFpbC5lbWFpbCk7ICBcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRNeVRhc2sodGhpcy51c2VyRW1haWwuZW1haWwpLnN1YnNjcmliZShyZXMgPT4gdGhpcy50YXNrcyA9IHJlcyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ29uSW5pdCcgK3RoaXMudGFza3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2sxKHRhc2spe1xyXG4gICAgICB0aGlzLnNoYXJlZFNlcnZpY2UudGVtcCA9IHRhc2s7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBpbiB0aGUgc2hhcmVkIHNlcnZpY2UgJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2hhcmVkU2VydmljZS50ZW1wKSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrTWFyayh0YXNrKXtcclxuICAgICAgIHRoaXMuZGF0YSAgPSB0YXNrO1xyXG4gICAgICAvL3RoaXMuYXBhcnRtZW50U2VydmljZS5tYXJrQ29tcGxldGVkKHRoaXMuZGF0YSkudGhlbihfPT50aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0FsbFRhc2tzJ10pKTsgICAgXHJcbiAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLm1hcmtDb21wbGV0ZWQodGhpcy5kYXRhKS50aGVuKCgpID0+IHsgICAgIFxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0aGlzLmRhdGEgPT10YXNrKTtcclxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
