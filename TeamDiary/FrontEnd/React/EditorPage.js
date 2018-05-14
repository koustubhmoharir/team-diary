var EditorPage = /** @class */ (function () {
    function EditorPage() {
        var _this = this;
        this.OnLoad = function () {
            //Fetch Diary Entry and Comments
        };
        this.OnSave = function () {
            if (_this.DiaryEntry.Entryid == 0) {
                //Insert new entry
            }
            else {
                //edit existing entry
            }
        };
        this.OnEdit = function () {
            //Available only for the owner of the post
        };
        this.OnAddComment = function () {
            //Enables comment Editor(textbox)
        };
        this.OnEditComment = function () {
        };
        this.OnSaveComment = function () {
        };
    }
    return EditorPage;
}());
var DiaryEntry = /** @class */ (function () {
    function DiaryEntry() {
    }
    return DiaryEntry;
}());
var CommentDetails = /** @class */ (function () {
    function CommentDetails() {
    }
    return CommentDetails;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=EditorPage.js.map