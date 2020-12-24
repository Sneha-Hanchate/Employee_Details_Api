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
import { IUser } from '../all-emp/all-emp.component';

@Component({
  selector: 'app-emp-id',
  templateUrl: './emp-id.component.html',
  styleUrls: ['./emp-id.component.scss'],
})
export class EmpIdComponent implements OnInit {
  constructor(
    private _data: EmpserviceService,
    private _actroute: ActivatedRoute,
    private _router: Router
  ) {}
  empId: number;
  item: IUser;
  displayedUu: string[] = ['id', 'name', 'username', 'email'];

  ngOnInit(): void {
    this.empId = this._actroute.snapshot.params['id'];
    this._data.getEmp(this.empId).subscribe((data: IUser) => {
      this.item = data;
      console.log(this.item);
    });
  }

  logout() {
    this._data.logout();
    this._router.navigateByUrl('');
  }
}
