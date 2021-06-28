export class CreateCommentDto {

    filmId: string;
    username: string;
    comment: string;


    constructor(filmId: string, name: string, comment: string) {
        this.filmId = filmId;
        this.username = name;
        this.comment = comment;
    }


}
