import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import {FilmDashboardComponent} from './component/film-dashboard/film-dashboard.component';
import {FilmDetailComponent} from './component/film-detail/film-detail.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./services/auth.interceptor";
//import {AlertModule} from "ngx-bootstrap/alert";
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FilmDashboardComponent,
        FilmDetailComponent
    ],
    imports: [
        //AlertModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule, ReactiveFormsModule,
        NgxPaginationModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},],
    bootstrap: [AppComponent]
})
export class AppModule {
}
