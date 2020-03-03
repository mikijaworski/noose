import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() title: string;

  constructor(
    private _menuController: MenuController
  ) { }

  ngOnInit() {}

  openMenu() {
    this._menuController.open('main');
  }

}
