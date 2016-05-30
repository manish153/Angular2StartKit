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
            HomeComponent = (function () {
                function HomeComponent() {
                    this.sidebartemp1 = JSON.parse(localStorage.getItem('profile'));
                }
                HomeComponent.prototype.ngOnInit = function () { };
                HomeComponent.prototype.onGetAll = function (name) {
                    console.log("Button clicked.. more code goes here " + name);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n    <div>\n    <div class=\"input\">\n        <label for=\"Name\">Name</label>\n        <input type=\"text\" id=\"name\" #name>\n    </div>\n    <button (click)=\"onGetAll(name.value)\">GET Request\n    </button>\n    <p>Response: {{response}}</p>\n    </div>\n    <a [routerLink]=\"['../Dashboard']\">link to DASH </a>\n    ",
                        templateUrl: '../app/templates/home.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFJSTtvQkFGQSxpQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUczRCxDQUFDO2dCQUVELGdDQUFRLEdBQVIsY0FBYSxDQUFDO2dCQUVkLGdDQUFRLEdBQVIsVUFBUyxJQUFZO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQTdCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixRQUFRLEVBQUUseVVBV1Q7d0JBQ0QsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O2lDQUFBO2dCQWNGLG9CQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCx5Q0FZQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgQ2FuQWN0aXZhdGV9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuLi9hcHAvRGFzaGJvYXJkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4uL2xvZ2luL0xvZ2luQ29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiTmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiICNuYW1lPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldEFsbChuYW1lLnZhbHVlKVwiPkdFVCBSZXF1ZXN0XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxwPlJlc3BvbnNlOiB7e3Jlc3BvbnNlfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vRGFzaGJvYXJkJ11cIj5saW5rIHRvIERBU0ggPC9hPlxyXG4gICAgYCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi4vYXBwL3RlbXBsYXRlcy9ob21lLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcmVzcG9uc2U6IHN0cmluZztcclxuICAgIHNpZGViYXJ0ZW1wMSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBvbkdldEFsbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBjbGlja2VkLi4gbW9yZSBjb2RlIGdvZXMgaGVyZSBcIiArIG5hbWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
