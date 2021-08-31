import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { ChefParcService } from 'src/app/service/chef-parc.service';

@Component({
  selector: 'app-list-factures',
  templateUrl: './list-factures.component.html',
  styleUrls: ['./list-factures.component.css']
})
export class ListFacturesComponent implements OnInit {

  constructor(private _chefService:ChefParcService ,private _adminService:AdminService,private route: Router) { }
  factures: any=[] ;
 
  ngOnInit(): void {
    const currentUser = this._chefService.getCurrentUser();
    const query={owner:currentUser.email};
console.log(JSON.stringify(query));
this._chefService.getListFacture(query).subscribe(
  resp =>{
    this.factures=resp.factures;
  }
)
  
  }
  onLogOut(){
    this._chefService.logOut();
    this.route.navigate(['/chef-auth']);
    return false;
  }
  onAddFacture(){
    this.route.navigate(['chefParc/ajout-Facture']);
    return false;
  }
 
  
}
