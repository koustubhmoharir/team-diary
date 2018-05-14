class EditorPage {

    DiaryEntry: DiaryEntry;

    OnLoad = () => {
        //Fetch Diary Entry and Comments
    }

    OnSave = () => {
        if (this.DiaryEntry.Entryid == 0) {
            //Insert new entry
        }
        else {
            //edit existing entry
        }
    }

    OnEdit = () => {
        //Available only for the owner of the post
    }

    OnAddComment = () => {
        //Enables comment Editor(textbox)
    }

    OnEditComment = () => {

    }

    OnSaveComment = () => {
    }

}

class DiaryEntry {
    Entry: string;
    Entryid: number;
    CanEdit: boolean;
    Comments: CommentDetails[];
}

class CommentDetails {
    UserName: string;
    UserId: number;
    Comment: string;
    CanEdit: boolean;
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};