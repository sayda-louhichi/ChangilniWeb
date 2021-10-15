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
  parc :String;
  Parc: any=[] ;
  constructor(private _chefService:ChefParcService ,private _adminService:ChefParcService ,private route: Router) { }

  ngOnInit(): void {
    this._adminService.getListParc().subscribe((data)=>{
      console.log(data)
      this.Parc=data ;
      
    })
  }
  onLoginChef(){
      if ( !this.email || !this.password || !this.parc){
         console .log('all fields are required');
         return false;
       }
       const chef={
         
         email:this.email,
         password:this.password,
         parc:this.parc,
       }
   
       this._chefService.login(chef).subscribe(
         resp =>{
           if(!resp.success){console.log('error');}
           else if (resp.success){console.log('login success') ;
           this._chefService.saveUserDate(resp.token, resp.chef);
           this.route.navigate(['/main'])}
           
         }
         
         );
     }
       
   }
   

