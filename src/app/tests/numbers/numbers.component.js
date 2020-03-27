"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NumbersComponent = /** @class */ (function () {
    function NumbersComponent(_numbersService, router) {
        this._numbersService = _numbersService;
        this.router = router;
        this.authUser = false;
        this.level = 1;
        this.hasStarted = false;
        this.numberDisapear = false;
        this.startDisabled = false;
        this.gameOver = false;
        this.hasUpload = false;
    }
    NumbersComponent.prototype.ngOnInit = function () {
        this._numbersService.checkUserLogged();
        this.authUser = this._numbersService.authUser;
        this.maxTime = 2000;
    };
    NumbersComponent.prototype.NextLevel = function () {
        this.level++;
        this.enteredNumber = null;
        this.hasStarted = false;
        this.numberDisapear = false;
    };
    NumbersComponent.prototype.StartLevel = function () {
        var _this = this;
        this.hasStarted = true;
        var str = '';
        for (var i = 0; i < this.level; i++) {
            var number = Math.trunc(Math.random() * 10);
            console.log(number);
            str += number;
        }
        this.randomNumber = str;
        setTimeout(function () {
            _this.startDisabled = true;
            _this.numberDisapear = true;
        }, this.maxTime);
    };
    NumbersComponent.prototype.Check = function () {
        console.log(this.randomNumber, this.enteredNumber);
        this.startDisabled = false;
        if (this.randomNumber === this.enteredNumber) {
            this.NextLevel();
            this._numbersService.OpenSnackbar('You guessed the number!');
        }
        else {
            this.gameOver = true;
            this._numbersService.OpenSnackbar('You failed the number!');
        }
    };
    NumbersComponent.prototype.Upload = function () {
        console.log('uploading');
        this.hasUpload = true;
        this._numbersService.UploadProgress(this.level);
    };
    NumbersComponent.prototype.Reset = function () {
        this.level = 1;
        this.enteredNumber = null;
        this.hasStarted = false;
        this.numberDisapear = false;
        this.gameOver = false;
        this.hasUpload = false;
    };
    NumbersComponent = __decorate([
        core_1.Component({
            selector: 'app-numbers',
            templateUrl: './numbers.component.html',
            styleUrls: ['./numbers.component.scss'],
        })
    ], NumbersComponent);
    return NumbersComponent;
}());
exports.NumbersComponent = NumbersComponent;
