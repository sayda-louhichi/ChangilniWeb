import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-edit-parc',
  templateUrl: './edit-parc.component.html',
  styleUrls: ['./edit-parc.component.css']
})
export class EditParcComponent implements OnInit {
  name: String;
  adress: String;
  gouvernorat:String;
  constructor(private _adminService:AdminService,private route: Router) { }

  ngOnInit(): void {
    this._adminService.getOneParc(this.route.url.slice(-24)).subscribe(data=>{
      this.name=data['result']['name'];
      this.adress=data['result']['adress'];
      this.gouvernorat=data['result']['gouvernorat'];
    })
  }
  update(){
    this._adminService.updateParc(this.route.url.slice(-24),{'name':this.name,'adress':this.adress,'gouvernorat':this.gouvernorat}).subscribe(data=>{
        console.log(data)
    })
    this.route.navigate(['/admin/list-parc']);
  }
  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }
}
