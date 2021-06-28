export class CreateCommentDto {

    private _filmId:string;
    private _username:string;
    private _comment:string;


    constructor(filmId: string, name: string, comment: string) {
        this._filmId = filmId;
        this._username = name;
        this._comment = comment;
    }


    get filmId(): string {
        return this._filmId;
    }

    set filmId(value: string) {
        this._filmId = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get comment(): string {
        return this._comment;
    }

    set comment(value: string) {
        this._comment = value;
    }
}
