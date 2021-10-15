import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutChefPArcComponent } from './components/admin/ajout-chef-parc/ajout-chef-parc.component';
import { AjoutEmployeComponent } from './components/admin/ajout-employe/ajout-employe.component';
import { AjoutParcComponent } from './components/admin/ajout-parc/ajout-parc.component';
import { EditChefParcComponent } from './components/admin/edit-chef-parc/edit-chef-parc.component';
import { EditEmployeComponent } from './components/admin/edit-employe/edit-employe.component';
import { EditParcComponent } from './components/admin/edit-parc/edit-parc.component';
import { HomeComponent } from './components/admin/home/home.component';
import { ListChefPArcComponent } from './components/admin/list-chef-parc/list-chef-parc.component';
import { ListEmployeComponent } from './components/admin/list-employe/list-employe.component';
import { ListParcComponent } from './components/admin/list-parc/list-parc.component';
import { ListRelevesComponent } from './components/admin/list-releves/list-releves.component';
import { AjoutFactureComponent } from './components/chefParc/facture/ajout-facture/ajout-facture.component';
import { ListReleveChefParcComponent } from './components/chefParc/list-releve-chef-parc/list-releve-chef-parc.component';
import { LoginChefComponent } from './components/chefParc/login-chef/login-chef.component';
import { MainComponent } from './components/chefParc/main/main.component';
import { SignupChefComponent } from './components/chefParc/signup-chef/signup-chef.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';


const routes: Routes = [
  {path:'admin-auth',component: LoginAdminComponent},
  {path:'home',component:HomeComponent},
{path:'admin/list-chefParc',component:ListChefPArcComponent},
{path:'admin/ajout-chefParc',component:AjoutChefPArcComponent},
{path:'admin/list-parc',component:ListParcComponent},
{path:'admin/ajout-parc',component:AjoutParcComponent},
{path:'admin/edit-parc/:id',component:EditParcComponent},
{path:'admin/edit-chef/:id',component:EditChefParcComponent},
{path:'admin/list-employé',component:ListEmployeComponent},
{path:'admin/edit-employé/:id',component:EditEmployeComponent},
{path:'admin/ajout-employé',component:AjoutEmployeComponent},
{path:'admin/list-relevés',component:ListRelevesComponent},
/////////////
{path:'chef-auth',component:LoginChefComponent},
{path:'chef-signup',component:SignupChefComponent},
{path:'main',component:MainComponent},
{path:'chefParc/list-relevés',component:ListReleveChefParcComponent},
{path:'chefParc/ajout-Facture/:id',component:AjoutFactureComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
