import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private requests: any = {};
  constructor() { }

  // add new item to the cache
  put(url: string, response: HttpResponse<any>): void {
    this.requests[url] = response;
  }

  // get items from the cache
  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  // remove an item from the cache
  invalidateUrl(url: string): void {
    this.requests[url] = undefined;
  }

  // delete all items in the cache
  invalidateCache(): void {
    this.requests = {};
  }
}
