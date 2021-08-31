
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AjoutChefPArcComponent } from './components/admin/ajout-chef-parc/ajout-chef-parc.component';
import { ListChefPArcComponent } from './components/admin/list-chef-parc/list-chef-parc.component';
import { AjoutParcComponent } from './components/admin/ajout-parc/ajout-parc.component';
import { ListParcComponent } from './components/admin/list-parc/list-parc.component';
import { HomeComponent } from './components/admin/home/home.component';
import { EditParcComponent } from './components/admin/edit-parc/edit-parc.component';
import { EditChefParcComponent } from './components/admin/edit-chef-parc/edit-chef-parc.component';
import { AjoutEmployeComponent } from './components/admin/ajout-employe/ajout-employe.component';
import { EditEmployeComponent } from './components/admin/edit-employe/edit-employe.component';
import { ListEmployeComponent } from './components/admin/list-employe/list-employe.component';
import { LoginChefComponent } from './components/chefParc/login-chef/login-chef.component';
import { SignupChefComponent } from './components/chefParc/signup-chef/signup-chef.component';
import { MainComponent } from './components/chefParc/main/main.component';
import { ListRelevesComponent } from './components/admin/list-releves/list-releves.component';
import { ListReleveChefParcComponent } from './components/chefParc/list-releve-chef-parc/list-releve-chef-parc.component';
import { ListFacturesComponent } from './components/chefParc/facture/list-factures/list-factures.component';
import { AjoutFactureComponent } from './components/chefParc/facture/ajout-facture/ajout-facture.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    AjoutChefPArcComponent,
    ListChefPArcComponent,
    AjoutParcComponent,
    ListParcComponent,
    HomeComponent,
    EditParcComponent,
    EditChefParcComponent,
    AjoutEmployeComponent,
    EditEmployeComponent,
    ListEmployeComponent,
    LoginChefComponent,
    SignupChefComponent,
    MainComponent,
    ListRelevesComponent,
    ListReleveChefParcComponent,
    ListFacturesComponent,
    AjoutFactureComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
