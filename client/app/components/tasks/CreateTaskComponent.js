System.register(['angular2/core', "angular2/router", '../app/MaterialDesignLiteUpgradeElement', "../apartment/ApartmentService"], function(exports_1, context_1) {
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
    var core_1, router_1, MaterialDesignLiteUpgradeElement_1, ApartmentService_1;
    var CreateTaskComponent, Taskstatus;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (MaterialDesignLiteUpgradeElement_1_1) {
                MaterialDesignLiteUpgradeElement_1 = MaterialDesignLiteUpgradeElement_1_1;
            },
            function (ApartmentService_1_1) {
                ApartmentService_1 = ApartmentService_1_1;
            }],
        execute: function() {
            CreateTaskComponent = (function () {
                function CreateTaskComponent(apartmentService) {
                    this.apartmentService = apartmentService;
                    this.dropdownValues = [
                        { "name": "OPEN", "value": "OPEN" },
                        { "name": "CLOSED", "value": "CLOSED" }
                    ];
                    this.selectedStatus = this.dropdownValues[0];
                    this.data = {};
                }
                CreateTaskComponent.prototype.onSubmit = function (form) {
                    console.log(this.data.taskname);
                    console.log(JSON.stringify(this.data));
                    this.apartmentService.postTasks(this.data);
                    this.data = {};
                };
                CreateTaskComponent.prototype.onSelect = function (taskevent) {
                    this.selectedStatus = null;
                    for (var i = 0; i < this.dropdownValues.length; i++) {
                        if (this.dropdownValues[i].value == taskevent) {
                            this.selectedStatus = this.dropdownValues[i];
                            console.log(this.selectedStatus.value);
                        }
                    }
                };
                CreateTaskComponent = __decorate([
                    core_1.Component({
                        selector: 'tasks',
                        template: "<div mdl class=\"mdl-grid demo-content\">\n      \n          <div class=\"demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col\">\n                <h3>Create Task Page</h3>   \n\n                <form action=\"#\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                    <input class=\"mdl-textfield__input\" type=\"text\" pattern=\"[A-Z,a-z]*\" id=\"taskname\" [(ngModel)]=\"data.taskname\"/>\n                    <label class=\"mdl-textfield__label\" for=\"taskname\">Task Name</label>\n                    <span class=\"mdl-textfield__error\">Only alphabet and no spaces, please!</span>\n                   </div> <br/>\n                  <div class=\"mdl-textfield mdl-js-textfield\">\n                    <textarea class=\"mdl-textfield__input\" type=\"text\" rows= \"5\" id=\"taskdesc\" [(ngModel)]=\"data.taskdesc\"></textarea>\n                    <label class=\"mdl-textfield__label\" for=\"taskdesc\">Task Description</label>\n                  </div> <br/>\n                  <select (change)=\"onSelect($event.target.value)\">\n                      <option *ngFor=\"#taskstatus of dropdownValues\" [value]=\"taskstatus.value\">{{taskstatus.name}}</option>\n                  </select>\n      \n                <br/>  <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" type=\"submit\">Create Task</button>\n                </form>\n          </div>\n          <div class=\"demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing\">\n            <div class=\"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n              <div class=\"mdl-card__title mdl-card--expand mdl-color--teal-300\">\n                <h2 class=\"mdl-card__title-text\">View Tasks</h2>\n              </div>\n              <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\n                View Existing Tasks  \n              </div>\n              <div class=\"mdl-card__actions mdl-card--border\">\n                <a [routerLink]=\"['../Tasks']\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">View All Tasks</a>\n              </div>\n            </div>\n            <div class=\"demo-separator mdl-cell--1-col\"></div>\n            <div class=\"demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop\">\n              <div class=\"mdl-card__supporting-text mdl-color-text--blue-grey-50\">\n                <h3>View options</h3>\n                <ul>\n                  <li>\n                    <label for=\"chkbox1\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox1\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Click per object</span>\n                    </label>\n                  </li>\n                  <li>\n                    <label for=\"chkbox2\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox2\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Views per object</span>\n                    </label>\n                  </li>\n                  <li>\n                    <label for=\"chkbox3\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox3\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Objects selected</span>\n                    </label>\n                  </li>\n                  <li>\n                    <label for=\"chkbox4\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox4\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Objects viewed</span>\n                    </label>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"mdl-card__actions mdl-card--border\">\n                <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50\">Change location</a>\n                <div class=\"mdl-layout-spacer\"></div>\n                <i class=\"material-icons\">location_on</i>\n              </div>\n            </div>\n          </div>\n         </div>\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, MaterialDesignLiteUpgradeElement_1.MDL]
                    }), 
                    __metadata('design:paramtypes', [ApartmentService_1.ApartmentService])
                ], CreateTaskComponent);
                return CreateTaskComponent;
            }());
            exports_1("CreateTaskComponent", CreateTaskComponent);
            Taskstatus = (function () {
                function Taskstatus() {
                }
                return Taskstatus;
            }());
        }
    }
});
//# sourceMappingURL=CreateTaskComponent.js.map