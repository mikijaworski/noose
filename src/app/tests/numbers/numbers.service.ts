import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  authUser: boolean;

  constructor(
    private _httpClient: HttpClient,
    private _toastController: ToastController,
    private _authService: AuthenticationService
  ) {

  }

  UploadProgress(level: number) {

      let url = environment.api + '/numbers/add';
      let iduser = JSON.parse(localStorage.getItem('currentUser')).iduser;

      this._httpClient.post(url, {level: level, user_iduser: iduser})
          .subscribe((result: any) => {
            console.log(result)
            if (result.code === 1) {
              console.log('level added')
              this.OpenSnackbar('Progress has been saved!');
            }
          })
  }

  checkUserLogged() {
    this.authUser = this._authService.isUserRegistered();
  }

  async OpenSnackbar(message: string) {
    const toast = await this._toastController.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }
}
