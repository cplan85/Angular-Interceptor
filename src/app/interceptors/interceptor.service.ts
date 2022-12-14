import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {  }

  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
const headers = new HttpHeaders({
  'accept': '*/*'
});

const reqClone = req.clone({
  headers
});
  
    return next.handle( reqClone ).pipe(
      catchError(this.manageErrors)
    );
  }

  manageErrors(error:HttpErrorResponse) {
    console.log('An Error occurred');
    console.log('Registered in the log file');
    console.warn(error);
    return throwError('Personalized error')
  }
 
}
