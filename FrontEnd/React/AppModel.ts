class DiaryEntry {
    Date: Date;
    EntryID: number;
    UserID: number;
    UserName: string;
    Details: string;
    Comments: CommentDetails[];
    CanEditOrDelete: boolean;
}

class CommentDetails {
    UserName: string;
    UserId: number;
    Comment: string;
    CanEdit: boolean;
    Date: Date;
}