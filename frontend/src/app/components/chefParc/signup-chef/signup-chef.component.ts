import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefParcService } from 'src/app/service/chef-parc.service';

@Component({
  selector: 'app-signup-chef',
  templateUrl: './signup-chef.component.html',
  styleUrls: ['./signup-chef.component.css']
})
export class SignupChefComponent implements OnInit {
  name: String;
  email:  String;
  password: String;
  Cin: String;
  tel:  String;
  adress: String;
  parc:String;
  constructor(private _chefService:ChefParcService ,private route: Router) { }

  ngOnInit(): void {
  }
 signup() {
    if(!this.name) {
      console.log(' ChefParc name is requried');
      return false;
    }
    const chefParc = {
      name : this.name,
      email:this.email,
      password:this.password,
      Cin:this.Cin,
      tel:this.tel,
      adress: this.adress,
      parc:this.parc,
    }
    this._chefService.signup(chefParc).subscribe(
      resp => {
        console.log('ChefParc Singnup');
        this.route.navigate(['/main']);
      }
    );
  }
  
}
