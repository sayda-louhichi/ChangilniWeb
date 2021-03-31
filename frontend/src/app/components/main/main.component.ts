import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _adminService:AdminService,private router: Router) { }

  ngOnInit(): void {
  }
  onLogOutClicked(){
    this._adminService.logOut();
    this.router.navigate(['/admin-auth']);
    return false;
  }
}
