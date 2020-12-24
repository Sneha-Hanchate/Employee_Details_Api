import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllEmpComponent } from './all-emp/all-emp.component';
import { EmpIdComponent } from './emp-id/emp-id.component';


import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {arrRouting} from "./app.routing";
import {MatTableModule} from "@angular/material/table";
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';



import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    AllEmpComponent,
    EmpIdComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,RouterModule,arrRouting,HttpClientModule,
    ReactiveFormsModule,MatTableModule,MatFormFieldModule,MatCardModule,MatButtonModule,MatInputModule,
    MatIconModule,MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




