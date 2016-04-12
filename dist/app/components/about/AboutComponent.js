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
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () { };
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about',
                        template: "<h1>About</h1>\n    <a [routerLink]=\"['../Home']\">Back to Home component</a>\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            })();
            exports_1("AboutComponent", AboutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFib3V0Q29tcG9uZW50IiwiQWJvdXRDb21wb25lbnQuY29uc3RydWN0b3IiLCJBYm91dENvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBV0lBO2dCQUFnQkMsQ0FBQ0E7Z0JBRWpCRCxpQ0FBUUEsR0FBUkEsY0FBYUUsQ0FBQ0E7Z0JBYmxCRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTt3QkFDakJBLFFBQVFBLEVBQUVBLHdGQUdUQTt3QkFDREEsVUFBVUEsRUFBR0EsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtxQkFDbkNBLENBQUNBOzttQ0FPREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQWRBLEFBY0NBLElBQUE7WUFkRCwyQ0FjQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi4vaG9tZS9Ib21lQ29tcG9uZW50XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Fib3V0JyxcclxuICAgIHRlbXBsYXRlOiBgPGgxPkFib3V0PC9oMT5cclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vSG9tZSddXCI+QmFjayB0byBIb21lIGNvbXBvbmVudDwvYT5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
