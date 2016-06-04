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
            let CommunityComponent = class CommunityComponent {
                constructor() {
                }
            };
            CommunityComponent = __decorate([
                core_1.Component({
                    selector: 'community',
                    styleUrls: ['../app/assets/app.css'],
                    template: `<h1>Community Page - work in progress </h1>
    
    <a [routerLink]="['../Dashboard']">Back to Dash</a>

    `,
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], CommunityComponent);
            exports_1("CommunityComponent", CommunityComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbW11bml0eS9Db21tdW5pdHlDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFDSTtnQkFBZ0IsQ0FBQztZQUNyQixDQUFDO1lBYkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3BDLFFBQVEsRUFBRTs7OztLQUlUO29CQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO2lCQUNsQyxDQUFDOztrQ0FBQTtZQUVGLG1EQUVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvY29tbXVuaXR5L0NvbW11bml0eUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbW11bml0eScsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vYXBwL2Fzc2V0cy9hcHAuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZTogYDxoMT5Db21tdW5pdHkgUGFnZSAtIHdvcmsgaW4gcHJvZ3Jlc3MgPC9oMT5cclxuICAgIFxyXG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9EYXNoYm9hcmQnXVwiPkJhY2sgdG8gRGFzaDwvYT5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW11bml0eUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
