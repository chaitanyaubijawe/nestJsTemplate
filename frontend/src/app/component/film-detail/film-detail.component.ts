import {Component, Input, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Film} from "../../model/film";

@Component({
    selector: 'app-film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

    comments:any[];
    film:Film;
    constructor(private backendService: BackendService) {
    }


    ngOnInit() {

        this.backendService.currentFilm.subscribe((data)=>{
            if(data == null || data == undefined){

                data = JSON.parse(localStorage.getItem("film"));
            }
            this.film = data;
        });

        // subscribe to comment updates
        this.backendService.comments.subscribe((data)=>{
            this.comments = data;
        })

        this.backendService.findAllComments(this.film._id).subscribe((comments:any) => {

            console.log("comments", comments);
            this.comments = comments;
            this.backendService.updateComments(comments);
        }, (err) => {

            console.error("Error while fetching comments.", err)
        });

    }

}
