import { Injectable } from '@angular/core';
import {HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        // Authorization: `Bearer ${this.auth.getToken()}`
        'Access-Control-Allow-Origin': '*'
      }
    });
    return next.handle(request);
  }
}
