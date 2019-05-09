import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { RegisterDriverPage } from './register-driver.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterDriverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(), 
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [RegisterDriverPage]
})
export class RegisterDriverPageModule {}
