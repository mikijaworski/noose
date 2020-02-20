import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  tests: any[] = [
    {title: 'Remember numbers', path: '/test/numbers'},
    {title: 'Remember reaccio', path: '/test/reaccio'}
  ]

  constructor() { }

  ngOnInit() {}

}
