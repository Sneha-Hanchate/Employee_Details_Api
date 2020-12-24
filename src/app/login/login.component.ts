import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmpserviceService } from '../empservice.service';
export interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  Submit = false;

  constructor(
    private empser: EmpserviceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }
  login() {
    console.log(this.loginForm.value);
    this.Submit = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.empser.login(this.loginForm.value);
    this.router.navigateByUrl('/all-emp');
  }
}
