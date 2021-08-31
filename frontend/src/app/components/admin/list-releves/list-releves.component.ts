import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-releves',
  templateUrl: './list-releves.component.html',
  styleUrls: ['./list-releves.component.css']
})
export class ListRelevesComponent implements OnInit {
  Releve: any=[] ;
  coverImage:any;
  //today: number = Date.now();
  constructor(private _adminService:AdminService,private route: Router) {this.readReleve();}

  ngOnInit(): void {
  }
  readReleve(){
    this._adminService.getListReleves().subscribe((data)=>{
      this.Releve=data ;
    })
  }
  deleteReleve(releveId){
    if(confirm("Vous voulez vraiment supprimer cet relevé")){
    this._adminService.deleteReleve(releveId).subscribe(
    resp =>{        
      console.log("relevé supprimé");
    this.route.navigate(['/admin/list-relevés']);
  }
    )}}
  
  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }
}
