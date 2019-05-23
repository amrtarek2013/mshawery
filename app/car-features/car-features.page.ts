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
   public token ;
   public car_ID: string;
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
    this.token = location.href.split('/')[4];
    this.addCarFeatures = new FormGroup({
      description: new FormControl(),
      carid: new FormControl(this.token),
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
       //this.addCarFeatures.value;
       this.carservice.addcarz(this.addCarFeatures.value).subscribe((resp) => {
        
         let car_id = resp['car_feature'];

        this.router.navigate(['/car-photos',car_id]);

        //console.log(this.storage.get('token'));
       // if (resp.status == 'success') {
      //    this.FormReg('DDDDDDDDDD');
         //this.navCtrl.navigateRoot('/selectuser');
       // } else {
         // this.FormReg('Wrong Data');
          
      //  }
        

    
      }, (err) => {
        
      
      });
    
     }

}
