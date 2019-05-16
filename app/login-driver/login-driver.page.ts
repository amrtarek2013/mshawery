import { Component, OnInit } from '@angular/core';
import { TranslateProvider,User } from '../providers';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-driver',
  templateUrl: './login-driver.page.html',
  styleUrls: ['./login-driver.page.scss'],
})
export class LoginDriverPage implements OnInit {

  public onLoginForm: FormGroup;
  
  account: { user: string, pass: string } = {
    user: 'admin111',
    pass: '123456'
  };

  constructor(
    private translate: TranslateProvider,
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public user: User,  
    public loadingCtrl: LoadingController, 
  ) { }

  ngOnInit() {
    // document.querySelector('video').play();
    
    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }



  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: this.translate.get('app.pages.login.label.forgot'),
      message: this.translate.get('app.pages.login.text.forgot'),
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: this.translate.get('app.label.email')
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: this.translate.get('app.pages.login.text.sended'),
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register-driver');
  }
  async FormReg(msg){
    console.log("FormReg");
    
      let toast = await this.toastCtrl.create({
        message:msg,
        duration: 3000,
        position: 'bottom'
      });
      console.log("FormReg");
      
      return await toast.present();
  
    }
  goToHome() { 
        // console.log(this.onLoginForm.get("email").value);
        // console.log(this.onLoginForm.get("password").value);
        this.account.user=this.onLoginForm.get("email").value;
        this.account.pass=this.onLoginForm.get("password").value;

        this.user.login(this.account).subscribe((resp) => {
          // this.navCtrl.push(MainPage);
          console.log(resp);
          //console.log(this.storage.get('token'));
         // if (resp.status == 'success') {
            this.FormReg('DDDDDDDDDD');
            this.navCtrl.navigateRoot('/selectuser');
         // } else {
            this.FormReg('Wrong Data');
            
        //  }
          
 
      
        }, (err) => {
          
        
        });



   // this.navCtrl.navigateRoot('/home');
  }

}
