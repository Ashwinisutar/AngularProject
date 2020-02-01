import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }



  getProducts(){
    let header=new HttpHeaders().set("user-key","a967fb450a8f722cf2617850b73470ae")
   header.append("Accept","application/json")

    return this._http.get("https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city",{headers:header})

    
}

  getMenuDetails(){
    return this._http.get("https://raw.githubusercontent.com/Harsh-gitx/zomato/master/menu.json")
    .pipe(map(data=>data['menu']))
  }
}
