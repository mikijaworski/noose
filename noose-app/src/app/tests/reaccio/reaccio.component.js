"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ReaccioComponent = /** @class */ (function () {
    function ReaccioComponent(_reaccioService) {
        this._reaccioService = _reaccioService;
        this.authUser = false;
        this.hasError = false;
        this.NumParty = 0;
        this.MaxParty = 5;
        this.ContadorIntervals = 0;
        this.IncrementaContador = 0;
        this.gameOver = false;
        this.resultat = 0;
        this.formVisibility = false;
    }
    ReaccioComponent.prototype.ngOnInit = function () {
        this._reaccioService.checkUserLogged();
        this.authUser = this._reaccioService.authUser;
        this.hasUpload = false;
    };
    ReaccioComponent.prototype.StartLevel = function () {
        var _this = this;
        var number = Math.trunc(Math.random() * 4000);
        this.NumParty++;
        setTimeout(function () {
            _this.hasError = true;
            _this.Timer = setInterval(function () {
                _this.ContadorIntervals++;
            }, 1);
        }, number);
    };
    ReaccioComponent.prototype.IntervalCount = function () {
        clearInterval(this.Timer);
        this.IncrementaContador += this.ContadorIntervals;
        console.log(this.ContadorIntervals);
        this.ContadorIntervals = 0;
        if (this.NumParty < this.MaxParty) {
            this.hasError = false;
            this.StartLevel();
        }
        else {
            this.gameOver = true;
            this.resultat = Math.trunc(this.IncrementaContador / this.MaxParty);
        }
    };
    ReaccioComponent.prototype.ShowForm = function () {
        this.formVisibility = true;
        console.log(this.formVisibility);
    };
    ReaccioComponent.prototype.Upload = function () {
        this.hasUpload = true;
        this._reaccioService.UploadProgress(this.resultat);
    };
    ReaccioComponent = __decorate([
        core_1.Component({
            selector: 'app-reaccio',
            templateUrl: './reaccio.component.html',
            styleUrls: ['./reaccio.component.scss'],
        })
    ], ReaccioComponent);
    return ReaccioComponent;
}());
exports.ReaccioComponent = ReaccioComponent;
