import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefParcService } from 'src/app/service/chef-parc.service';

@Component({
  selector: 'app-ajout-facture',
  templateUrl: './ajout-facture.component.html',
  styleUrls: ['./ajout-facture.component.css']
})
export class AjoutFactureComponent implements OnInit {

  constructor(private _chefService:ChefParcService ,private route: Router) { }
  name: String;
  heureDebut:  String;
  heureFin: String;
  date:String;
  immatriculation:string; 
  total:String;
  Immatriculation: any=[];
  owner:String;
  factures: any=[] ;
  ngOnInit(): void {
    const currentUser = this._chefService.getCurrentUser();
    this.owner=currentUser.email;
console.log(JSON.stringify(this.owner));
    this._chefService.getListImma().subscribe((data)=>{
      console.log(data)
      this.Immatriculation=data ;
      
    })
  }
  onAddFacture() {
    const facture = {
      name : this.name,
      heureDebut:this.heureDebut,
      heureFin:this.heureFin,
      total:this.total,
      immatriculation:this.immatriculation,
      date:this.date,
     owner:this.owner,
    }
    this._chefService.saveFacture(facture).subscribe(
      resp => {
        console.log('facture Saved');
        this.route.navigate(['chefParc/list-factures']);
      }
    );
  }
  onLogOut(){
    this._chefService.logOut();
    this.route.navigate(['/chef-auth']);
    return false;
  }
  

}
