System.register(['angular2/core', "angular2/router", "angular2/common", '../apartment/ApartmentService', '../app/MaterialDesignLiteUpgradeElement'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, ApartmentService_1, MaterialDesignLiteUpgradeElement_1;
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
            },
            function (MaterialDesignLiteUpgradeElement_1_1) {
                MaterialDesignLiteUpgradeElement_1 = MaterialDesignLiteUpgradeElement_1_1;
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
                        template: "<div mdl class=\"mdl-grid demo-content\">\n      \n          <div class=\"demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col\">\n                <h3>Profile Page</h3>   \n                <form action=\"#\" [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n                 <div class=\"mdl-textfield mdl-js-textfield\" *ngFor=\"#prof of profileObject\">\n\n                  <label  *ngIf=\"!isEdit\" (click)=\"isEdit=true\" from=\"name\">Name: {{prof.userFirstName}} </label> \n                  <label  *ngIf=\"isEdit\" from=\"name\">Name: </label> <input class=\"mdl-textfield__input\" *ngIf=\"isEdit\" (keydown.enter)=\"isEdit=false\" [ngFormControl]=\"myForm.controls['name'] \"type=\"text\" id=\"name\" #name=\"ngForm\" [(ngModel)]=\"prof.userFirstName\">\n\n                    <!--<span class=\"validator-error\" *ngIf=\"!name.valid\"> required</span>-->\n          </div>\n          <!--<button name=\"submit\" type=\"submit\" [disabled]=\"!f.valid\">submit</button>-->\n                <br/>\n                <button *ngIf=\"isEdit\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" name=\"submit\" type=\"submit\">submit</button>    \n            \n                 </form>\n    \n          </div>\n          <div class=\"demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing\">\n            <div class=\"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n              <div class=\"mdl-card__title mdl-card--expand mdl-color--teal-300\">\n                <h2 class=\"mdl-card__title-text\">Updates</h2>\n              </div>\n              <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\n                Non dolore elit adipisicing ea reprehenderit consectetur culpa.\n              </div>\n              <div class=\"mdl-card__actions mdl-card--border\">\n                <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">Read More</a>\n              </div>\n            </div>\n            <div class=\"demo-separator mdl-cell--1-col\"></div>\n            <div class=\"demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop\">\n              <div class=\"mdl-card__supporting-text mdl-color-text--blue-grey-50\">\n                <h3>View options</h3>\n                <ul>\n                  <li>\n                    <label for=\"chkbox1\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox1\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Click per object</span>\n                    </label>\n                  </li>\n                  <li>\n                    <label for=\"chkbox2\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox2\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Views per object</span>\n                    </label>\n                  </li>\n                  <li>\n                    <label for=\"chkbox3\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox3\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Objects selected</span>\n                    </label>\n                  </li>\n                  <li>\n                    <label for=\"chkbox4\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox4\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Objects viewed</span>\n                    </label>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"mdl-card__actions mdl-card--border\">\n                <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50\">Change location</a>\n                <div class=\"mdl-layout-spacer\"></div>\n                <i class=\"material-icons\">location_on</i>\n              </div>\n            </div>\n          </div>\n         </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, MaterialDesignLiteUpgradeElement_1.MDL]
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