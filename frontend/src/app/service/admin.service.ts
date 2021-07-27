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
    getListParc(){
      return this.http.get(`${this.baseUri}/admin/list-parc`);
    }
    getListEmployees(){
      return this.http.get(`${this.baseUri}/admin/list-employyeur`);
    }
    getListReleves(){
      return this.http.get(`${this.baseUri}/admin/list-releve`);
    }
    deleteReleve(releveId):Observable<any>{
      let url=`${this.baseUri}/admin/delete/${releveId}`;
      return this.http.delete(url).pipe(catchError(this.errorMgmt))
    }
    getListProfile(){
      return this.http.get(`${this.baseUri}/profile/getDataProfiles`)
    }
    saveParc(parc):Observable<any>{
      let url=`${this.baseUri}/admin/add-parc`;
      return this.http.post(url,parc).pipe(catchError(this.errorMgmt))
    }
    deleteParc(parcId):Observable<any>{
      let url=`${this.baseUri}/admin/remove/${parcId}`;
      return this.http.delete(url).pipe(catchError(this.errorMgmt))
    }
    deleteEmploye(employeeId):Observable<any>{
      let url=`${this.baseUri}/admin//supp-employeur/${employeeId}`;
      return this.http.delete(url).pipe(catchError(this.errorMgmt))
    }
    getOneEmployee(id){
      let url = `${this.baseUri}/admin/getemployee`;
      return this.http.post(url,{"_id":id});
    }
    updateEmployee(id, data): Observable<any> {
      let url = `${this.baseUri}/admin/update-employeur/${id}`;
      return this.http.patch(url, {...data})
    }
    deleteChefParc(chefParcId):Observable<any>{
      let url=`${this.baseUri}/admin/supp-chefParc/${chefParcId}`;
      return this.http.delete(url).pipe(catchError(this.errorMgmt))
    }
    updateParc(id, data): Observable<any> {
      let url = `${this.baseUri}/admin/update-parc/${id}`;
      return this.http.put(url, {...data})
    }
    updateChefParc(id, data): Observable<any> {
      let url = `${this.baseUri}/admin/update-chefParc/${id}`;
      return this.http.put(url, {...data})
    }
    getOneParc(id){
      let url = `${this.baseUri}/admin/getparc`;
      return this.http.post(url,{"_id":id});
    }
    saveChefParc(chefParc):Observable<any>{
      let url=`${this.baseUri}/admin/ajout-chefParc`;
      return this.http.post(url,chefParc).pipe(catchError(this.errorMgmt))
    }
    saveEmployee(employee):Observable<any>{
      let url=`${this.baseUri}/admin/ajout-employeur`;
      return this.http.post(url,employee).pipe(catchError(this.errorMgmt))
    }
    getOneChef(id){
      let url = `${this.baseUri}/admin/getchef`;
      return this.http.post(url,{"_id":id});
    }
}


