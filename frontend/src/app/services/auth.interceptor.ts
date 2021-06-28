import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = JSON.parse(localStorage.getItem("currentUser")); // you probably want to store it in localStorage or something
        const token = currentUser.access_token;
        if (!token) {
            return next.handle(req);
        }
        // all protected url
        const isApiUrl = req.url.includes("films") || req.url.includes("comments");
        if (isApiUrl) {
            console.log("before", req.headers);

            const headers = new HttpHeaders({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            });


            req = req.clone({
                setHeaders: {Authorization:`Bearer ${token}`
            }
        });
            console.log(req.headers)
        }

        return next.handle(req);
    }

}