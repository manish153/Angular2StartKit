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
    var CommunityComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CommunityComponent = (function () {
                function CommunityComponent() {
                }
                CommunityComponent = __decorate([
                    core_1.Component({
                        selector: 'community',
                        styleUrls: ['../app/assets/app.css'],
                        template: "<h1>Community Page - work in progress </h1>\n    \n    <a [routerLink]=\"['../Dashboard']\">Back to Dash</a>\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommunityComponent);
                return CommunityComponent;
            })();
            exports_1("CommunityComponent", CommunityComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbW11bml0eS9Db21tdW5pdHlDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQ29tbXVuaXR5Q29tcG9uZW50IiwiQ29tbXVuaXR5Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFZSUE7Z0JBQWdCQyxDQUFDQTtnQkFackJEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsdUJBQXVCQSxDQUFDQTt3QkFDcENBLFFBQVFBLEVBQUVBLHNIQUlUQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtxQkFDbENBLENBQUNBOzt1Q0FJREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQWJBLEFBYUNBLElBQUE7WUFiRCxtREFhQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NvbW11bml0eS9Db21tdW5pdHlDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb21tdW5pdHknLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL2FwcC9hc3NldHMvYXBwLmNzcyddLFxyXG4gICAgdGVtcGxhdGU6IGA8aDE+Q29tbXVuaXR5IFBhZ2UgLSB3b3JrIGluIHByb2dyZXNzIDwvaDE+XHJcbiAgICBcclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vRGFzaGJvYXJkJ11cIj5CYWNrIHRvIERhc2g8L2E+XHJcblxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tdW5pdHlDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
