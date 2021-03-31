import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import{Observable,throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminService {baseUri:string='http://localhost:3000';
headers=new HttpHeaders().set('content-Type','applictaion/json');
constructor(private http:HttpClient,public router:Router) { }

loginAdmin(admin):Observable<any>{
  let url=`${this.baseUri}/admin/login`;
  return this.http.post(url,admin).pipe(catchError(this.errorMgmt))
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
    logOut() {
      localStorage.removeItem('auth');
      this.router.navigateByUrl('/admin-auth')
    }
    getListChefParc(){
      return this.http.get(`${this.baseUri}/admin/list-chefParc`);
    }
}

