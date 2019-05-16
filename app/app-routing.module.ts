import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'selectuser',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'selectuser', loadChildren: './selectuser/selectuser.module#SelectuserPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'register-driver', loadChildren: './register-driver/register-driver.module#RegisterDriverPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'verify-account', loadChildren: './verify-account/verify-account.module#VerifyAccountPageModule' },
  { path: 'add-car', loadChildren: './add-car/add-car.module#AddCarPageModule' },
  { path: 'add-location', loadChildren: './add-location/add-location.module#AddLocationPageModule' },
  { path: 'login-driver', loadChildren: './login-driver/login-driver.module#LoginDriverPageModule' },
  { path: 'car-photos', loadChildren: './car-photos/car-photos.module#CarPhotosPageModule' },
  { path: 'car-features', loadChildren: './car-features/car-features.module#CarFeaturesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
