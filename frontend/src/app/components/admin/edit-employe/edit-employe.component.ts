import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {
  username: String;
  email:  String;
  password: String;
  cin: String;
  //tel:  String;
  //adress: String;
  constructor(private _adminService:AdminService,private route: Router) { }

  ngOnInit(): void {
    this._adminService.getOneEmployee(this.route.url.slice(-24)).subscribe(data=>{
      this.username=data['result']['username'];
      this.email=data['result']['email'];
      //this.password=data['result']['password'];
      this.cin=data['result']['cin'];
      //this.tel=data['result']['tel'];
      //this.adress=data['result']['adress'];
    })
  }
  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }
  update(){
    this._adminService.updateEmployee(this.route.url.slice(-24),{
      'username':this.username,
    'email':this.email,
    //'password':this.password,
  'cin':this.cin
//'tel':this.tel,
//'adress':this.adress
}).subscribe(data=>{
        console.log(data)
    })
    this.route.navigate(['/admin/list-employé']);
  }
  

}
