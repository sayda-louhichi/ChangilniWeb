import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefParcService } from 'src/app/service/chef-parc.service';

@Component({
  selector: 'app-login-chef',
  templateUrl: './login-chef.component.html',
  styleUrls: ['./login-chef.component.css']
})
export class LoginChefComponent implements OnInit {
  email: string;
  password: string;
  constructor(private _chefService:ChefParcService ,private route: Router) { }

  ngOnInit(): void {
  }
  onLoginChef(){
    if ( !this.email || !this.password){
       console .log('all fields are required');
       return false;
     }
     const chef={
       
       email:this.email,
       password:this.password
     }
 
     this._chefService.login(chef).subscribe(
       resp =>{
         if(!resp.success){console.log('error');
        
        }
         
         else if (resp.success){console.log('login chef success') ;
        this.route.navigate(['/main']);
        }
          
       }
       
       );
       
   }
}
