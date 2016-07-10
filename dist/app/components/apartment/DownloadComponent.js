System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var DownloadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let DownloadComponent = class DownloadComponent {
                constructor(http) {
                    this.http = http;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], DownloadComponent.prototype, "filename", void 0);
            DownloadComponent = __decorate([
                core_1.Component({
                    selector: 'download',
                    template: '<div (click)="downloadFile() ">Download</div>'
                }), 
                __metadata('design:paramtypes', [http_1.Http])
            ], DownloadComponent);
            exports_1("DownloadComponent", DownloadComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwYXJ0bWVudC9Eb3dubG9hZENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUlFLFlBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztnQkFDN0IsQ0FBQztZQVlILENBQUM7WUFoQkM7Z0JBQUMsWUFBSyxFQUFFOzsrREFBQTtZQVBWO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSwrQ0FBK0M7aUJBRzFELENBQUM7O2lDQUFBO1lBQ0YsaURBaUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBhcnRtZW50L0Rvd25sb2FkQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXBhcnRtZW50U2VydmljZX0gZnJvbSBcIi4vQXBhcnRtZW50U2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBDb250cm9sR3JvdXB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuLy9pbXBvcnQge0Rvd25sb2FkU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0Rvd25sb2FkU2VydmljZVwiO1xyXG5pbXBvcnQge0FwdERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL0FwdERldGFpbHNDb21wb25lbnRcIjtcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZG93bmxvYWQnLFxyXG4gIHRlbXBsYXRlOiAnPGRpdiAoY2xpY2spPVwiZG93bmxvYWRGaWxlKCkgXCI+RG93bmxvYWQ8L2Rpdj4nXHJcbiAgLy8sIHByb3ZpZGVyczogW0Rvd25sb2FkU2VydmljZV0gXHJcbiAgICAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIERvd25sb2FkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGZpbGVuYW1lOnN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApIHtcclxuICB9XHJcblxyXG4gIC8vIGRvd25sb2FkRmlsZSgpIHtcclxuICAvLyAgIHRoaXMuaHR0cC5nZXQoXHJcbiAgLy8gICAgICdodHRwczovL21hcGFwaS5hcGlzcGFyay5uZXQvdjEvaW1hZ2VzLycrdGhpcy5maWxlbmFtZSkuc3Vic2NyaWJlKFxyXG4gIC8vICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgICAgdmFyIG1lZGlhVHlwZSA9ICdhcHBsaWNhdGlvbi9wZGYnO1xyXG4gIC8vICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2UuX2JvZHldLCB7dHlwZTogbWVkaWFUeXBlfSk7XHJcbiAgLy8gICAgICAgICB2YXIgZmlsZW5hbWUgPSAndGVzdC5wZGYnO1xyXG4gIC8vICAgICAgICAgc2F2ZUFzKGJsb2IsIGZpbGVuYW1lKTtcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
