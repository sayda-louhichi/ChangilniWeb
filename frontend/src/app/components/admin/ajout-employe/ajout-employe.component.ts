import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})
export class AjoutEmployeComponent implements OnInit {
  username: String;
  email:  String;
  password: String;
  cin: String;
  
  constructor(private _adminService:AdminService,private route: Router) { }

  ngOnInit(): void {
  }
  onAddEmployee() {
    if(!this.email) {
      console.log(' Employee email is requried');
      return false;
    }
    const employee = {
      username : this.username,
      email:this.email,
      password:this.password,
      cin:this.cin,
    }
    this._adminService.saveEmployee(employee).subscribe(
      resp => {
        console.log('Employee Saved');
        this.route.navigate(['admin//list-employé']);
      }
    );
  }
  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }
}
