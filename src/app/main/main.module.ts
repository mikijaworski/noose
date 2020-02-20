import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    component: MainComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [MainComponent]
})
export class MainModule {}
