import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import * as AppUtil from '../components/chefParc/common/app.util';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class ChefParcService {
  baseUri:string='http://localhost:3000';
  headers=new HttpHeaders().set('content-Type','applictaion/json');
  constructor(private http:HttpClient,public router:Router) { }

  login(chefParc):Observable<any>{
    let url=`${this.baseUri}/chefParc/login`;
    return this.http.post(url,chefParc).pipe(catchError(this.errorMgmt))
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
  
 
  GetReleve(query):Observable<any>{
    let url=`${this.baseUri}/chefParc/list`;
    return this.http.post(url,query).pipe(catchError(this.errorMgmt))
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(AppUtil.USER_INFO));
  }  
  saveUserDate(token, chef) {
    localStorage.setItem(AppUtil.AUTH_TOKEN, token);
    localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(chef));
  }
  isLoggedIn() :boolean {
    //TODO: Enhace this method. angular2-jwt
    return !!localStorage.getItem(AppUtil.AUTH_TOKEN);
  }
  getListParc(){
    return this.http.get(`${this.baseUri}/chefParc/list-parc`);
  }
}