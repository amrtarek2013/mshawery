import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController , NavParams} from '@ionic/angular';
import { TranslateProvider } from '../providers';
import { CarsService } from '../providers/cars/cars.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-car-features',
  templateUrl: './car-features.page.html',
  styleUrls: ['./car-features.page.scss'],
})
export class CarFeaturesPage implements OnInit {
  public addCarFeatures: FormGroup;
  
  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,
    private translate: TranslateProvider,
    public carservice: CarsService,  
    public router: Router
  ) {
   
   }

  ngOnInit() {
    this.addCarFeatures = new FormGroup({
      description: new FormControl(),
      radio: new FormControl(),
      leatherseats: new FormControl(),
      cdplayer: new FormControl(),
      ac: new FormControl(),
      fireext: new FormControl(),
      smoke: new FormControl(),
      extratyre: new FormControl(),
      firstaid: new FormControl(),
      carseat: new FormControl(),
   });
  }

  addFeatures(){
    console.log(this.addCarFeatures.value);
  }

}
