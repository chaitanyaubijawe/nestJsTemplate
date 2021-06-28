import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {first} from "rxjs/operators";

@Component({
    selector: 'app-createcomment',
    templateUrl: './createcomment.component.html',
    styleUrls: ['./createcomment.component.css']
})
export class CreatecommentComponent implements OnInit {


    commentForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;
    @Input() filmId: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private backendService: BackendService
    ) {

    }

    ngOnInit() {
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.required],

        });

    }

// convenience getter for easy access to form fields
    get formFields() {
        return this.commentForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.commentForm.invalid) {
            return;
        }

        const user = JSON.parse(localStorage.getItem("currentUser"))
        this.loading = true;
        this.backendService.addComment(this.filmId, user.username, this.formFields.comment.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.backendService.findAllComments(this.filmId).subscribe((data: any[]) => {
                        this.backendService.updateComments(data);
                    });
                    this.loading = false;

                },
                error => {
                    this.error = error.statusText;
                    this.loading = false;
                }, () => {

                });
    }

}