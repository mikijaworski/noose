"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(_appService, platform, splashScreen, statusBar, _authService, _router) {
        this._appService = _appService;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this._authService = _authService;
        this._router = _router;
        this.selectedIndex = 0;
        this.initializeApp();
        this.appPages = [];
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        // const path = window.location.pathname.split('folder/')[1];
        // if (path !== undefined) {
        //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        // }
        var _this = this;
        this._appService.onAppPagesChanged
            .subscribe(function (logged) {
            console.log(logged);
            if (logged) {
                _this.appPages = [
                    {
                        title: 'Test list',
                        url: '/',
                        icon: 'mail',
                        show: true
                    },
                    // {
                    //   title: 'Login',
                    //   url: '/login',
                    //   icon: 'paper-plane',
                    //   show: true
                    // },
                    {
                        title: 'Logout',
                        url: '/logout',
                        icon: 'paper-plane',
                        show: true
                    },
                ];
            }
            else {
                _this.appPages = [
                    {
                        title: 'Test list',
                        url: '/',
                        icon: 'mail',
                        show: true
                    },
                    {
                        title: 'Login',
                        url: '/login',
                        icon: 'paper-plane',
                        show: true
                    },
                    // {
                    //   title: 'Logout',
                    //   url: '/logout',
                    //   icon: 'paper-plane',
                    //   show: true
                    // },
                    {
                        title: 'Register',
                        url: '/register',
                        icon: 'paper-plane',
                        show: true
                    }
                ];
            }
        });
        setTimeout(function () {
            _this._appService.onAppPagesChanged.next(localStorage.getItem('currentUser') !== null);
        }, 500);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
