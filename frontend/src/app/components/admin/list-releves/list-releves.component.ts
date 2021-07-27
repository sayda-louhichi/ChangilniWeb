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
  constructor(private _adminService:AdminService,private route: Router) {this.readReleve();}

  ngOnInit(): void {
  }
  readReleve(){
    this._adminService.getListReleves().subscribe((data)=>{
      this.Releve=data ;
    })
  }
  deleteReleve(releveId){
    this._adminService.deleteReleve(releveId).subscribe();
    this.route.navigate(['/admin/list-relevés']);
  }
  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }
}
