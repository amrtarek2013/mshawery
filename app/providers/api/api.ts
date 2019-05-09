import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
import {  catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class Api {
  url: string = 'http://localhost/goldshop/apis';

  data:any[];

  constructor(public http: HttpClient) {
  }


  load() {
    if (this.data) {
      // already loaded data
      return   (this.data);
    }
  
    // don't have the data yet
    
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      // this.http.get(this.url ).then(data => {
        
      //       console.log(data.status);
      //       console.log(data.data); // data received by server
      //       console.log(data.headers);
        
      //     })
      //     .catch(error => {
        
      //       console.log(error.status);
      //       console.log(error.error); // error message as string
      //       console.log(error.headers);
        
      //     });

       
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    
    // .map(res => res.json())
    //  .subscribe(data => { 
    //    // we've got back the raw data, now generate the core schedule data
    //    // and save the data for later reference
     
    //  //this.data = data.results;
    //    console.log(data); 
       
    //  }); 

    // this.http.get(this.url+ '/' + endpoint, {}, {}).then(data => {
      
    //       console.log(data.status);
    //       console.log(data.data); // data received by server
    //       console.log(data.headers);
      
    //     }).catch(error => {
      
    //       console.log(error);
    //       console.log(error.error); // error message as string
    //       console.log(error.headers);
      
    //     });


     
    

    return this.http.get(this.url+ '/' + endpoint);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    console.log(reqOpts);
    console.log("----");
    console.log(body);
    console.log("----");
    let res=this.http.post(this.url + '/' + endpoint, body, reqOpts)
    return res;
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    // return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
