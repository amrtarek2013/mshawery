import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { LoginDriverPage } from './login-driver.page';

const routes: Routes = [
  {
    path: '',
    component: LoginDriverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),   
    RouterModule.forChild(routes)
  ],
  declarations: [LoginDriverPage]
})
export class LoginDriverPageModule {}
