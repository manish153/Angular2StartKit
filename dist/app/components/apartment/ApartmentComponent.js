System.register(['angular2/core', "angular2/router", "./ApartmentService"], function(exports_1, context_1) {
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
    var core_1, router_1, ApartmentService_1;
    var ApartmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            }],
        execute: function() {
            let ApartmentComponent = class ApartmentComponent {
                constructor(apartmentService) {
                    this.apartmentService = apartmentService;
                    this.apartmentService = apartmentService;
                }
                ngOnInit() {
                    this.apartmentService.getApartments().subscribe(res => this.apartments = res);
                    console.log(this.apartments);
                }
            };
            ApartmentComponent = __decorate([
                core_1.Component({
                    selector: 'apartment',
                    template: `
   <div *ngFor="#apartment of apartments" class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 class="mdl-card__title-text">{{apartment.unitID}}</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                Non dolore elit adipisicing ea repre henderit consectetur culpa.
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{apartment.UnitType}}</a>
              </div>
    </div>          
    `,
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService])
            ], ApartmentComponent);
            exports_1("ApartmentComponent", ApartmentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBSUksWUFBb0IsZ0JBQWtDO29CQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQUN0RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsUUFBUTtvQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztZQUNMLENBQUM7WUEvQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7S0FZUDtvQkFFRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7a0NBQUE7WUFFRixtREFZQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9BcGFydG1lbnRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwL0Rhc2hib2FyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuL0FwYXJ0bWVudFNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwYXJ0bWVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgPGRpdiAqbmdGb3I9XCIjYXBhcnRtZW50IG9mIGFwYXJ0bWVudHNcIiBjbGFzcz1cImRlbW8tdXBkYXRlcyBtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHAgbWRsLWNlbGwgbWRsLWNlbGwtLTQtY29sIG1kbC1jZWxsLS00LWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kIG1kbC1jb2xvci0tdGVhbC0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+e3thcGFydG1lbnQudW5pdElEfX08L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IG1kbC1jb2xvci10ZXh0LS1ncmV5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgTm9uIGRvbG9yZSBlbGl0IGFkaXBpc2ljaW5nIGVhIHJlcHJlIGhlbmRlcml0IGNvbnNlY3RldHVyIGN1bHBhLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+e3thcGFydG1lbnQuVW5pdFR5cGV9fTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwYXJ0bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGFwYXJ0bWVudHM6IE9iamVjdFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBhcnRtZW50U2VydmljZTogQXBhcnRtZW50U2VydmljZSkge1xyXG4gICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlID0gYXBhcnRtZW50U2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXBhcnRtZW50U2VydmljZS5nZXRBcGFydG1lbnRzKCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmFwYXJ0bWVudHMgPSByZXMpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5hcGFydG1lbnRzKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
