System.register(['angular2/core', "angular2/router", "angular2/common", '../apartment/ApartmentService', '../app/MaterialDesignLiteUpgradeElement'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, ApartmentService_1, MaterialDesignLiteUpgradeElement_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                onSubmit(form) {
                    console.log(this.myForm);
                    this.isEdit = false;
                    //post to rest API
                }
                ;
                ngOnInit() {
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
                    directives: [router_1.ROUTER_DIRECTIVES, MaterialDesignLiteUpgradeElement_1.MDL]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, ApartmentService_1.ApartmentService])
            ], ProfileComponent);
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9GQTtnQkFPSSxZQUFvQixFQUFlLEVBQVUsZ0JBQWtDO29CQUEzRCxPQUFFLEdBQUYsRUFBRSxDQUFhO29CQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBTC9FLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBQ3hCLGNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFLcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO2dCQUM3QyxDQUFDO2dCQUdELFFBQVEsQ0FBQyxJQUFJO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDcEIsa0JBQWtCO2dCQUN0QixDQUFDOztnQkFFRCxRQUFRO29CQUNKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ2xHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDcEMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBcEdEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNFVDtvQkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxzQ0FBRyxDQUFDO2lCQUN2QyxDQUFDOztnQ0FBQTtZQUVGLCtDQXdCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuLi9hcHAvU2lkZWJhckNvbXBvbmVudCdcclxuaW1wb3J0IHtBcGFydG1lbnRTZXJ2aWNlfSBmcm9tICcuLi9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZSdcclxuaW1wb3J0IHtNREx9IGZyb20gJy4uL2FwcC9NYXRlcmlhbERlc2lnbkxpdGVVcGdyYWRlRWxlbWVudCdcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJvZmlsZScsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgbWRsIGNsYXNzPVwibWRsLWdyaWQgZGVtby1jb250ZW50XCI+XHJcbiAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tZ3JhcGhzIG1kbC1zaGFkb3ctLTJkcCBtZGwtY29sb3ItLXdoaXRlIG1kbC1jZWxsIG1kbC1jZWxsLS04LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlByb2ZpbGUgUGFnZTwvaDM+ICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgI2Y9XCJuZ0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXCIgKm5nRm9yPVwiI3Byb2Ygb2YgcHJvZmlsZU9iamVjdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIiBmcm9tPVwibmFtZVwiPk5hbWU6IHt7cHJvZi51c2VyRmlyc3ROYW1lfX0gPC9sYWJlbD4gXHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCJpc0VkaXRcIiBmcm9tPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgKm5nSWY9XCJpc0VkaXRcIiAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXQ9ZmFsc2VcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ25hbWUnXSBcInR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgI25hbWU9XCJuZ0Zvcm1cIiBbKG5nTW9kZWwpXT1cInByb2YudXNlckZpcnN0TmFtZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJ2YWxpZGF0b3ItZXJyb3JcIiAqbmdJZj1cIiFuYW1lLnZhbGlkXCI+IHJlcXVpcmVkPC9zcGFuPi0tPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tPGJ1dHRvbiBuYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhZi52YWxpZFwiPnN1Ym1pdDwvYnV0dG9uPi0tPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc0VkaXRcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWJ1dHRvbi0tY29sb3JlZFwiIG5hbWU9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+ICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2FyZHMgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS04LWNvbC10YWJsZXQgbWRsLWdyaWQgbWRsLWdyaWQtLW5vLXNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+VXBkYXRlczwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWdyZXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICBOb24gZG9sb3JlIGVsaXQgYWRpcGlzaWNpbmcgZWEgcmVwcmVoZW5kZXJpdCBjb25zZWN0ZXR1ciBjdWxwYS5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlJlYWQgTW9yZTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLXNlcGFyYXRvciBtZGwtY2VsbC0tMS1jb2xcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8tb3B0aW9ucyBtZGwtY2FyZCBtZGwtY29sb3ItLWRlZXAtcHVycGxlLTUwMCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS0zLWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgbWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS01MFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlZpZXcgb3B0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94MVwiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94MVwiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+Q2xpY2sgcGVyIG9iamVjdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoa2JveDJcIiBjbGFzcz1cIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoa2JveDJcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPlZpZXdzIHBlciBvYmplY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGtib3gzXCIgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGtib3gzXCIgY2xhc3M9XCJtZGwtY2hlY2tib3hfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1jaGVja2JveF9fbGFiZWxcIj5PYmplY3RzIHNlbGVjdGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hrYm94NFwiIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hrYm94NFwiIGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+T2JqZWN0cyB2aWV3ZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgbWRsLWNvbG9yLXRleHQtLWJsdWUtZ3JleS01MFwiPkNoYW5nZSBsb2NhdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmxvY2F0aW9uX29uPC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE1ETF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgaXNFZGl0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB1c2VyRW1haWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG4gICAgcHVibGljIHByb2ZpbGVPYmplY3Q6IE9iamVjdFtdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBhcGFydG1lbnRTZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlID0gYXBhcnRtZW50U2VydmljZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TdWJtaXQoZm9ybSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtKTtcclxuICAgICAgICB0aGlzLmlzRWRpdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vcG9zdCB0byByZXN0IEFQSVxyXG4gICAgfTtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRQcm9maWxlKHRoaXMudXNlckVtYWlsLmVtYWlsKS5zdWJzY3JpYmUocmVzID0+IHRoaXMucHJvZmlsZU9iamVjdCA9IHJlcyk7XHJcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgJ25hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
