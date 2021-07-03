import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-ajout-parc',
  templateUrl: './ajout-parc.component.html',
  styleUrls: ['./ajout-parc.component.css']
})
export class AjoutParcComponent implements OnInit {
  name: String;
  adress: String;
  gouvernorat:String;
  
  constructor(private _adminService:AdminService,private route: Router) { }
  
  ngOnInit() {
   
  
}
  onAddParc() {
    if(!this.name) {
      console.log(' Parc name is requried');
      return false;
    }
    const parc = {
      name : this.name,
      adress: this.adress,
     gouvernorat: this.gouvernorat
    }
    this._adminService.saveParc(parc).subscribe(
      resp => {
        console.log('Parc Saved');
        this.route.navigate(['admin//list-parc']);
      }
    );
  }
  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }
 
}
