export class CreateCommentDto {

    private _filmId:string;
    private _name:string;
    private _comment:string;


    constructor(filmId: string, name: string, comment: string) {
        this._filmId = filmId;
        this._name = name;
        this._comment = comment;
    }


    get filmId(): string {
        return this._filmId;
    }

    set filmId(value: string) {
        this._filmId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get comment(): string {
        return this._comment;
    }

    set comment(value: string) {
        this._comment = value;
    }
}
