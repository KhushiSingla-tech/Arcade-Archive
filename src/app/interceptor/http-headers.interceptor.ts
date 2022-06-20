import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
        setHeaders: {
            'x-rapidapi-key': 'f928c5bb62mshc529aafddd7b3b3p120047jsn5f2d66ec40c8',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams: {
            key: '066fe28b69d04583965a6b331865ad21',
        }
    });
    return next.handle(req);
  }
}