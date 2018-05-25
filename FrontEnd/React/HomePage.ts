import { observable } from "mobx"
import { computed } from "mobx"
import { action } from "mobx"

class HomePage {
    @observable DiaryEntries: DiaryEntry[] = [];

    FilteredDiaryEntries: DiaryEntry[] = [];

    @observable DateFilter: Date;
    @observable UserFilter: string;

    @action OnLoad = () => {
        //load the entries from database
    }

    @action OnAddEntry = () => {
        //will load editor page with editing support as true
    }

    @computed OnApplyFilter = () => {
        if (this.UserFilter == null && this.DateFilter == null)
            this.FilteredDiaryEntries = this.DiaryEntries;
        else
            this.FilteredDiaryEntries = this.DiaryEntries.filter(e => (this.UserFilter != null ? e.UserName === this.UserFilter : true) && (this.DateFilter != null ? e.Date === this.DateFilter : true));
    }

    @action OnSelect = () => {
        //will load editor page
    }

    @action OnDeleteEntry = () => {
        //option available only if entry is of same user (CanEditOrDelete = true)
    }
}