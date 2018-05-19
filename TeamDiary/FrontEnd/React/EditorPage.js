var EditorPage = (function () {
    function EditorPage() {
        var _this = this;
        this.OnLoad = function () {
            //Fetch Diary Entry and Comments
        };
        this.OnSave = function () {
            if (_this.DiaryEntry.EntryID == 0) {
            }
            else {
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
var CommentDetails = (function () {
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