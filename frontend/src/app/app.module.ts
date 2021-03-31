
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AjoutChefPArcComponent } from './components/admin/ajout-chef-parc/ajout-chef-parc.component';
import { ListChefPArcComponent } from './components/admin/list-chef-parc/list-chef-parc.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    MainComponent,
    AjoutChefPArcComponent,
    ListChefPArcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,

  ],
  providers: [
    LoginAdminComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
