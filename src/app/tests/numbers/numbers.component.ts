import { Component, OnInit } from '@angular/core';
import { NumbersService } from './numbers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})

export class NumbersComponent implements OnInit {

  authUser: boolean = false;

  level: number = 1;
  randomNumber: string;
  enteredNumber: string;

  hasStarted: boolean  = false;
  numberDisapear: boolean = false;
  startDisabled: boolean = false;
  gameOver: boolean = false;
  hasUpload: boolean = false;

  constructor(
    private _numbersService: NumbersService,
    private router: Router
  ) { }

  ngOnInit() {
    this._numbersService.checkUserLogged();
    this.authUser = this._numbersService.authUser;
  }

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
      this._numbersService.OpenSnackbar('You guessed the number!');
    } else {
      this.gameOver = true;
      this._numbersService.OpenSnackbar('You failed the number!');
    }
  }

  Upload() {
    console.log('uploading')
    this.hasUpload = true;
    this._numbersService.UploadProgress(this.level);
  }

  Reset() {
    this.level = 1;
    this.enteredNumber = null;
    this.hasStarted = false;
    this.numberDisapear = false;
    this.gameOver = false;
    this.hasUpload = false;
  }

}
