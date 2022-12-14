import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  
  constructor(private http: HttpClient) { }

  obtainUser() {

    var myHeaders = new Headers();
myHeaders.append("accept", "*/*");

const headers = new HttpHeaders({
  'accept': '*/*'
})

  let params = new HttpParams().append('page', '1');
  params = params.append('name', 'Luke Skywalker');

return this.http.get('https://swapi.dev/api/people', {
  params,
  headers
}).pipe(
  map((resp:any)=>  resp['results']), catchError( this.manageErrors )
);
  }

  manageErrors(error:HttpErrorResponse) {
    console.log('An Error occurred');
    console.log('Registered in the log file');
    console.warn(error);
    return throwError('Personalized error')
  }
}
