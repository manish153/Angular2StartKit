System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let HomeComponent = class HomeComponent {
                constructor() {
                    this.sidebartemp1 = JSON.parse(localStorage.getItem('profile'));
                }
                ngOnInit() { }
                onGetAll(name) {
                    console.log("Button clicked.. more code goes here " + name);
                }
            };
            HomeComponent = __decorate([
                core_1.Component({
                    selector: 'home',
                    template: `
    <div>
    <div class="input">
        <label for="Name">Name</label>
        <input type="text" id="name" #name>
    </div>
    <button (click)="onGetAll(name.value)">GET Request
    </button>
    <p>Response: {{response}}</p>
    </div>
    <a [routerLink]="['../Dashboard']">link to DASH </a>
    `,
                    templateUrl: '../app/templates/home.html',
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFJSTtvQkFGQSxpQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUczRCxDQUFDO2dCQUVELFFBQVEsS0FBSyxDQUFDO2dCQUVkLFFBQVEsQ0FBQyxJQUFZO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO1lBQ0wsQ0FBQztZQTlCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxNQUFNO29CQUNoQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0tBV1Q7b0JBQ0QsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7aUJBQ2xDLENBQUM7OzZCQUFBO1lBRUYseUNBWUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ob21lL0hvbWVDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIENhbkFjdGl2YXRlfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwL0Rhc2hib2FyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi9Mb2dpbkNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIk5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiAjbmFtZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25HZXRBbGwobmFtZS52YWx1ZSlcIj5HRVQgUmVxdWVzdFxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8cD5SZXNwb25zZToge3tyZXNwb25zZX19PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL0Rhc2hib2FyZCddXCI+bGluayB0byBEQVNIIDwvYT5cclxuICAgIGAsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4uL2FwcC90ZW1wbGF0ZXMvaG9tZS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHJlc3BvbnNlOiBzdHJpbmc7XHJcbiAgICBzaWRlYmFydGVtcDEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gICAgb25HZXRBbGwobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gY2xpY2tlZC4uIG1vcmUgY29kZSBnb2VzIGhlcmUgXCIgKyBuYW1lKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
