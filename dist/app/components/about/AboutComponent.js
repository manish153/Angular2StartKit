System.register(['angular2/core', "angular2/router", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1;
    var AboutComponent;
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
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent(fb) {
                    this.fb = fb;
                }
                AboutComponent.prototype.onSubmit = function (form) {
                    console.log(this.myForm);
                };
                AboutComponent.prototype.ngOnInit = function () {
                    this.myForm = this.fb.group({
                        'name': ['', common_1.Validators.required],
                    });
                };
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about',
                        styleUrls: ['../app/assets/app.css'],
                        template: " <h1>You have successfully logged out</h1>\n    <h3>About Form</h3>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n    <div>\n        <label from=\"name\">Name</label>\n        <input [ngFormControl]=\"myForm.controls['name'] \"type=\"text\" id=\"name\" #name=\"ngForm\">\n        <span class=\"validator-error\" *ngIf=\"!name.valid\"> required</span>\n    </div>\n    <button type=\"submit\" [disabled]=\"!f.valid\">submit</button>\n    </form>\n\n\n    <a [routerLink]=\"['../Home']\">Back to Home component</a>\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AboutComponent);
                return AboutComponent;
            })();
            exports_1("AboutComponent", AboutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFib3V0Q29tcG9uZW50IiwiQWJvdXRDb21wb25lbnQuY29uc3RydWN0b3IiLCJBYm91dENvbXBvbmVudC5vblN1Ym1pdCIsIkFib3V0Q29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkF3QklBLHdCQUFvQkEsRUFBZUE7b0JBQWZDLE9BQUVBLEdBQUZBLEVBQUVBLENBQWFBO2dCQUFJQSxDQUFDQTtnQkFHeENELGlDQUFRQSxHQUFSQSxVQUFTQSxJQUFJQTtvQkFDVEUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFFREYsaUNBQVFBLEdBQVJBO29CQUNJRyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDeEJBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtxQkFDcENBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQTtnQkFuQ0xIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLE9BQU9BO3dCQUNqQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsdUJBQXVCQSxDQUFDQTt3QkFDcENBLFFBQVFBLEVBQUVBLDBpQkFjVEE7d0JBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7cUJBQ2xDQSxDQUFDQTs7bUNBaUJEQTtnQkFBREEscUJBQUNBO1lBQURBLENBcENBLEFBb0NDQSxJQUFBO1lBcENELDJDQW9DQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi4vaG9tZS9Ib21lQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhYm91dCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vYXBwL2Fzc2V0cy9hcHAuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZTogYCA8aDE+WW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQ8L2gxPlxyXG4gICAgPGgzPkFib3V0IEZvcm08L2gzPlxyXG4gICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgI2Y9XCJuZ0Zvcm1cIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGZyb209XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snbmFtZSddIFwidHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiAjbmFtZT1cIm5nRm9ybVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdG9yLWVycm9yXCIgKm5nSWY9XCIhbmFtZS52YWxpZFwiPiByZXF1aXJlZDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkXCI+c3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vSG9tZSddXCI+QmFjayB0byBIb21lIGNvbXBvbmVudDwvYT5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7IH1cclxuXHJcblxyXG4gICAgb25TdWJtaXQoZm9ybSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgICduYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
