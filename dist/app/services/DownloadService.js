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
    var DownloadService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let DownloadService = class DownloadService extends http_1.BrowserXhr {
                build() {
                    let xhr = super.build();
                    xhr.responseType = "blob";
                    return (xhr);
                }
            };
            DownloadService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], DownloadService);
            exports_1("DownloadService", DownloadService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9Eb3dubG9hZFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSxvREFBcUMsaUJBQVU7Z0JBQzdDLEtBQUs7b0JBQ0gsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN4QixHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztvQkFDMUIsTUFBTSxDQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7WUFDSCxDQUFDO1lBUEQ7Z0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7WUFDYiw2Q0FNQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9Eb3dubG9hZFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJYaHJ9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRG93bmxvYWRTZXJ2aWNlIGV4dGVuZHMgQnJvd3NlclhociB7XHJcbiAgYnVpbGQoKTogYW55IHtcclxuICAgIGxldCB4aHIgPSBzdXBlci5idWlsZCgpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xyXG4gICAgcmV0dXJuIDxhbnk+KHhocik7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
