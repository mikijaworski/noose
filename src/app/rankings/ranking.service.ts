import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getRanking(handle: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = environment.api + '/' + handle + '/ranking';

      this._httpClient.get(url)
          .subscribe((result: any) => {
            // console.log(result.rows)
            let ranking = [];
            if (result.code === 1) {
              ranking = result.rows;
            }
            resolve(ranking);
          })
    })
}
}
