System.register(['@angular/core', "../apartment/ApartmentService", "@angular/router-deprecated", "../../services/SharedService", "../apartment/AptSearchComponent"], function(exports_1, context_1) {
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
    var core_1, ApartmentService_1, router_deprecated_1, SharedService_1, AptSearchComponent_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (SharedService_1_1) {
                SharedService_1 = SharedService_1_1;
            },
            function (AptSearchComponent_1_1) {
                AptSearchComponent_1 = AptSearchComponent_1_1;
            }],
        execute: function() {
            let HeaderComponent = class HeaderComponent {
                constructor(apartmentService, router, sharedService) {
                    this.apartmentService = apartmentService;
                    this.router = router;
                    this.sharedService = sharedService;
                    this.hideme = false;
                    this.hidemeChange = new core_1.EventEmitter();
                    this.apartmentService = apartmentService;
                    this.sharedService = sharedService;
                }
                Search(event) {
                    this.hideme = false;
                    this.hidemeChange.emit(false);
                    console.log('Search Enter Submitted ' + event.target.value);
                    this.apartment = event.target.value;
                    this.router.navigate(['AptSearch']);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], HeaderComponent.prototype, "hideme", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], HeaderComponent.prototype, "hidemeChange", void 0);
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'app-header',
                    /*template: '<router-outlet></router-outlet>',*/
                    directives: [AptSearchComponent_1.AptSearchComponent],
                    template: `
    <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Angular2 Application</span>
          <div class="mdl-layout-spacer"></div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <div class="mdl-textfield__expandable-holder">
              <input class="mdl-textfield__input" type="text" id="search" (keyup.enter)="Search($event)">
              <label class="mdl-textfield__label" for="search">Enter your query...</label>
            </div>
          </div>
          <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i class="material-icons">more_vert</i>
          </button>

          <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
            <li class="mdl-menu__item">About</li>
            <li class="mdl-menu__item">Contact</li>
            <li class="mdl-menu__item">Legal information</li>
          </ul>
        </div>
        <div>
     <aptsearch *ngIf="apartment && !hideme" [model]="apartment"></aptsearch>
      </div>    
    `
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, router_deprecated_1.Router, SharedService_1.SharedService])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9IZWFkZXJDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5Q0E7Z0JBT0ssWUFBb0IsZ0JBQWtDLEVBQVMsTUFBYyxFQUFTLGFBQTRCO29CQUE5RixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBTDVHLFdBQU0sR0FBVyxLQUFLLENBQUM7b0JBQ3RCLGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBS3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxnQkFBZ0IsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBQyxhQUFhLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsTUFBTSxDQUFDLEtBQUs7b0JBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztZQUNOLENBQUM7WUFqQkM7Z0JBQUMsWUFBSyxFQUFFOzsyREFBQTtZQUNSO2dCQUFDLGFBQU0sRUFBRTs7aUVBQUE7WUFwQ1g7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsZ0RBQWdEO29CQUNoRCxVQUFVLEVBQUUsQ0FBQyx1Q0FBa0IsQ0FBQztvQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTBCVDtpQkFDSixDQUFDOzsrQkFBQTtZQUVGLDZDQW1CQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9IZWFkZXJDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxDaGFuZ2VEZXRlY3RvclJlZixJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNREx9IGZyb20gJy4vTWF0ZXJpYWxEZXNpZ25MaXRlVXBncmFkZUVsZW1lbnQnO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuLi9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkXCI7XHJcbmltcG9ydCB7U2hhcmVkU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1NoYXJlZFNlcnZpY2VcIjsgXHJcbmltcG9ydCB7QXB0U2VhcmNoQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBhcnRtZW50L0FwdFNlYXJjaENvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcclxuICAgIC8qdGVtcGxhdGU6ICc8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+JywqL1xyXG4gICAgZGlyZWN0aXZlczogW0FwdFNlYXJjaENvbXBvbmVudF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXRfX2hlYWRlci1yb3dcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWxheW91dC10aXRsZVwiPkFuZ3VsYXIyIEFwcGxpY2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWV4cGFuZGFibGVcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb25cIiBmb3I9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZF9fZXhwYW5kYWJsZS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hcIiAoa2V5dXAuZW50ZXIpPVwiU2VhcmNoKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGZvcj1cInNlYXJjaFwiPkVudGVyIHlvdXIgcXVlcnkuLi48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtanMtcmlwcGxlLWVmZmVjdCBtZGwtYnV0dG9uLS1pY29uXCIgaWQ9XCJoZHJidG5cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPm1vcmVfdmVydDwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZW51IG1kbC1qcy1tZW51IG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1tZW51LS1ib3R0b20tcmlnaHRcIiBmb3I9XCJoZHJidG5cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWRsLW1lbnVfX2l0ZW1cIj5BYm91dDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCI+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCI+TGVnYWwgaW5mb3JtYXRpb248L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgIDxhcHRzZWFyY2ggKm5nSWY9XCJhcGFydG1lbnQgJiYgIWhpZGVtZVwiIFttb2RlbF09XCJhcGFydG1lbnRcIj48L2FwdHNlYXJjaD5cclxuICAgICAgPC9kaXY+ICAgIFxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgaGlkZW1lOmJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgaGlkZW1lQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgYXBhcnRtZW50OiBzdHJpbmc7XHJcbiAgICBcclxuICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UscHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2UpIHsgXHJcbiAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2U9YXBhcnRtZW50U2VydmljZTtcclxuICAgICAgIHRoaXMuc2hhcmVkU2VydmljZT1zaGFyZWRTZXJ2aWNlOyAgXHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICAgU2VhcmNoKGV2ZW50KXtcclxuICAgICAgIHRoaXMuaGlkZW1lID0gZmFsc2U7XHJcbiAgICAgICB0aGlzLmhpZGVtZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2ggRW50ZXIgU3VibWl0dGVkICcgKyBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgdGhpcy5hcGFydG1lbnQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0FwdFNlYXJjaCddKTsgICAgICAgICAgXHJcbiAgICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
