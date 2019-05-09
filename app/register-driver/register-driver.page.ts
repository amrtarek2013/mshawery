import { Component, OnInit } from '@angular/core';

import { TranslateProvider,User } from '../providers';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.page.html',
  styleUrls: ['./register-driver.page.scss'],
})
export class RegisterDriverPage implements OnInit {
  public onRegisterForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public user: User,  
    private formBuilder: FormBuilder,
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'fullName': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async signUp() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/home');
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }

}
