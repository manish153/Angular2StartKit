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
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(fb) {
                    this.fb = fb;
                }
                ProfileComponent.prototype.onSubmit = function (form) {
                    console.log(this.myForm);
                };
                ProfileComponent.prototype.ngOnInit = function () {
                    this.myForm = this.fb.group({
                        'name': ['', common_1.Validators.required],
                    });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        styleUrls: ['../app/assets/app.css'],
                        template: "<h1>Profile Page - work in progress </h1>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n    <div>\n        <label from=\"name\">Name</label>\n        <input [ngFormControl]=\"myForm.controls['name'] \"type=\"text\" id=\"name\" #name=\"ngForm\">\n        <span class=\"validator-error\" *ngIf=\"!name.valid\"> required</span>\n    </div>\n    <button type=\"submit\" [disabled]=\"!f.valid\">submit</button>\n    </form>\n\n\n    <a [routerLink]=\"['../Home']\">Back to Home component</a>\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ProfileComponent);
                return ProfileComponent;
            })();
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcm9maWxlQ29tcG9uZW50IiwiUHJvZmlsZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlByb2ZpbGVDb21wb25lbnQub25TdWJtaXQiLCJQcm9maWxlQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkF1QklBLDBCQUFvQkEsRUFBZUE7b0JBQWZDLE9BQUVBLEdBQUZBLEVBQUVBLENBQWFBO2dCQUFJQSxDQUFDQTtnQkFHeENELG1DQUFRQSxHQUFSQSxVQUFTQSxJQUFJQTtvQkFDVkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxDQUFDQTtnQkFFREYsbUNBQVFBLEdBQVJBO29CQUNDRyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDMUJBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtxQkFDbENBLENBQUNBLENBQUNBO2dCQUNKQSxDQUFDQTtnQkFsQ0xIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFNBQVNBO3dCQUNuQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsdUJBQXVCQSxDQUFDQTt3QkFDcENBLFFBQVFBLEVBQUVBLGdoQkFhVEE7d0JBQ0RBLFVBQVVBLEVBQUdBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7cUJBQ25DQSxDQUFDQTs7cUNBaUJEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBbkNBLEFBbUNDQSxJQUFBO1lBbkNELCtDQW1DQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4uL2hvbWUvSG9tZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJvZmlsZScsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vYXBwL2Fzc2V0cy9hcHAuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZTogYDxoMT5Qcm9maWxlIFBhZ2UgLSB3b3JrIGluIHByb2dyZXNzIDwvaDE+XHJcbiAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjZj1cIm5nRm9ybVwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgZnJvbT1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWyduYW1lJ10gXCJ0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiICNuYW1lPVwibmdGb3JtXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0b3ItZXJyb3JcIiAqbmdJZj1cIiFuYW1lLnZhbGlkXCI+IHJlcXVpcmVkPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIWYudmFsaWRcIj5zdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9Ib21lJ11cIj5CYWNrIHRvIEhvbWUgY29tcG9uZW50PC9hPlxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzIDogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKXtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7IFxyXG4gICAgIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAnbmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
