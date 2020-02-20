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

  // level: number = 1;
  randomNumber: string;
  enteredNumber: string;

  hasStarted: boolean  = false;
  windowRed: boolean = false;
  windowGreen: boolean = false;
  gameOver: boolean = false;
  numberGameOver: number = 5;

  // NextLevel() {
  //   this.level++;
  //   this.enteredNumber = null;
  //   this.hasStarted = false;
  //   this.windowRed = false;
  // }

  StartLevel() {
    this.hasStarted = true;

    // let str = '';

      let number = Math.trunc(Math.random() * 4);

      setTimeout(() => {
      this.windowGreen = true;
      this.windowRed = false;
    }, number);

    //   str += number;
    // this.randomNumber = str;
    

  }

  Check() {
    console.log(this.randomNumber, this.enteredNumber)
      this.windowGreen = false;
    if (this.randomNumber === this.enteredNumber) {
      this.NextLevel();
    } else {
      this.gameOver = true;
    }
  }
  
  NextLevel() {
    throw new Error("Method not implemented.");
  }

  Reset() {
    this.level = 1;
    this.enteredNumber = null;
    this.hasStarted = false;
    this.windowRed = true;
    this.gameOver = false;
  }

  formVisibility: boolean = false;

  ShowForm(){
    this.formVisibility = true;
    console.log(this.formVisibility)
  }
}
