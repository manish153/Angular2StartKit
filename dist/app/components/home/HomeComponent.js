System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () { };
                HomeComponent.prototype.onGetAll = function (name) {
                    console.log("Button clicked.. more code goes here " + name);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n    <div>\n    <div class=\"input\">\n        <label for=\"Name\">Name</label>\n        <input type=\"text\" id=\"name\" #name>\n    </div>\n    <button (click)=\"onGetAll(name.value)\">GET Request\n    </button>\n    <p>Response: {{response}}</p>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lQ29tcG9uZW50IiwiSG9tZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkhvbWVDb21wb25lbnQubmdPbkluaXQiLCJIb21lQ29tcG9uZW50Lm9uR2V0QWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFrQklBO2dCQUFnQkMsQ0FBQ0E7Z0JBRWpCRCxnQ0FBUUEsR0FBUkEsY0FBYUUsQ0FBQ0E7Z0JBRWRGLGdDQUFRQSxHQUFSQSxVQUFTQSxJQUFZQTtvQkFDbEJHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHVDQUF1Q0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQy9EQSxDQUFDQTtnQkF4QkxIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLE1BQU1BO3dCQUNoQkEsUUFBUUEsRUFBRUEsNlFBVVRBO3FCQUNKQSxDQUFDQTs7a0NBZ0JEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBN0JBLEFBNkJDQSxJQUFBO1lBN0JELHlDQTZCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiTmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiICNuYW1lPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldEFsbChuYW1lLnZhbHVlKVwiPkdFVCBSZXF1ZXN0XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxwPlJlc3BvbnNlOiB7e3Jlc3BvbnNlfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHJlc3BvbnNlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIG9uR2V0QWxsKG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBjbGlja2VkLi4gbW9yZSBjb2RlIGdvZXMgaGVyZSBcIiArIG5hbWUpOyAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
