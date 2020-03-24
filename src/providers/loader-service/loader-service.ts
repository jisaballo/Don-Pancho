import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoaderServiceProvider Provider');
  }

  loadProducts() {
    try {
      let promise = new Promise((resolve, reject) => {
        this.http.get("assets/data/products.json")
        .toPromise()
        .then(response => {
          resolve(response);
        }, msg => {
          reject(msg);
        })
      })
      return promise;
    } catch(e) {
      console.error(e);
    }
  }
}
