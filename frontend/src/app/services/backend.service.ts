import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Film} from "../model/film";

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    private filmObject = new BehaviorSubject(null);
    private commentsObject = new BehaviorSubject(null);
    currentFilm = this.filmObject.asObservable();
    comments = this.commentsObject.asObservable();

    constructor(private http: HttpClient) {
    }
    updateFilm(film: Film) {
        this.filmObject.next(film);
    }

    updateComments(comments: any[]) {
        this.commentsObject.next(comments);
    }

    findAllFilms(page: number) {
        return this.http.get("/services/films?page=" + page);
    }

    findAllComments(id: string) {

        return this.http.get("/services/comments/" + id);
    }

    createFilm(name: string, description: string, genre: string, releaseDate: string, rating: number) {
        return this.http.post("/services/films", {name, description, genre, releaseDate, rating});
    }

    addComment(filmId:string, username:string, comment:string){
        return this.http.post("/services/comments", {filmId,username,comment});
    }
}
