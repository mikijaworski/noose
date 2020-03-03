import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {
    if (this._authService.onLogout()) {
      this._router.navigate(['/main']);
      console.log('logged out')
    }
  }

}
