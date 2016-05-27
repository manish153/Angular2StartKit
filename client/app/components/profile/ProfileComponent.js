System.register(['angular2/core', "angular2/router", "angular2/common", '../apartment/ApartmentService'], function(exports_1, context_1) {
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
                    this.userEmail = JSON.parse(localStorage.getItem('profile'));
                    this.apartmentService = apartmentService;
                }
                ProfileComponent.prototype.onSubmit = function (form) {
                    console.log(this.myForm);
                    //post to rest API
                };
                ;
                ProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log(this.userEmail.email);
                    this.apartmentService.getProfile(this.userEmail.email).subscribe(function (res) { _this.profileObject = res; });
                    console.log(JSON.stringify(this.profileObject));
                    this.myForm = this.fb.group({
                        'name': ['', common_1.Validators.required],
                    });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        template: "<h1>Profile Page</h1>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n    <div>\n        <label from=\"name\">Name</label> \n        <input [ngFormControl]=\"myForm.controls['name'] \"type=\"text\" id=\"name\" #name=\"ngForm\">\n        <span class=\"validator-error\" *ngIf=\"!name.valid\"> required</span>\n    </div>\n    <button name=\"submit\" type=\"submit\" [disabled]=\"!f.valid\">submit</button>\n    \n    </form>\n\n    <a [routerLink]=\"['../Dashboard']\">Back to Dash</a>\n\n\n {{userEmail.email}}\n {{profileObject | json}}\n<div *ngFor=\"#prof of profileObject\">\n\n {{prof.userEmail}}\n </div>\n\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, ApartmentService_1.ApartmentService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=ProfileComponent.js.map