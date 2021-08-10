import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {

  constructor(private _adminService:AdminService,private route: Router) {this.readEmployee();}
  Employee: any=[] ;
  Profile:any=[];
  ngOnInit(): void {
    this._adminService.getListProfile().subscribe((data)=>{
      console.log(data)
      this.Profile=data ;
    })
  }

  readEmployee(){
    this._adminService.getListEmployees().subscribe((data)=>{
      this.Employee=data ;
    })
  }
  deleteEmployee(employeeId){
    if(confirm("Vous voulez vraiment supprimer cet employé")){
    this._adminService.deleteEmploye(employeeId).subscribe(
      resp =>{        
        console.log("parc supprimé");
        this.route.navigate(['/admin/list-employé']);
      }
    )
    }
   
  }

  onLogOut(){
    this._adminService.logOut();
    this.route.navigate(['/admin-auth']);
    return false;
  }
  navigateToEdit(id){
    this.route.navigate(['/admin/edit-employé/'+id])
  }
  onAddEmployee(){
    this.route.navigate(['/admin/ajout-employé']);
    return false;
  }
}
