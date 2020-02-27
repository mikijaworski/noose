import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reaccio',
  templateUrl: './reaccio.component.html',
  styleUrls: ['./reaccio.component.scss'],
})

export class ReaccioComponent implements OnInit {
  level: number;

  constructor() { }

  ngOnInit() {}
  randomNumber: string;
  hasError: boolean = false;
  NumParty: number = 0;
  MaxParty: number = 5;
  Timer: any;
  ContadorIntervals: number = 0;
  IncrementaContador: number = 0;
  gameOver: boolean = false;
  resultat: number = 0;

  StartLevel() {
      let number = Math.trunc(Math.random() * 4000);
      this.NumParty++;
      setTimeout(() => {  
      this.hasError = true;
      this.Timer = setInterval(() => {
        this.ContadorIntervals++;
      }, 1);  
    }, number);    

  }

  
  IntervalCount() {
    clearInterval(this.Timer);
    this.IncrementaContador += this.ContadorIntervals;
    console.log(this.ContadorIntervals);
    this.ContadorIntervals = 0;
    if(this.NumParty < this.MaxParty) {
      this.hasError = false;
      this.StartLevel();
    } else {
      this.gameOver = true;
      this.resultat = Math.trunc(this.IncrementaContador / this.MaxParty);
    }
  }
  


  formVisibility: boolean = false;

  ShowForm(){
    this.formVisibility = true;
    console.log(this.formVisibility)
  }
}
