import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";

@Component({
    selector: 'app-film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

    comments:any[];
    film:any;
    constructor(private backendService: BackendService) {
    }


    ngOnInit() {
        console.log(history.state.data); // GE
        this.film = history.state.data;
        this.backendService.findAllComments(history.state.data._id).subscribe((comments:any) => {

            console.log("comments", comments);
            this.comments = comments;
        }, (err) => {

            console.error("Error while fetching comments.", err)
        });

    }

}
