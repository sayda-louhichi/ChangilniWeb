import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChefParcService } from 'src/app/service/chef-parc.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(private _chefService:ChefParcService ,private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this._chefService.isLoggedIn()){
     return true;
   }
   this.route.navigate(['/chef-auth'],{queryParams:{returnUrl:state.url}} )
   return false;
  }
  
}
