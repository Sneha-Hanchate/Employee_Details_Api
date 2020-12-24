import { Component } from '@angular/core';
import { EmpserviceService } from './empservice.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _data: EmpserviceService, private router: Router) {}

  title = 'Employee_Details';
  opened: false;

  logout() {
    this._data.logout();
    this.router.navigateByUrl('');
  }
}
