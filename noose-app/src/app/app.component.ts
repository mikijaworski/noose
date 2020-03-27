import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages;

  constructor(
    private _appService: AppService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _authService: AuthenticationService,
    private _router: Router
  ) {
    this.initializeApp();

    this.appPages = [];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }

    this._appService.onAppPagesChanged
        .subscribe((logged: boolean) => {
          console.log(logged)
          if (logged) {
              this.appPages = [
                {
                  title: 'Test list',
                  url: '/',
                  icon: 'mail',
                  show: true
                },
                // {
                //   title: 'Login',
                //   url: '/login',
                //   icon: 'paper-plane',
                //   show: true
                // },
                {
                  title: 'Logout',
                  url: '/logout',
                  icon: 'paper-plane',
                  show: true
                },
                // {
                //   title: 'Register',
                //   url: '/register',
                //   icon: 'paper-plane',
                //   show: true
                // }
              ];
          } else {
            this.appPages = [
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
              // {
              //   title: 'Logout',
              //   url: '/logout',
              //   icon: 'paper-plane',
              //   show: true
              // },
              {
                title: 'Register',
                url: '/register',
                icon: 'paper-plane',
                show: true
              }
            ];
          }
        });

    setTimeout(() => {
      this._appService.onAppPagesChanged.next(localStorage.getItem('currentUser') !== null);
    }, 500);

  }
}
