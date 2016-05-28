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
                        template: " <h1>You have successfully logged out</h1>\n    <!--<h3>About Form</h3>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n    <div>\n        <label from=\"name\">Name</label>\n        <input [ngFormControl]=\"myForm.controls['name'] \"type=\"text\" id=\"name\" #name=\"ngForm\">\n        <span class=\"validator-error\" *ngIf=\"!name.valid\"> required</span>\n    </div>\n    <button type=\"submit\" [disabled]=\"!f.valid\">submit</button>\n    </form>\n\n\n    <a [routerLink]=\"['../Home']\">Back to Home component</a> -->\n\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFib3V0Q29tcG9uZW50IiwiQWJvdXRDb21wb25lbnQuY29uc3RydWN0b3IiLCJBYm91dENvbXBvbmVudC5vblN1Ym1pdCIsIkFib3V0Q29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkF3QklBLHdCQUFvQkEsRUFBZUE7b0JBQWZDLE9BQUVBLEdBQUZBLEVBQUVBLENBQWFBO2dCQUFJQSxDQUFDQTtnQkFHeENELGlDQUFRQSxHQUFSQSxVQUFTQSxJQUFJQTtvQkFDVEUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFFREYsaUNBQVFBLEdBQVJBO29CQUNJRyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDeEJBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtxQkFDcENBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQTtnQkFuQ0xIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLE9BQU9BO3dCQUNqQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsdUJBQXVCQSxDQUFDQTt3QkFDcENBLFFBQVFBLEVBQUVBLGtqQkFjVEE7d0JBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7cUJBQ2xDQSxDQUFDQTs7bUNBaUJEQTtnQkFBREEscUJBQUNBO1lBQURBLENBcENBLEFBb0NDQSxJQUFBO1lBcENELDJDQW9DQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi4vaG9tZS9Ib21lQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhYm91dCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vYXBwL2Fzc2V0cy9hcHAuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZTogYCA8aDE+WW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQ8L2gxPlxyXG4gICAgPCEtLTxoMz5BYm91dCBGb3JtPC9oMz5cclxuICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiICNmPVwibmdGb3JtXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBmcm9tPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ25hbWUnXSBcInR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgI25hbWU9XCJuZ0Zvcm1cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRvci1lcnJvclwiICpuZ0lmPVwiIW5hbWUudmFsaWRcIj4gcmVxdWlyZWQ8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhZi52YWxpZFwiPnN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL0hvbWUnXVwiPkJhY2sgdG8gSG9tZSBjb21wb25lbnQ8L2E+IC0tPlxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUZvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgJ25hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
