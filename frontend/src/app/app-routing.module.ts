import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {FilmDashboardComponent} from "./component/film-dashboard/film-dashboard.component";
import {AuthGuard} from "./auth-guard.service";
import {FilmDetailComponent} from "./component/film-detail/film-detail.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'filmdetails', component: FilmDetailComponent},
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
