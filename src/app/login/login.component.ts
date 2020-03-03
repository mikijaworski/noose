import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {}

  onLogin() {
    if(this._authService.onLogin(this.email, this.password)) {
      this._router.navigate(['/main']);
    }
  }

}
