"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_1 = require("mobx");
var mobx_2 = require("mobx");
var mobx_3 = require("mobx");
var HomePage = /** @class */ (function () {
    function HomePage() {
        var _this = this;
        this.DiaryEntries = [];
        this.FilteredDiaryEntries = [];
        this.OnLoad = function () {
            //load the entries from database
        };
        this.OnAddEntry = function () {
            //will load editor page with editing support as true
        };
        this.OnApplyFilter = function () {
            if (_this.UserFilter == null && _this.DateFilter == null)
                _this.FilteredDiaryEntries = _this.DiaryEntries;
            else
                _this.FilteredDiaryEntries = _this.DiaryEntries.filter(function (e) { return (_this.UserFilter != null ? e.UserName === _this.UserFilter : true) && (_this.DateFilter != null ? e.Date === _this.DateFilter : true); });
        };
        this.OnSelect = function () {
            //will load editor page
        };
        this.OnDeleteEntry = function () {
            //option available only if entry is of same user (CanEditOrDelete = true)
        };
    }
    tslib_1.__decorate([
        mobx_1.observable
    ], HomePage.prototype, "DiaryEntries", void 0);
    tslib_1.__decorate([
        mobx_1.observable
    ], HomePage.prototype, "DateFilter", void 0);
    tslib_1.__decorate([
        mobx_1.observable
    ], HomePage.prototype, "UserFilter", void 0);
    tslib_1.__decorate([
        mobx_3.action
    ], HomePage.prototype, "OnLoad", void 0);
    tslib_1.__decorate([
        mobx_3.action
    ], HomePage.prototype, "OnAddEntry", void 0);
    tslib_1.__decorate([
        mobx_2.computed
    ], HomePage.prototype, "OnApplyFilter", void 0);
    tslib_1.__decorate([
        mobx_3.action
    ], HomePage.prototype, "OnSelect", void 0);
    tslib_1.__decorate([
        mobx_3.action
    ], HomePage.prototype, "OnDeleteEntry", void 0);
    return HomePage;
}());
