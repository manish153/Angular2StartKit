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
                        template: "<h1>About Form</h1>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n    <div>\n        <label from=\"name\">Name</label>\n        <input [ngFormControl]=\"myForm.controls['name'] \"type=\"text\" id=\"name\" #name=\"ngForm\">\n        <span class=\"validator-error\" *ngIf=\"!name.valid\"> required</span>\n    </div>\n    <button type=\"submit\" [disabled]=\"!f.valid\">submit</button>\n    </form>\n\n\n    <a [routerLink]=\"['../Home']\">Back to Home component</a>\n\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFib3V0Q29tcG9uZW50IiwiQWJvdXRDb21wb25lbnQuY29uc3RydWN0b3IiLCJBYm91dENvbXBvbmVudC5vblN1Ym1pdCIsIkFib3V0Q29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkF1QklBLHdCQUFvQkEsRUFBZUE7b0JBQWZDLE9BQUVBLEdBQUZBLEVBQUVBLENBQWFBO2dCQUFJQSxDQUFDQTtnQkFHeENELGlDQUFRQSxHQUFSQSxVQUFTQSxJQUFJQTtvQkFDVkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxDQUFDQTtnQkFFREYsaUNBQVFBLEdBQVJBO29CQUNDRyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDMUJBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtxQkFDbENBLENBQUNBLENBQUNBO2dCQUNKQSxDQUFDQTtnQkFsQ0xIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLE9BQU9BO3dCQUNqQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsdUJBQXVCQSxDQUFDQTt3QkFDcENBLFFBQVFBLEVBQUVBLDBmQWFUQTt3QkFDREEsVUFBVUEsRUFBR0EsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtxQkFDbkNBLENBQUNBOzttQ0FpQkRBO2dCQUFEQSxxQkFBQ0E7WUFBREEsQ0FuQ0EsQUFtQ0NBLElBQUE7WUFuQ0QsMkNBbUNDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWJvdXQvQWJvdXRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuLi9ob21lL0hvbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Fib3V0JyxcclxuICAgIHN0eWxlVXJsczogWycuLi9hcHAvYXNzZXRzL2FwcC5jc3MnXSxcclxuICAgIHRlbXBsYXRlOiBgPGgxPkFib3V0IEZvcm08L2gxPlxyXG4gICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgI2Y9XCJuZ0Zvcm1cIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGZyb209XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snbmFtZSddIFwidHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiAjbmFtZT1cIm5nRm9ybVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdG9yLWVycm9yXCIgKm5nSWY9XCIhbmFtZS52YWxpZFwiPiByZXF1aXJlZDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkXCI+c3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vSG9tZSddXCI+QmFjayB0byBIb21lIGNvbXBvbmVudDwvYT5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG5cclxuICAgIG9uU3VibWl0KGZvcm0pe1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5teUZvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHsgXHJcbiAgICAgdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICduYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
