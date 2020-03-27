import { Component, OnInit } from '@angular/core';
import { RankingService } from './ranking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss'],
})

export class RankingsComponent implements OnInit {

  ranking: any[] = [];
  field: string;
  handle: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _rankingService: RankingService
  ) {

   }

  ngOnInit() {
    this.field = this._activatedRoute.snapshot.paramMap.get('field');
    this.handle = this._activatedRoute.snapshot.paramMap.get('handle');
    this._rankingService.getRanking(this.handle)
        .then(list => {
          this.ranking = list;
          // console.log(this.ranking)
        })
        .catch(err => console.log(err));
  }

}
