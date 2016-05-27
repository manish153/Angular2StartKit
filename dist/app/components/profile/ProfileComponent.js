System.register(['angular2/core', "angular2/router", "angular2/common", '../apartment/ApartmentService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, ApartmentService_1;
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
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(fb, apartmentService) {
                    this.fb = fb;
                    this.apartmentService = apartmentService;
                    this.isEdit = false;
                    this.userEmail = JSON.parse(localStorage.getItem('profile'));
                    this.apartmentService = apartmentService;
                }
                ProfileComponent.prototype.onSubmit = function (form) {
                    console.log(this.myForm);
                    this.isEdit = false;
                    //post to rest API
                };
                ;
                ProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.apartmentService.getProfile(this.userEmail.email).subscribe(function (res) { return _this.profileObject = res; });
                    this.myForm = this.fb.group({
                        'name': ['', common_1.Validators.required],
                    });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        template: "<h1>Profile Page</h1>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n    <div *ngFor=\"#prof of profileObject\">\n      <!-- <label from=\"name\">Name</label>\n      <input [ngFormControl]=\"myForm.controls['name'] \"type=\"text\" id=\"name\" #name=\"ngForm\" [(ngModel)]=\"prof.userFirstName\"> -->\n\n      <label *ngIf=\"!isEdit\" (click)=\"isEdit=true\" from=\"name\">Name: {{prof.userFirstName}}</label>\n      <label *ngIf=\"isEdit\" from=\"name\">Name: </label> <input *ngIf=\"isEdit\" (keydown.enter)=\"isEdit=false\" [ngFormControl]=\"myForm.controls['name'] \"type=\"text\" id=\"name\" #name=\"ngForm\" [(ngModel)]=\"prof.userFirstName\">\n        \n\n        <!--<span class=\"validator-error\" *ngIf=\"!name.valid\"> required</span>-->\n    </div>\n    <!--<button name=\"submit\" type=\"submit\" [disabled]=\"!f.valid\">submit</button>-->\n    <button name=\"submit\" type=\"submit\">submit</button>\n    \n    </form>\n    \n    <!--<div *ngFor=\"#prof of profileObject\">\n    {{prof.userFirstName}}\n    </div>-->\n    \n    <a [routerLink]=\"['../Dashboard']\">Back to Dash</a>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, ApartmentService_1.ApartmentService])
                ], ProfileComponent);
                return ProfileComponent;
            })();
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcm9maWxlQ29tcG9uZW50IiwiUHJvZmlsZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlByb2ZpbGVDb21wb25lbnQub25TdWJtaXQiLCJQcm9maWxlQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFtQ0lBLDBCQUFvQkEsRUFBZUEsRUFBVUEsZ0JBQWtDQTtvQkFBM0RDLE9BQUVBLEdBQUZBLEVBQUVBLENBQWFBO29CQUFVQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtvQkFML0VBLFdBQU1BLEdBQVlBLEtBQUtBLENBQUNBO29CQUN4QkEsY0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBS3BEQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLGdCQUFnQkEsQ0FBQ0E7Z0JBQzdDQSxDQUFDQTtnQkFHREQsbUNBQVFBLEdBQVJBLFVBQVNBLElBQUlBO29CQUNURSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtvQkFDekJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO29CQUNwQkEsa0JBQWtCQTtnQkFDdEJBLENBQUNBOztnQkFFREYsbUNBQVFBLEdBQVJBO29CQUFBRyxpQkFLQ0E7b0JBSkdBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsR0FBR0EsRUFBeEJBLENBQXdCQSxDQUFDQSxDQUFDQTtvQkFDbEdBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBO3dCQUN4QkEsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO3FCQUNwQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQW5ETEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsU0FBU0E7d0JBQ25CQSxRQUFRQSxFQUFFQSw2bUNBc0JUQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtxQkFDbENBLENBQUNBOztxQ0EwQkRBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FwREEsQUFvRENBLElBQUE7WUFwREQsK0NBb0RDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5pbXBvcnQge1NpZGViYXJDb21wb25lbnR9IGZyb20gJy4uL2FwcC9TaWRlYmFyQ29tcG9uZW50J1xyXG5pbXBvcnQge0FwYXJ0bWVudFNlcnZpY2V9IGZyb20gJy4uL2FwYXJ0bWVudC9BcGFydG1lbnRTZXJ2aWNlJ1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcm9maWxlJyxcclxuICAgIHRlbXBsYXRlOiBgPGgxPlByb2ZpbGUgUGFnZTwvaDE+XHJcbiAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjZj1cIm5nRm9ybVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCIjcHJvZiBvZiBwcm9maWxlT2JqZWN0XCI+XHJcbiAgICAgIDwhLS0gPGxhYmVsIGZyb209XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ25hbWUnXSBcInR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgI25hbWU9XCJuZ0Zvcm1cIiBbKG5nTW9kZWwpXT1cInByb2YudXNlckZpcnN0TmFtZVwiPiAtLT5cclxuXHJcbiAgICAgIDxsYWJlbCAqbmdJZj1cIiFpc0VkaXRcIiAoY2xpY2spPVwiaXNFZGl0PXRydWVcIiBmcm9tPVwibmFtZVwiPk5hbWU6IHt7cHJvZi51c2VyRmlyc3ROYW1lfX08L2xhYmVsPlxyXG4gICAgICA8bGFiZWwgKm5nSWY9XCJpc0VkaXRcIiBmcm9tPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+IDxpbnB1dCAqbmdJZj1cImlzRWRpdFwiIChrZXlkb3duLmVudGVyKT1cImlzRWRpdD1mYWxzZVwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snbmFtZSddIFwidHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiAjbmFtZT1cIm5nRm9ybVwiIFsobmdNb2RlbCldPVwicHJvZi51c2VyRmlyc3ROYW1lXCI+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDwhLS08c3BhbiBjbGFzcz1cInZhbGlkYXRvci1lcnJvclwiICpuZ0lmPVwiIW5hbWUudmFsaWRcIj4gcmVxdWlyZWQ8L3NwYW4+LS0+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS08YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkXCI+c3VibWl0PC9idXR0b24+LS0+XHJcbiAgICA8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+XHJcbiAgICBcclxuICAgIDwvZm9ybT5cclxuICAgIFxyXG4gICAgPCEtLTxkaXYgKm5nRm9yPVwiI3Byb2Ygb2YgcHJvZmlsZU9iamVjdFwiPlxyXG4gICAge3twcm9mLnVzZXJGaXJzdE5hbWV9fVxyXG4gICAgPC9kaXY+LS0+XHJcbiAgICBcclxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vRGFzaGJvYXJkJ11cIj5CYWNrIHRvIERhc2g8L2E+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBpc0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHVzZXJFbWFpbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSk7XHJcbiAgICBwdWJsaWMgcHJvZmlsZU9iamVjdDogT2JqZWN0W107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGFwYXJ0bWVudFNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmFwYXJ0bWVudFNlcnZpY2UgPSBhcGFydG1lbnRTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUZvcm0pO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2U7XHJcbiAgICAgICAgLy9wb3N0IHRvIHJlc3QgQVBJXHJcbiAgICB9O1xyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5hcGFydG1lbnRTZXJ2aWNlLmdldFByb2ZpbGUodGhpcy51c2VyRW1haWwuZW1haWwpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5wcm9maWxlT2JqZWN0ID0gcmVzKTtcclxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
