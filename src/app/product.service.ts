import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// });
export class ProductService {
  private _album_url = "../assets/album.json";
  constructor(private _http: Http,) {


  }

  getAlbum(id:number) {
    return this._http.get(this._album_url);
  }

}
