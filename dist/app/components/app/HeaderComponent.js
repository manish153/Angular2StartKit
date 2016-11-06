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
                    this.apartmentService = apartmentService;
                    this.sharedService = sharedService;
                }
                Search(event) {
                    console.log('Search Enter Submitted ' + event.target.value);
                    this.apartment = event.target.value;
                    this.router.navigate(['AptSearch']);
                    //  this.apartmentService.searchApt2(event.target.value).subscribe(res => {this.sharedService.temp = res 
                    //   console.log(this.sharedService.temp)
                    //   this.router.navigate(['AptSearch'])});         
                }
            };
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
     <aptsearch *ngIf="apartment" [model]="apartment"></aptsearch>    
    `,
                }), 
                __metadata('design:paramtypes', [ApartmentService_1.ApartmentService, router_deprecated_1.Router, SharedService_1.SharedService])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9IZWFkZXJDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0E7Z0JBSUssWUFBb0IsZ0JBQWtDLEVBQVMsTUFBYyxFQUFTLGFBQTRCO29CQUE5RixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQ2hILElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxnQkFBZ0IsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBQyxhQUFhLENBQUM7Z0JBQ25DLENBQUM7Z0JBR0QsTUFBTSxDQUFDLEtBQUs7b0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLHlHQUF5RztvQkFDekcseUNBQXlDO29CQUN6QyxvREFBb0Q7Z0JBQ3JELENBQUM7WUFDTixDQUFDO1lBbEREO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGdEQUFnRDtvQkFDL0MsVUFBVSxFQUFFLENBQUMsdUNBQWtCLENBQUM7b0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0JUO2lCQUVKLENBQUM7OytCQUFBO1lBRUYsNkNBa0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL0hlYWRlckNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNREx9IGZyb20gJy4vTWF0ZXJpYWxEZXNpZ25MaXRlVXBncmFkZUVsZW1lbnQnO1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gXCIuLi9hcGFydG1lbnQvQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkXCI7XHJcbmltcG9ydCB7U2hhcmVkU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1NoYXJlZFNlcnZpY2VcIjsgXHJcbmltcG9ydCB7QXB0U2VhcmNoQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBhcnRtZW50L0FwdFNlYXJjaENvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcclxuICAgIC8qdGVtcGxhdGU6ICc8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+JywqL1xyXG4gICAgIGRpcmVjdGl2ZXM6IFtBcHRTZWFyY2hDb21wb25lbnRdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0X19oZWFkZXItcm93XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1sYXlvdXQtdGl0bGVcIj5Bbmd1bGFyMiBBcHBsaWNhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1leHBhbmRhYmxlXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uXCIgZm9yPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2V4cGFuZGFibGUtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoXCIgKGtleXVwLmVudGVyKT1cIlNlYXJjaCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBmb3I9XCJzZWFyY2hcIj5FbnRlciB5b3VyIHF1ZXJ5Li4uPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgbWRsLWJ1dHRvbi0taWNvblwiIGlkPVwiaGRyYnRuXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tb3JlX3ZlcnQ8L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJtZGwtbWVudSBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdCBtZGwtbWVudS0tYm90dG9tLXJpZ2h0XCIgZm9yPVwiaGRyYnRuXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCI+QWJvdXQ8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiPkxlZ2FsIGluZm9ybWF0aW9uPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgPGFwdHNlYXJjaCAqbmdJZj1cImFwYXJ0bWVudFwiIFttb2RlbF09XCJhcGFydG1lbnRcIj48L2FwdHNlYXJjaD4gICAgXHJcbiAgICBgLFxyXG4gICAgIC8qICBkaXJlY3RpdmVzOiBbIE1ETCBdKi9cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG5cclxuICBwdWJsaWMgYXBhcnRtZW50OiBzdHJpbmc7XHJcbiAgICBcclxuICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UscHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2UpIHsgXHJcbiAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2U9YXBhcnRtZW50U2VydmljZTtcclxuICAgICAgIHRoaXMuc2hhcmVkU2VydmljZT1zaGFyZWRTZXJ2aWNlO1xyXG4gICAgIH1cclxuXHJcbiAgICAgXHJcbiAgICAgU2VhcmNoKGV2ZW50KXtcclxuICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2ggRW50ZXIgU3VibWl0dGVkICcgKyBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgdGhpcy5hcGFydG1lbnQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0FwdFNlYXJjaCddKTsgICAgIFxyXG4gICAgICAvLyAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLnNlYXJjaEFwdDIoZXZlbnQudGFyZ2V0LnZhbHVlKS5zdWJzY3JpYmUocmVzID0+IHt0aGlzLnNoYXJlZFNlcnZpY2UudGVtcCA9IHJlcyBcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnNoYXJlZFNlcnZpY2UudGVtcClcclxuICAgICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0FwdFNlYXJjaCddKX0pOyAgICAgICAgIFxyXG4gICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
