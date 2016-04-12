System.register(['angular2/core', "angular2/router"], function(exports_1) {
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
                }
                HomeComponent.prototype.ngOnInit = function () { };
                HomeComponent.prototype.onGetAll = function (name) {
                    console.log("Button clicked.. more code goes here " + name);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n    <div>\n    <div class=\"input\">\n        <label for=\"Name\">Name</label>\n        <input type=\"text\" id=\"name\" #name>\n    </div>\n    <button (click)=\"onGetAll(name.value)\">GET Request\n    </button>\n    <p>Response: {{response}}</p>\n    </div>\n    <a [routerLink]=\"['../About']\">link to About component</a>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvSG9tZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lQ29tcG9uZW50IiwiSG9tZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkhvbWVDb21wb25lbnQubmdPbkluaXQiLCJIb21lQ29tcG9uZW50Lm9uR2V0QWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFvQklBO2dCQUFlQyxDQUFDQTtnQkFFaEJELGdDQUFRQSxHQUFSQSxjQUFZRSxDQUFDQTtnQkFFYkYsZ0NBQVFBLEdBQVJBLFVBQVNBLElBQVlBO29CQUNsQkcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsdUNBQXVDQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDL0RBLENBQUNBO2dCQTFCTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsTUFBTUE7d0JBQ2hCQSxRQUFRQSxFQUFFQSwrVUFXVEE7d0JBQ0RBLFVBQVVBLEVBQUdBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7cUJBQ25DQSxDQUFDQTs7a0NBWURBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0EzQkEsQUEyQkNBLElBQUE7WUEzQkQseUNBMkJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9Ib21lQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gXCIuLi9hYm91dC9BYm91dENvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJOYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgI25hbWU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0QWxsKG5hbWUudmFsdWUpXCI+R0VUIFJlcXVlc3RcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHA+UmVzcG9uc2U6IHt7cmVzcG9uc2V9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9BYm91dCddXCI+bGluayB0byBBYm91dCBjb21wb25lbnQ8L2E+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHJlc3BvbnNlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge31cclxuXHJcbiAgICBvbkdldEFsbChuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gY2xpY2tlZC4uIG1vcmUgY29kZSBnb2VzIGhlcmUgXCIgKyBuYW1lKTsgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
