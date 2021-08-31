import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  email: string;
  password: string;
  constructor(private _adminService:AdminService,private route: Router) { }

  ngOnInit(): void {
  }
  onLoginAdmin(){
    if ( !this.email || !this.password){
       console .log('all fields are required');
       return false;
     }
     const admin={
       
       email:this.email,
       password:this.password
     }
 
     this._adminService.loginAdmin(admin).subscribe(
       resp =>{
         if(!resp.success){console.log('error');
        
        }
         
         else if (resp.success){console.log('login  admin success') ;
        this.route.navigate(['/home']);
        }
          
       }
       
       );
       
   }
   
   
}
