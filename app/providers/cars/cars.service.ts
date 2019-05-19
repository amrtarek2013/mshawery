import { Injectable } from '@angular/core';
import { CARS } from './mock-cars';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})

export class CarsService {
  private cars: any;

  constructor( public api: Api) {
    this.cars = CARS;
  }

  getAll() {
    return this.cars;
  }

  getItem(id) {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id === parseInt(id)) {
        return this.cars[i];
      }
    }
    return null;
  }

  getCar(carshopID, carID) {
    let carshop = this.getItem(carshopID);

    for (let i = 0; i < carshop.cars.length; i++) {
        if (carshop.cars[i].id === parseInt(carID)) {
            return carshop.cars[i];
        }
    }

    return null;
}  

  remove(item) {
    this.cars.splice(this.cars.indexOf(item), 1);
  }

  addcarz(carinfo: any) {
    let seq = this.api.post('addcarz', carinfo);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
       console.log("SUCCESS");
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
}
