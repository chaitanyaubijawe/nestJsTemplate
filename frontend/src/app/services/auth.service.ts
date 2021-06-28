import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    isAuthenticated() {
        return localStorage.getItem("currentUser") != undefined;
    }

    login(username: string, password: string) {

        return this.http.post("/services/auth/login", {username, password});
    }

    logout(){
        localStorage.clear();
    }

    register(username: string, password: string){
        return this.http.post("/services/auth/register", {username, password});
    }
}
