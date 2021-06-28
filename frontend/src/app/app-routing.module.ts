import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {FilmDashboardComponent} from "./component/film-dashboard/film-dashboard.component";
import {AuthGuard} from "./auth-guard.service";
import {FilmDetailComponent} from "./component/film-detail/film-detail.component";
import {LogoutComponent} from "./component/logout/logout.component";
import {RegisterComponent} from "./component/register/register.component";
import {CreatefilmComponent} from "./component/createfilm/createfilm.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'register', component: RegisterComponent,canActivate: [AuthGuard]},
    {path: 'registerfilm', component: CreatefilmComponent,canActivate: [AuthGuard]},
    {path: 'filmdetails', component: FilmDetailComponent,canActivate: [AuthGuard]},
    {
        path: 'dashboard',
        component: FilmDashboardComponent,
        canActivate: [AuthGuard]
    },
    {path: '**', redirectTo: ''}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
