import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-chef-parc',
  templateUrl: './list-chef-parc.component.html',
  styleUrls: ['./list-chef-parc.component.css']
})
export class ListChefPArcComponent implements OnInit {
  Chef: any=[] ;
  Parc:any=[];
  constructor(private _adminService:AdminService,private route: Router) {this.readChef(); }

  ngOnInit(): void {
    this._adminService.getListParc().subscribe((data)=>{
      console.log(data)
      this.Parc=data ;
    })
  }
  readChef(){
    this._adminService.getListChefParc().subscribe((data)=>{
      this.Chef=data ;
      console.log(JSON.parse(JSON.stringify(this.Parc)));
    })
  }
  deleteChefParc(chefParcId){
    this._adminService.deleteChefParc(chefParcId).subscribe();
    this.route.navigate(['admin/list-chefParc']);
  }
  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }
  navigateToEdit(id){
    this.route.navigate(['/admin/edit-chef/'+id])
  }
}
