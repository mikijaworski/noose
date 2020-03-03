import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: any = null;
  authUser: boolean;

  constructor(
    private _httpClient: HttpClient
  ) { }

  getCurrentUser() {
    if (localStorage.getItem('currentUser') !== null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } else {
      this.currentUser = null;
    }

    return this.currentUser;
  }

  isUserRegistered(): boolean {
    // console.log(localStorage.getItem('currentUser'))
    return localStorage.getItem('currentUser') !== null;
  }

  async onLogin(email: string, password: string) {
    let url = environment.api + '/login';
    let b: boolean = false;
    let body = {
      email: email,
      password: password
    }

    this._httpClient.post(url, body)
        .subscribe((result: any) => {
          console.log(result)
          if (result.code === 1) {
            localStorage.setItem('currentUser', JSON.stringify(result.row));
            console.log('logged in')
            b = true;
          }
        })

        return b;
  }

  onRegister(body: any) {
    let url = environment.api + '/register';

    this._httpClient.post(url, body)
        .subscribe((result: any) => {
          console.log(result)
          localStorage.setItem('currentUser', JSON.stringify({iduser: result.insertId, email: body.email}));
        })
  }

  onLogout(): boolean {
    localStorage.removeItem('currentUser');
    return true;
  }
}
