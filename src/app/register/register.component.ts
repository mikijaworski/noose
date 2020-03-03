import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

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
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {

  }

  onRegister() {
    console.log('mierda')
    let form = {email: this.email, password: this.password, name: this.name};
    this._authService.onRegister(form);
  }

}
