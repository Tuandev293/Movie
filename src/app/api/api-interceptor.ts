import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      url: `${'https://api.themoviedb.org/3'}${request.url}`,
      params: request.params.set('api_key', '0103a2edb55c52f168fab8b677e7f8ee'),
    });

    return next.handle(modifiedRequest);
  }
}
