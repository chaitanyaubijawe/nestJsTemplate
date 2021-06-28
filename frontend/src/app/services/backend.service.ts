import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }


  findAllFilms(page:number){
    return this.http.get("/services/films?page="+page);
  }

  findAllComments(id:string){

    return this.http.get("/services/comments/"+id);
  }
}
