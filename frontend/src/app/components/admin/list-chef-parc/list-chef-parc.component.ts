import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-chef-parc',
  templateUrl: './list-chef-parc.component.html',
  styleUrls: ['./list-chef-parc.component.css']
})
export class ListChefPArcComponent implements OnInit {
  Chef: any=[] ;
  constructor(private _adminService:AdminService) {this.readChef(); }

  ngOnInit(): void {
  }
  readChef(){
    this._adminService.getListChefParc().subscribe((data)=>{
      this.Chef=data ;
    })
  }
}
