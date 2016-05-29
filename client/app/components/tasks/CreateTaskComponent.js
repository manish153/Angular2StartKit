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
    var CreateTaskComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CreateTaskComponent = (function () {
                function CreateTaskComponent() {
                }
                CreateTaskComponent = __decorate([
                    core_1.Component({
                        selector: 'tasks',
                        template: "<div mdl class=\"mdl-grid demo-content\">\n      \n          <div class=\"demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col\">\n                <h3>Create Task Page</h3>   \n\n                <form action=\"#\">\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                    <input class=\"mdl-textfield__input\" type=\"text\" pattern=\"[A-Z,a-z]*\" id=\"username\" />\n                    <label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n                    <span class=\"mdl-textfield__error\">Only alphabet and no spaces, please!</span>\n                  </div>\n                </form>\n\n                \n    \n          </div>\n          <div class=\"demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing\">\n            <div class=\"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n              <div class=\"mdl-card__title mdl-card--expand mdl-color--teal-300\">\n                <h2 class=\"mdl-card__title-text\">View Tasks</h2>\n              </div>\n              <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\n                View Existing Tasks  \n              </div>\n              <div class=\"mdl-card__actions mdl-card--border\">\n                <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">View</a>\n              </div>\n            </div>\n            <div class=\"demo-separator mdl-cell--1-col\"></div>\n            <div class=\"demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop\">\n              <div class=\"mdl-card__supporting-text mdl-color-text--blue-grey-50\">\n                <h3>View options</h3>\n                <ul>\n                  <li>\n                    <label for=\"chkbox1\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox1\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Click per object</span>\n                    </label>\n                  </li>\n                  <li>\n                    <label for=\"chkbox2\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox2\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Views per object</span>\n                    </label>\n                  </li>\n                  <li>\n                    <label for=\"chkbox3\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox3\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Objects selected</span>\n                    </label>\n                  </li>\n                  <li>\n                    <label for=\"chkbox4\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                      <input type=\"checkbox\" id=\"chkbox4\" class=\"mdl-checkbox__input\">\n                      <span class=\"mdl-checkbox__label\">Objects viewed</span>\n                    </label>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"mdl-card__actions mdl-card--border\">\n                <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50\">Change location</a>\n                <div class=\"mdl-layout-spacer\"></div>\n                <i class=\"material-icons\">location_on</i>\n              </div>\n            </div>\n          </div>\n         </div>\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, MDL]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CreateTaskComponent);
                return CreateTaskComponent;
            }());
            exports_1("CreateTaskComponent", CreateTaskComponent);
        }
    }
});
//# sourceMappingURL=CreateTaskComponent.js.map