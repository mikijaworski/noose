"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var RankingService = /** @class */ (function () {
    function RankingService(_httpClient) {
        this._httpClient = _httpClient;
    }
    RankingService.prototype.getRanking = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = environment_1.environment.api + '/' + handle + '/ranking';
            _this._httpClient.get(url)
                .subscribe(function (result) {
                // console.log(result.rows)
                var ranking = [];
                if (result.code === 1) {
                    ranking = result.rows;
                }
                resolve(ranking);
            });
        });
    };
    RankingService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RankingService);
    return RankingService;
}());
exports.RankingService = RankingService;
