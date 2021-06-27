import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { UsersComponent } from './users/users.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmRegisterComponent } from './film-register/film-register.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    UsersComponent,
    FilmDetailComponent,
    FilmRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
