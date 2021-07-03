import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChefParcService {
  baseUri:string='http://localhost:3000';
  headers=new HttpHeaders().set('content-Type','applictaion/json');
  constructor(private http:HttpClient,public router:Router) { }

  login(chef):Observable<any>{
    let url=`${this.baseUri}/chefParc/auth`;
    return this.http.post(url,chef).pipe(catchError(this.errorMgmt))
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  signup(chefParc):Observable<any>{
    let url=`${this.baseUri}/chefParc/register`;
    return this.http.post(url,chefParc).pipe(catchError(this.errorMgmt))
  }
  logOut() {
    localStorage.removeItem('auth');
    this.router.navigateByUrl('/chef-auth')
  }
}