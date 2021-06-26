export class Comment {

    name:string;
    comment:string;
    commentDate: Date;

    constructor(name: string, comment: string,commentDate:Date) {
        this.name = name;
        this.comment = comment;
        this.commentDate = commentDate;
    }
}
