System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var ApartmentService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            ApartmentService = (function () {
                function ApartmentService(http) {
                    this.http = http;
                }
                /*APARTMENT SERVICE METHODS*/
                ApartmentService.prototype.getApartments = function () {
                    return this.http.get('./api/apartments').map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.postApartment = function (data) {
                    return this.http.post('/api/apartments', JSON.stringify(data), {
                        headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                    })
                        .map(function (res) { return res.json(); }).subscribe();
                };
                /*PROFILE SERVICE METHODS*/
                ApartmentService.prototype.getProfile = function (userEmail) {
                    return this.http.get("./api/apartments/getprofile/" + userEmail).map(function (res) { return res.json(); });
                };
                /*TASK SERVICE METHODS*/
                ApartmentService.prototype.postTasks = function (data) {
                    return this.http.post('/api/newtask', JSON.stringify(data), {
                        headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                    })
                        .map(function (res) { return res.json(); }).subscribe();
                };
                ApartmentService.prototype.getAllTasks = function () {
                    return this.http.get('./api/newtask').map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.getMyTask = function () { };
                ApartmentService.prototype.deleteTask = function () { };
                ApartmentService.prototype.markCompleted = function () { };
                ApartmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApartmentService);
                return ApartmentService;
            }());
            exports_1("ApartmentService", ApartmentService);
        }
    }
});
//# sourceMappingURL=ApartmentService.js.map