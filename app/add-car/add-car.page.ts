import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateProvider } from '../providers';
import { CarsService } from '../providers/cars/cars.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {
  public addCarForm: FormGroup;
  
  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,
    private translate: TranslateProvider,
    public carservice: CarsService,  
    public router: Router
   // public carfeatures :CarFeaturesPage
  ) { }

  ngOnInit() {
    this.addCarForm = new FormGroup({
      address: new FormControl(),
      make: new FormControl(),
      model: new FormControl(),
      year: new FormControl(),
      cc: new FormControl(),
      trans: new FormControl(),
   });
  }

   addCar() { 
   
    this.carservice.addcarz(this.addCarForm.value).subscribe((resp) => {
          // this.navCtrl.push(MainPage);
          let car_id = resp['id'];
          this.router.navigate(['/car-features',car_id]);
 
          //console.log(this.storage.get('token'));
         // if (resp.status == 'success') {
        //    this.FormReg('DDDDDDDDDD');
           //this.navCtrl.navigateRoot('/selectuser');
         // } else {
           // this.FormReg('Wrong Data');
            
        //  }
          
 
      
        }, (err) => {
          
        
        });



   // this.navCtrl.navigateRoot('/home');
  }

}
