import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumbersComponent } from './numbers.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuModule } from '../../@shared/menu/menu.module';

const routes: Routes = [
  {
    path: '**',
    component: NumbersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule
  ],
  declarations: [NumbersComponent]
})
export class NumbersModule {}
