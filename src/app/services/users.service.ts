import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  
  constructor(private http: HttpClient) { }

  obtainUser() {



  let params = new HttpParams().append('page', '1');
  params = params.append('name', 'Luke Skywalker');

return this.http.get('https://swapi.dev2323/api/people', {
  params,
}).pipe(
  map((resp:any)=>  resp['results']),
);
  }


}
