class HomePage {
    DiaryEntries: DiaryEntry[] = [];

    FilteredDiaryEntries: DiaryEntry[] = [];

    DateFilter: Date;
    UserFilter: string;

    OnLoad = () => {
        //load the entries from database
    }

    OnAddEntry = () => {
        //will load editor page with editing support as true
    }

    OnApplyFilter = () => {
        if (this.UserFilter == null && this.DateFilter == null)
            this.FilteredDiaryEntries = this.DiaryEntries;
        else
            this.FilteredDiaryEntries = this.DiaryEntries.filter(e => (this.UserFilter != null ? e.UserName === this.UserFilter : true) && (this.DateFilter != null ? e.Date === this.DateFilter : true));
    }

    OnSelect = () => {
        //will load editor page
    }


    OnDeleteEntry = () => {
        //option available only if entry is of same user (CanEditOrDelete = true)
    }
}

class DiaryEntry {
    Date: Date;
    EntryID: number;
    UserID: number;
    UserName: string;
    Details: string;
    CanEditOrDelete: boolean;
}