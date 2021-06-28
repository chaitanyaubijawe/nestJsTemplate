import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {BackendService} from "../../services/backend.service";

@Component({
    selector: 'app-createfilm',
    templateUrl: './createfilm.component.html',
    styleUrls: ['./createfilm.component.css']
})
export class CreatefilmComponent implements OnInit {


    registerFilmForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private backendService: BackendService
    ) {

    }

    ngOnInit() {
        this.registerFilmForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            rating: ['', Validators.required],
            releaseDate: ['', Validators.required],
            genre: ['', Validators.required]
        });

    }

// convenience getter for easy access to form fields
    get formFields() {
        return this.registerFilmForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerFilmForm.invalid) {
            return;
        }

        this.loading = true;
        this.backendService.createFilm(this.formFields.name.value, this.formFields.description.value, this.formFields.genre.value, this.formFields.releaseDate.value, this.formFields.rating.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(["/dashboard"]);
                },
                error => {
                    this.error = error.statusText;
                    this.loading = false;
                });
    }

}