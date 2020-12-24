import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  url2: string='http://dummy.restapiexample.com/api/v1/employee';
  url3: string='https://jsonplaceholder.typicode.com/users';


  constructor(private _http:HttpClient) { }

  getAllEmp(){
    return this._http.get(this.url3);
  }



  getEmp(id:number){
    return this._http.get(`${this.url3}/${id}`);
  }

  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

}


