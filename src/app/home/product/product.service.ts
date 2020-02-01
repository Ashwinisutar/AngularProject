import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpService:HttpClient) { }

  getProducts(){
    //console.log("calling product service")
   return this._httpService.get("https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city",{headers:new HttpHeaders().set("user-key","e2ceaa333f1c978ca3ff379d8d642c43")})
   
  //return this._httpService.get("https://raw.githubusercontent.com/Harsh-gitx/Zomato/master/menu.json")
}

getMenuDetails(){
 return this._httpService.get("https://raw.githubusercontent.com/Harsh-gitx/Zomato/master/menu.json")  
 .pipe(map(data=>data['menu']))

}

}
