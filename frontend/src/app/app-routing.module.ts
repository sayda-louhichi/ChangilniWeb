import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutChefPArcComponent } from './components/admin/ajout-chef-parc/ajout-chef-parc.component';
import { ListChefPArcComponent } from './components/admin/list-chef-parc/list-chef-parc.component';

import { LoginAdminComponent } from './components/login-admin/login-admin.component';

import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'admin-auth',component: LoginAdminComponent},
  {path:'main',component:MainComponent},
{path:'admin/list-chefParc',component:ListChefPArcComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
