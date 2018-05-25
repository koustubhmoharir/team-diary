"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorPage = /** @class */ (function () {
    function EditorPage() {
        var _this = this;
        this.OnLoad = function () {
            //Fetch Diary Entry and Comments
        };
        this.OnSave = function () {
            if (_this.DiaryEntry.EntryID == 0) {
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
exports.EditorPage = EditorPage;
