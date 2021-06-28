import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Film} from "../../model/film";
import {Router} from "@angular/router";

@Component({
    selector: 'app-film-dashboard',
    templateUrl: './film-dashboard.component.html',
    styleUrls: ['./film-dashboard.component.css']
})
export class FilmDashboardComponent implements OnInit {

    films: any[] = [];
    page: number = 1;
    totalElement: number = 0;

    constructor(private backendService: BackendService, private router: Router,) {
    }

    navigate(film: Film) {
        localStorage.setItem("film", JSON.stringify(film));
        this.backendService.updateFilm(film);
        this.router.navigate(['/filmdetails']);
    }

    ngOnInit() {
        this.getFilms(this.page);

    }

    getFilms(page: number) {
        this.backendService.findAllFilms(page - 1).subscribe((pagedData: any) => {

            this.films = pagedData.events;
            this.totalElement = pagedData.pages;
        })
    }


}
