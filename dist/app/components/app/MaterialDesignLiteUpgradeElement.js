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
    var MDL;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MDL = (function () {
                function MDL() {
                }
                MDL.prototype.ngAfterViewInit = function () {
                    componentHandler.upgradeAllRegistered();
                };
                MDL = __decorate([
                    core_1.Directive({
                        selector: '[mdl]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MDL);
                return MDL;
            })();
            exports_1("MDL", MDL);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9NYXRlcmlhbERlc2lnbkxpdGVVcGdyYWRlRWxlbWVudC50cyJdLCJuYW1lcyI6WyJNREwiLCJNREwuY29uc3RydWN0b3IiLCJNREwubmdBZnRlclZpZXdJbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBVUFDLENBQUNBO2dCQUhHRCw2QkFBZUEsR0FBZkE7b0JBQ0lFLGdCQUFnQkEsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxDQUFDQTtnQkFDNUNBLENBQUNBO2dCQVRMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTtxQkFDcEJBLENBQUNBOzt3QkFRREE7Z0JBQURBLFVBQUNBO1lBQURBLENBVkEsQUFVQ0EsSUFBQTtZQVZELHFCQVVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL01hdGVyaWFsRGVzaWduTGl0ZVVwZ3JhZGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEFmdGVyVmlld0luaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSB2YXIgY29tcG9uZW50SGFuZGxlciA6IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbWRsXSdcclxufSkgICAgXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1ETCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVBbGxSZWdpc3RlcmVkKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=