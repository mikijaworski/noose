"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var RankingsComponent = /** @class */ (function () {
    function RankingsComponent(_activatedRoute, _rankingService) {
        this._activatedRoute = _activatedRoute;
        this._rankingService = _rankingService;
        this.ranking = [];
    }
    RankingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.field = this._activatedRoute.snapshot.paramMap.get('field');
        this.handle = this._activatedRoute.snapshot.paramMap.get('handle');
        this._rankingService.getRanking(this.handle)
            .then(function (list) {
            _this.ranking = list;
            // console.log(this.ranking)
        })["catch"](function (err) { return console.log(err); });
    };
    RankingsComponent = __decorate([
        core_1.Component({
            selector: 'app-rankings',
            templateUrl: './rankings.component.html',
            styleUrls: ['./rankings.component.scss'],
        })
    ], RankingsComponent);
    return RankingsComponent;
}());
exports.RankingsComponent = RankingsComponent;
