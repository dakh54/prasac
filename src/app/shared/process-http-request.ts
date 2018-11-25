import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { IError } from './models/ierror';



export class ProcessHttpRequest {

  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  static numberOfRetry = 0;

  // return an object
  static addNewResource(
    http: HttpClient,
    resource: any,
    apiPostEndPoint: string): Observable<any> {
      return http.post<any>
      (apiPostEndPoint
        , resource,
        this.httpOptions)
        .pipe(
          // retry(ProcessHttpRequest.numberOfRetry),
          catchError(err => this.handleHttpResponError(err))
        );
  }

  // return array of object
  static postAndReturnArrayOfObjects
  (http: HttpClient,
    resource: any,
    apiPostEndPoint: string): Observable<any | IError> {
    return http.post<any[]>(apiPostEndPoint, resource, this.httpOptions)
    .pipe(
      // retry(ProcessHttpRequest.numberOfRetry),
      catchError(err => this.handleHttpResponError(err))
    );
  }


  static put
  (http: HttpClient,
    resource: any,
    apiPostEndPoint: string): Observable<any | IError> {
    return http.put<any[]>(apiPostEndPoint, resource, this.httpOptions).pipe(
      // retry(ProcessHttpRequest.numberOfRetry),
      catchError(err => this.handleHttpResponError(err))
    );
  }


  static patch
  (http: HttpClient,
    resource: any,
    apiPostEndPoint: string): Observable<any | IError> {
    return http.patch<any[]>(apiPostEndPoint, resource, this.httpOptions).pipe(
      // retry(ProcessHttpRequest.numberOfRetry),
      catchError(err => this.handleHttpResponError(err))
    );
  }


  static getResources
  (http: HttpClient,
    apiQueryEndPoint: string): Observable<any> {
    return http.get<any[]>(apiQueryEndPoint).pipe(
      retry(ProcessHttpRequest.numberOfRetry),
      catchError(err => this.handleHttpResponError(err))
    );
  }


  static getResource
  (http: HttpClient,
    apiQueryEndPoint: string): Observable<any> {
    return http.get<any>(apiQueryEndPoint).pipe(
      retry(ProcessHttpRequest.numberOfRetry),
      catchError(err => this.handleHttpResponError(err))
    );
  }


  static handleHttpResponError
  (error: HttpErrorResponse): Observable<IError> {
    const errorObj: IError = {
      errorNumber: error.status,
      message: error.statusText,
      friendlyMessage: 'An error occured while processing your request.'
    };
    // return of(errorObj);
    return throwError(errorObj);

  }




}
