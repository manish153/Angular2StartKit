System.register(['angular2/core', "angular2/router", "angular2/common"], function(exports_1, context_1) {
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
                        template: " <h1>You have successfully logged out</h1>\n    <!--<h3>About Form</h3>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n    <div>\n        <label from=\"name\">Name</label>\n        <input [ngFormControl]=\"myForm.controls['name']\" \"type=\"text\" id=\"name\" #name=\"ngForm\">\n        <span class=\"validator-error\" *ngIf=\"!name.valid\"> required</span>\n    </div>\n    <button type=\"submit\" [disabled]=\"!f.valid\">submit</button>\n    </form>\n\n\n    <a [routerLink]=\"['../Home']\">Back to Home component</a> -->\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUdJLHdCQUFvQixFQUFlO29CQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7Z0JBQUksQ0FBQztnQkFHeEMsaUNBQVEsR0FBUixVQUFTLElBQUk7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUN4QixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ3BDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQW5DTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDcEMsUUFBUSxFQUFFLG9qQkFjVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQzs7a0NBQUE7Z0JBaUJGLHFCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCwyQ0FlQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi4vaG9tZS9Ib21lQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhYm91dCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vYXBwL2Fzc2V0cy9hcHAuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZTogYCA8aDE+WW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQ8L2gxPlxyXG4gICAgPCEtLTxoMz5BYm91dCBGb3JtPC9oMz5cclxuICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiICNmPVwibmdGb3JtXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBmcm9tPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ25hbWUnXVwiIFwidHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiAjbmFtZT1cIm5nRm9ybVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdG9yLWVycm9yXCIgKm5nSWY9XCIhbmFtZS52YWxpZFwiPiByZXF1aXJlZDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkXCI+c3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vSG9tZSddXCI+QmFjayB0byBIb21lIGNvbXBvbmVudDwvYT4gLS0+XHJcblxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG5cclxuICAgIG9uU3VibWl0KGZvcm0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogYW55IHtcclxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
