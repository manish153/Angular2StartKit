System.register(['@angular/core', "@angular/router-deprecated"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
                    directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFJSTtvQkFGQSxpQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUczRCxDQUFDO2dCQUVELFFBQVEsS0FBSyxDQUFDO2dCQUVkLFFBQVEsQ0FBQyxJQUFZO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO1lBQ0wsQ0FBQztZQTlCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxNQUFNO29CQUNoQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0tBV1Q7b0JBQ0QsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7aUJBQ2xDLENBQUM7OzZCQUFBO1lBRUYseUNBWUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ob21lL0hvbWVDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIENhbkFjdGl2YXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4uL2xvZ2luL0xvZ2luQ29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiTmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiICNuYW1lPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldEFsbChuYW1lLnZhbHVlKVwiPkdFVCBSZXF1ZXN0XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxwPlJlc3BvbnNlOiB7e3Jlc3BvbnNlfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vRGFzaGJvYXJkJ11cIj5saW5rIHRvIERBU0ggPC9hPlxyXG4gICAgYCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi4vYXBwL3RlbXBsYXRlcy9ob21lLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcmVzcG9uc2U6IHN0cmluZztcclxuICAgIHNpZGViYXJ0ZW1wMSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBvbkdldEFsbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBjbGlja2VkLi4gbW9yZSBjb2RlIGdvZXMgaGVyZSBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
