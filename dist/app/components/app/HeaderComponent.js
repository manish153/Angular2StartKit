System.register(['angular2/core'], function(exports_1) {
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
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9IZWFkZXJDb21wb25lbnQudHMiXSwibmFtZXMiOlsiSGVhZGVyQ29tcG9uZW50IiwiSGVhZGVyQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFnQ0tBO2dCQUFnQkMsQ0FBQ0E7Z0JBaEN0QkQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxnREFBZ0RBO3dCQUNoREEsUUFBUUEsRUFBRUEsNnFDQXVCVEE7cUJBRUpBLENBQUNBOztvQ0FNREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtZQWxDRCw2Q0FrQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAvSGVhZGVyQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge01ETH0gZnJvbSAnLi9NYXRlcmlhbERlc2lnbkxpdGVVcGdyYWRlRWxlbWVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxyXG4gICAgLyp0ZW1wbGF0ZTogJzxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4nLCovXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXRfX2hlYWRlci1yb3dcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWxheW91dC10aXRsZVwiPkFuZ3VsYXIgQXBwbGljYXRpb248L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZXhwYW5kYWJsZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiIGZvcj1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19leHBhbmRhYmxlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgZm9yPVwic2VhcmNoXCI+RW50ZXIgeW91ciBxdWVyeS4uLjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG1kbC1idXR0b24tLWljb25cIiBpZD1cImhkcmJ0blwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bW9yZV92ZXJ0PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwibWRsLW1lbnUgbWRsLWpzLW1lbnUgbWRsLWpzLXJpcHBsZS1lZmZlY3QgbWRsLW1lbnUtLWJvdHRvbS1yaWdodFwiIGZvcj1cImhkcmJ0blwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiPkFib3V0PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWRsLW1lbnVfX2l0ZW1cIj5Db250YWN0PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWRsLW1lbnVfX2l0ZW1cIj5MZWdhbCBpbmZvcm1hdGlvbjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgICAvKiAgZGlyZWN0aXZlczogWyBNREwgXSovXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcclxuXHJcbiAgICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
