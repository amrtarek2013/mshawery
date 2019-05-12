import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateProvider } from '../providers';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,
    private translate: TranslateProvider
  ) { }

  ngOnInit() {
  }

}
