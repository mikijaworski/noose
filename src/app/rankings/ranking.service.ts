import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  Usuaris: Array<any>;

  constructor(
    private _httpClient: HttpClient,
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
            this.Usuaris = result.rows; 
            // this.OpenSnackbar('Progress has been saved!');
          }
        })
}
}
