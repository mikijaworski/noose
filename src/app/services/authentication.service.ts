import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: any = null;

  constructor(
    private _httpClient: HttpClient
  ) { }

  getCurrentUser() {
    if (JSON.parse(localStorage.getItem('currentUser')) !== null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } else {
      this.currentUser = null;
    }

    return this.currentUser;
  }

  onRegister(body: any) {
    let url = environment.api + '/register';

    this._httpClient.post(url, body)
        .subscribe((result: any) => {
          console.log(result)
          localStorage.setItem('currentUser', JSON.stringify({iduser: result.insertId, email: body.email}));
        })
  }
}
