"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var rankings_component_1 = require("./rankings.component");
var router_1 = require("@angular/router");
var menu_module_1 = require("../@shared/menu/menu.module");
var routes = [
    {
        path: '**',
        component: rankings_component_1.RankingsComponent
    }
];
var RankingsModule = /** @class */ (function () {
    function RankingsModule() {
    }
    RankingsModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                menu_module_1.MenuModule
            ],
            declarations: [rankings_component_1.RankingsComponent]
        })
    ], RankingsModule);
    return RankingsModule;
}());
exports.RankingsModule = RankingsModule;
