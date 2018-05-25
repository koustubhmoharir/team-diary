export class EditorPage {

    DiaryEntry: DiaryEntry;

    OnLoad = () => {
        //Fetch Diary Entry and Comments
    }

    OnSave = () => {
        if (this.DiaryEntry.EntryID == 0) {
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

