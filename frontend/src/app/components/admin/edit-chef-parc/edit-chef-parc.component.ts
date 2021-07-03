import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-edit-chef-parc',
  templateUrl: './edit-chef-parc.component.html',
  styleUrls: ['./edit-chef-parc.component.css']
})
export class EditChefParcComponent implements OnInit {
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
    this._adminService.getOneChef(this.route.url.slice(-24)).subscribe(data=>{
      this.name=data['result']['name'];
      this.email=data['result']['email'];
      //this.password=data['result']['password'];
      this.Cin=data['result']['Cin'];
      this.tel=data['result']['tel'];
      this.adress=data['result']['adress'];
      this.parc=data['result']['parc'];
    })
    this._adminService.getListParc().subscribe((data)=>{
      console.log(data)
      this.Parc=data ;
      
    })
  }
  update(){
    this._adminService.updateChefParc(this.route.url.slice(-24),{'name':this.name,
    'email':this.email,
    //'password':this.password,
  'Cin':this.Cin,
'tel':this.tel,
'adress':this.adress,
'parc':this.parc}).subscribe(data=>{
        console.log(data)
    })
    this.route.navigate(['/admin/list-chefParc']);
  }
  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }

  }


