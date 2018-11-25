import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { HttpCacheService } from './http-cache.service';



@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private httpCache: HttpCacheService

  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = localStorage.getItem('sfBearerToken');

        // pass along non-cacheable request
    // post, put, and delete
    if (req.method !== 'GET') {

      // Production Line
      return next.handle(req);
    }





    // send request to the server and add response to cache


    // send request to the server
    return next.handle(req);
  }

  // forward request and save into cache
  forwardReqAndSaveInCache(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.httpCache.invalidateUrl(req.url);
            this.httpCache.put(req.url, event);
          }
        })
      );
  }
}
