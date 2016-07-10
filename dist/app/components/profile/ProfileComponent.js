System.register(['@angular/core', "@angular/router-deprecated", "@angular/common", '../apartment/ApartmentService', '../app/MaterialDesignLiteUpgradeElement'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, common_1, ApartmentService_1, MaterialDesignLiteUpgradeElement_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            },
            function (MaterialDesignLiteUpgradeElement_1_1) {
                MaterialDesignLiteUpgradeElement_1 = MaterialDesignLiteUpgradeElement_1_1;
            }],
        execute: function() {
            let ProfileComponent = class ProfileComponent {
                constructor(fb, apartmentService) {
                    this.fb = fb;
                    this.apartmentService = apartmentService;
                    this.isEdit = false;
                    this.userEmail = JSON.parse(localStorage.getItem('profile'));
                    this.apartmentService = apartmentService;
                }
                onSubmit() {
                    console.log(JSON.stringify(this.profileObject[0]));
                    this.apartmentService.updateProfile(this.profileObject[0]);
                    this.isEdit = false;
                }
                ;
                ngOnInit() {
                    console.log(' how is this working ' + JSON.stringify(this.userEmail.email));
                    this.apartmentService.getProfile(this.userEmail.email).subscribe(res => this.profileObject = res);
                    this.myForm = this.fb.group({
                        'name': ['', common_1.Validators.required],
                    });
                }
            };
            ProfileComponent = __decorate([
                core_1.Component({
                    selector: 'profile',
                    template: `<div mdl class="mdl-grid demo-content">
      
          <div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                <h3>Profile Page</h3>   
                <form action="#" [ngFormModel]="myForm" (ngSubmit)="onSubmit()" #f="ngForm">
                 <div class="mdl-textfield mdl-js-textfield" *ngFor="#prof of profileObject">

                  <label  *ngIf="!isEdit" (click)="isEdit=true" from="name">Name: {{prof.userFirstName}} </label> 
                  <label  *ngIf="isEdit" from="name">Name: </label> <input class="mdl-textfield__input" *ngIf="isEdit" (keydown.enter)="isEdit=false" [ngFormControl]="myForm.controls['name'] "type="text" id="name" #name="ngForm" [(ngModel)]="prof.userFirstName">

                    <!--<span class="validator-error" *ngIf="!name.valid"> required</span>-->
          </div>
          <!--<button name="submit" type="submit" [disabled]="!f.valid">submit</button>-->
                <br/>
                <button *ngIf="isEdit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" name="submit" type="submit">submit</button>    
            
                 </form>
    
          </div>
          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">Updates</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                Non dolore elit adipisicing ea reprehenderit consectetur culpa.
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect">Read More</a>
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
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES, MaterialDesignLiteUpgradeElement_1.MDL]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, ApartmentService_1.ApartmentService])
            ], ProfileComponent);
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9GQTtnQkFNSSxZQUFvQixFQUFlLEVBQVUsZ0JBQWtDO29CQUEzRCxPQUFFLEdBQUYsRUFBRSxDQUFhO29CQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBSi9FLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBQ3hCLGNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFJcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO2dCQUM3QyxDQUFDO2dCQUVELFFBQVE7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLENBQUM7O2dCQUVELFFBQVE7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDMUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDbEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUNwQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUNMLENBQUM7WUFuR0Q7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0VUO29CQUNELFVBQVUsRUFBRSxDQUFDLHFDQUFpQixFQUFFLHNDQUFHLENBQUM7aUJBQ3ZDLENBQUM7O2dDQUFBO1lBRUYsK0NBdUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSAnLi4vYXBwL1NpZGViYXJDb21wb25lbnQnXHJcbmltcG9ydCB7QXBhcnRtZW50U2VydmljZX0gZnJvbSAnLi4vYXBhcnRtZW50L0FwYXJ0bWVudFNlcnZpY2UnXHJcbmltcG9ydCB7TURMfSBmcm9tICcuLi9hcHAvTWF0ZXJpYWxEZXNpZ25MaXRlVXBncmFkZUVsZW1lbnQnXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Byb2ZpbGUnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IG1kbCBjbGFzcz1cIm1kbC1ncmlkIGRlbW8tY29udGVudFwiPlxyXG4gICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWdyYXBocyBtZGwtc2hhZG93LS0yZHAgbWRsLWNvbG9yLS13aGl0ZSBtZGwtY2VsbCBtZGwtY2VsbC0tOC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5Qcm9maWxlIFBhZ2U8L2gzPiAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiICNmPVwibmdGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiICpuZ0Zvcj1cIiNwcm9mIG9mIHByb2ZpbGVPYmplY3RcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhaXNFZGl0XCIgKGNsaWNrKT1cImlzRWRpdD10cnVlXCIgZnJvbT1cIm5hbWVcIj5OYW1lOiB7e3Byb2YudXNlckZpcnN0TmFtZX19IDwvbGFiZWw+IFxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgICpuZ0lmPVwiaXNFZGl0XCIgZnJvbT1cIm5hbWVcIj5OYW1lOiA8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiICpuZ0lmPVwiaXNFZGl0XCIgKGtleWRvd24uZW50ZXIpPVwiaXNFZGl0PWZhbHNlXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWyduYW1lJ10gXCJ0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiICNuYW1lPVwibmdGb3JtXCIgWyhuZ01vZGVsKV09XCJwcm9mLnVzZXJGaXJzdE5hbWVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwidmFsaWRhdG9yLWVycm9yXCIgKm5nSWY9XCIhbmFtZS52YWxpZFwiPiByZXF1aXJlZDwvc3Bhbj4tLT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLTxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIWYudmFsaWRcIj5zdWJtaXQ8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNFZGl0XCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1idXR0b24tLWNvbG9yZWRcIiBuYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiPnN1Ym1pdDwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWNhcmRzIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tOC1jb2wtdGFibGV0IG1kbC1ncmlkIG1kbC1ncmlkLS1uby1zcGFjaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLXVwZGF0ZXMgbWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tNC1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZCBtZGwtY29sb3ItLXRlYWwtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPlVwZGF0ZXM8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgTm9uIGRvbG9yZSBlbGl0IGFkaXBpc2ljaW5nIGVhIHJlcHJlaGVuZGVyaXQgY29uc2VjdGV0dXIgY3VscGEuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZXBhcmF0b3IgbWRsLWNlbGwtLTEtY29sXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLW9wdGlvbnMgbWRsLWNhcmQgbWRsLWNvbG9yLS1kZWVwLXB1cnBsZS01MDAgbWRsLXNoYWRvdy0tMmRwIG1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbCBtZGwtY2VsbC0tMy1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5WaWV3IG9wdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDFcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDFcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPkNsaWNrIHBlciBvYmplY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGtib3gyXCIgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGtib3gyXCIgY2xhc3M9XCJtZGwtY2hlY2tib3hfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1jaGVja2JveF9fbGFiZWxcIj5WaWV3cyBwZXIgb2JqZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94M1wiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94M1wiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+T2JqZWN0cyBzZWxlY3RlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDRcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDRcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPk9iamVjdHMgdmlld2VkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1jb2xvci10ZXh0LS1ibHVlLWdyZXktNTBcIj5DaGFuZ2UgbG9jYXRpb248L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5sb2NhdGlvbl9vbjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBNRExdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIGlzRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdXNlckVtYWlsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpKTtcclxuICAgIHByb2ZpbGVPYmplY3Q6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlID0gYXBhcnRtZW50U2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHsgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZmlsZU9iamVjdFswXSkpOyAgICBcclxuICAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UudXBkYXRlUHJvZmlsZSh0aGlzLnByb2ZpbGVPYmplY3RbMF0pO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyBob3cgaXMgdGhpcyB3b3JraW5nICcrSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyRW1haWwuZW1haWwpKTtcclxuICAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UuZ2V0UHJvZmlsZSh0aGlzLnVzZXJFbWFpbC5lbWFpbCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLnByb2ZpbGVPYmplY3QgPSByZXMpO1xyXG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgICduYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
