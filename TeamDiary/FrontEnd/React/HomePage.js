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
    return HomePage;
}());
var DiaryEntry = /** @class */ (function () {
    function DiaryEntry() {
    }
    return DiaryEntry;
}());
//# sourceMappingURL=HomePage.js.map