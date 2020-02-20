import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {

  level: number = 1;
  randomNumber: string;
  enteredNumber: string;

  hasStarted: boolean  = false;
  numberDisapear: boolean = false;
  startDisabled: boolean = false;
  gameOver: boolean = false;

  constructor() { }

  ngOnInit() {}

  NextLevel() {
    this.level++;
    this.enteredNumber = null;
    this.hasStarted = false;
    this.numberDisapear = false;
  }

  StartLevel() {
    this.hasStarted = true;

    let str = '';
    for (let i = 0; i < this.level; i++) {
      let number = Math.trunc(Math.random() * 10);
      console.log(number)
      str += number;
    }

    this.randomNumber = str;

    setTimeout(() => {
      this.startDisabled = true;
      this.numberDisapear = true;
    }, 2000);
  }

  Check() {
    console.log(this.randomNumber, this.enteredNumber)
      this.startDisabled = false;
    if (this.randomNumber === this.enteredNumber) {
      this.NextLevel();
    } else {
      this.gameOver = true;
    }
  }

  Reset() {
    this.level = 1;
    this.enteredNumber = null;
    this.hasStarted = false;
    this.numberDisapear = false;
    this.gameOver = false;
  }

}
