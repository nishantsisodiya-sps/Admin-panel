import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './sidenav/dashboard/dashboard.component';
import { HomeComponent } from './sidenav/home/home.component';
import { NewuserComponent } from './sidenav/newuser/newuser.component';
import { UsersComponent } from './sidenav/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { AppserviceService } from './appservice/appservice.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './sidenav/employee/employee.component';
import { ModalComponent } from './sidenav/employee/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';



const appRouts:Routes=[
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"map" , component:DashboardComponent},
  {path:"home" , component:HomeComponent},
  {path:"newuser" , component:NewuserComponent},
  {path:"users" , component:UsersComponent},
  {path:"employee" , component:EmployeeComponent},
  {path:"modal" , component:ModalComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    NewuserComponent,
    UsersComponent,
    EmployeeComponent,
    ModalComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule.forRoot(appRouts),
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
  
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
