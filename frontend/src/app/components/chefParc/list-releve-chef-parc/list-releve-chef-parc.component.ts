import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { ChefParcService } from 'src/app/service/chef-parc.service';

@Component({
  selector: 'app-list-releve-chef-parc',
  templateUrl: './list-releve-chef-parc.component.html',
  styleUrls: ['./list-releve-chef-parc.component.css']
})
export class ListReleveChefParcComponent implements OnInit {
  releves: any=[] ;
parc:String;
today: number = Date.now();
fixedTimezone = this.today;

  
  constructor(private _chefService:ChefParcService ,private _adminService:AdminService,private route: Router)
   {}

  ngOnInit(): void {
    const currentUser = this._chefService.getCurrentUser();
    const query={ parc : currentUser.parc};
console.log(JSON.stringify(query));
this._chefService.GetReleve(query).subscribe(
  resp =>{
    this.releves=resp.releves;
  }
)

  }
  deleteReleve(releveId){
    if(confirm("Vous voulez vraiment supprimer cet relevé")){
    this._adminService.deleteReleve(releveId).subscribe(
    resp =>{        
      console.log("relevé supprimé");
    this.route.navigate(['chefParc/list-relevés']);
  }
    )}}
  onLogOut(){
    this._chefService.logOut();
    this.route.navigate(['/chef-auth']);
    return false;
  }
  navigateToEdit(id){
    this.route.navigate(['chefParc/ajout-Facture/'+id])
  }
}
