"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var UserService = /** @class */ (function () {
    function UserService(http, es, authService) {
        this.http = http;
        this.es = es;
        this.authService = authService;
    }
    UserService.prototype.getUser = function (userId) {
        if (userId === void 0) { userId = this.authService.currentUserId; }
        return this.http.get(this.es.userURL(userId)).pipe(operators_1.shareReplay());
    };
    UserService.prototype.register = function (user) {
        var url = this.es.baseUrl + '/register';
        return this.http.post(url, user);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
