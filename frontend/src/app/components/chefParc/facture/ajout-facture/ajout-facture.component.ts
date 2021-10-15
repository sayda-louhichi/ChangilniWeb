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
  heureDebut:  number;
  heureFin: number;
  total:number;
  immatriculation:string;
  owner:String;
  date:String;


  ngOnInit(): void {
    const currentUser = this._chefService.getCurrentUser();
    this.owner=currentUser.email;
console.log(JSON.stringify(this.owner));
this._chefService.getOneReleve(this.route.url.slice(-24)).subscribe(data=>{
  this.name=data['result']['name'];
  this.immatriculation=data['result']['immatriculation'];
  this.date=data['result']['date'];
  this.total=data['result']['total'];
  this.heureDebut=data['result']['heureDebut'];
  this.heureFin=data['result']['heureFin'];
})  
  }
  /*onAddFacture() {
    const facture = {
      name : this.name,
      heureDebut:this.heureDebut,
      heureFin:this.heureFin,
      immatriculation:this.immatriculation,
      total:this.total,
      date:this.date,
     owner:this.owner,
    }
    this._chefService.saveFacture(facture).subscribe(
      resp => {
        console.log('facture Saved');
        this.route.navigate(['chefParc/list-factures']);
      }
    );
  }*/
  update(){
    this._chefService.updateReleve(this.route.url.slice(-24),{
      'name':this.name,
      'immatriculation':this.immatriculation,
      'date':this.date,
      'total':this.total,
      'heureDebut':this.heureDebut,
      'heureFin':this.heureFin,
}).subscribe(data=>{
        console.log(data)
    })
    this.route.navigate(['chefParc/list-relevés']);
  }
  onLogOut(){
    this._chefService.logOut();
    this.route.navigate(['/chef-auth']);
    return false;
  }
  

}
