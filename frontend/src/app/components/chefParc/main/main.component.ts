import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefParcService } from 'src/app/service/chef-parc.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor(private _chefService:ChefParcService ,private route: Router) {}

  ngOnInit(): void {
    const currentUser = this._chefService.getCurrentUser();
    const parc={ parc : currentUser.parc};
console.log(JSON.stringify(parc));}
  
  /*readReleve(parc){
    this._chefService.getListRleve(parc).subscribe((data)=>{
      this.Releve=data ;
    })
  }*/
  onLogOut(){
    this._chefService.logOut();
    this.route.navigate(['/chef-auth']);
    return false;
  }
}
