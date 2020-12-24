import {RouterModule, Routes} from "@angular/router";

import { AllEmpComponent } from './all-emp/all-emp.component';
import { EmpIdComponent } from './emp-id/emp-id.component';
import { LoginComponent } from './login/login.component';
const arr:Routes=[


  {path:'all-emp', component:AllEmpComponent},
  {path:'', component:LoginComponent},
  {path:'emp-id/:id', component:EmpIdComponent},


];
export const arrRouting = RouterModule.forRoot(arr);
