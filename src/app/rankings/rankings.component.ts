import { Component, OnInit, Input } from '@angular/core';
import { RankingService } from './ranking.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss'],
})
export class RankingsComponent implements OnInit {

  Usuaris: Array<any>;

  constructor(
    private rankingService:RankingService
  ) {
    this.Usuaris = this.rankingService.Usuaris
   }

  ngOnInit() {}

}
