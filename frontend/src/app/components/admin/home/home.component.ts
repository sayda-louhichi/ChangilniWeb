import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _adminService:AdminService,private router: Router) { }

  ngOnInit(): void {
  }
onLogOut(){
    this._adminService.logOut();
    this.router.navigate(['/admin-auth']);
    return false;
  }
}
