import { Component, OnInit } from '@angular/core';

import { EmpserviceService } from '../empservice.service';
import { HttpHeaders } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
@Component({
  selector: 'app-all-emp',
  templateUrl: './all-emp.component.html',
  styleUrls: ['./all-emp.component.scss'],
})
export class AllEmpComponent implements OnInit {
  arrUser: IUser[] = [];
  constructor(
    private _data: EmpserviceService,
    private _actroute: ActivatedRoute,
    private _router: Router
  ) {}

  displayedU: string[] = ['id', 'name', 'username', 'email', 'view'];

  ngOnInit(): void {
    this._data.getAllEmp().subscribe((data: IUser[]) => {
      this.arrUser = data;
      console.log(this.arrUser);
    });
  }
  view(item) {
    this._router.navigate(['/emp-id', item.id]);
  }
  logout() {
    this._data.logout();
    this._router.navigateByUrl('');
  }

  onKeyUp(val: any) {
    this.arrUser = this.arrUser.filter((x) => x.name.startsWith(val));
    if (val == '') {
      this._router.navigate(['/all-emp']);
    }
  }
}

//
