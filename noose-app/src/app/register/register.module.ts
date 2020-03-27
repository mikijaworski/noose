import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuModule } from '../@shared/menu/menu.module';

const routes: Routes = [
  {
    path: '**',
    component: RegisterComponent
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
  declarations: [RegisterComponent]
})
export class RegisterModule {}
