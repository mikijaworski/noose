import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public appPages = [
    {
      title: 'Test list',
      url: '/',
      icon: 'mail',
      show: true
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'paper-plane',
      show: true
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'paper-plane',
      show: true
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'paper-plane',
      show: true
    }
  ];

  onAppPagesChanged: EventEmitter<boolean>;

  constructor() {
    this.onAppPagesChanged = new EventEmitter();
  }
}
