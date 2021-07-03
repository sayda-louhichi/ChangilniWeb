import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefParc } from 'src/app/model/chefParc';
import { Parc } from 'src/app/model/parc';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-ajout-chef-parc',
  templateUrl: './ajout-chef-parc.component.html',
  styleUrls: ['./ajout-chef-parc.component.css']
})

export class AjoutChefPArcComponent implements OnInit {
  name: String;
  email:  String;
  password: String;
  Cin: String;
  tel:  String;
  adress: String;
  parc:string; 
  Parc: any=[] ;
  
  constructor(private _adminService:AdminService,private route: Router) { }
  ngOnInit(): void {
    this._adminService.getListParc().subscribe((data)=>{
      console.log(data)
      this.Parc=data ;
      
    })
  }

  onAddChefParc() {
    if(!this.name) {
      console.log(' ChefParc name is requried');
      return false;
    }
    const chefParc = {
      name : this.name,
      email:this.email,
      password:this.password,
      Cin:this.Cin,
      tel:this.tel,
      adress: this.adress,
      parc:this.parc,
    }
    this._adminService.saveChefParc(chefParc).subscribe(
      resp => {
        console.log('ChefParc Saved');
        this.route.navigate(['admin//list-chefParc']);
      }
    );
  }
  

  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }
 
}
