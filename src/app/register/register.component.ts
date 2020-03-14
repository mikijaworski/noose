import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  name: string;

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  onRegister() {
    let form = {email: this.email, password: this.password, name: this.name};
    if (this._authService.onRegister(form)) {
      this._router.navigate(['/main']);
    }
  }

}
