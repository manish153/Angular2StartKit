System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'app-header',
                        /*template: '<router-outlet></router-outlet>',*/
                        template: "\n    <div class=\"mdl-layout__header-row\">\n          <span class=\"mdl-layout-title\">Angular Application</span>\n          <div class=\"mdl-layout-spacer\"></div>\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\n            <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\n              <i class=\"material-icons\">search</i>\n            </label>\n            <div class=\"mdl-textfield__expandable-holder\">\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"search\">\n              <label class=\"mdl-textfield__label\" for=\"search\">Enter your query...</label>\n            </div>\n          </div>\n          <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"hdrbtn\">\n            <i class=\"material-icons\">more_vert</i>\n          </button>\n\n          <ul class=\"mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right\" for=\"hdrbtn\">\n            <li class=\"mdl-menu__item\">About</li>\n            <li class=\"mdl-menu__item\">Contact</li>\n            <li class=\"mdl-menu__item\">Legal information</li>\n          </ul>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9IZWFkZXJDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQ0E7Z0JBRUs7Z0JBQWdCLENBQUM7Z0JBaEN0QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixnREFBZ0Q7d0JBQ2hELFFBQVEsRUFBRSw2cUNBdUJUO3FCQUVKLENBQUM7O21DQUFBO2dCQU1GLHNCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCw2Q0FJQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9IZWFkZXJDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TURMfSBmcm9tICcuL01hdGVyaWFsRGVzaWduTGl0ZVVwZ3JhZGVFbGVtZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWhlYWRlcicsXHJcbiAgICAvKnRlbXBsYXRlOiAnPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PicsKi9cclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dF9faGVhZGVyLXJvd1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtbGF5b3V0LXRpdGxlXCI+QW5ndWxhciBBcHBsaWNhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1leHBhbmRhYmxlXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uXCIgZm9yPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2V4cGFuZGFibGUtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBmb3I9XCJzZWFyY2hcIj5FbnRlciB5b3VyIHF1ZXJ5Li4uPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgbWRsLWJ1dHRvbi0taWNvblwiIGlkPVwiaGRyYnRuXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tb3JlX3ZlcnQ8L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJtZGwtbWVudSBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdCBtZGwtbWVudS0tYm90dG9tLXJpZ2h0XCIgZm9yPVwiaGRyYnRuXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCI+QWJvdXQ8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiPkxlZ2FsIGluZm9ybWF0aW9uPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgIC8qICBkaXJlY3RpdmVzOiBbIE1ETCBdKi9cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG5cclxuICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
