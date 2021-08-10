import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-parc',
  templateUrl: './list-parc.component.html',
  styleUrls: ['./list-parc.component.css']
})
export class ListParcComponent implements OnInit {
  Parc: any=[] ;
  constructor(private _adminService:AdminService,private route: Router) {this.readParc(); }

  ngOnInit(): void {
  }
  readParc(){
    this._adminService.getListParc().subscribe((data)=>{
      this.Parc=data ;
    })
  }
  deleteParc(parcId){
    if(confirm("Vous voulez vraiment supprimer ce parc")){
    this._adminService.deleteParc(parcId).subscribe(
      resp =>{        
        console.log("parc supprimé");
        this.route.navigate(['/admin/list-parc']);
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
    this.route.navigate(['/admin/edit-parc/'+id])
  }
  onAddParc(){
    this.route.navigate(['/admin/ajout-parc']);
    return false;
  }
}
