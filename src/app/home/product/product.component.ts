import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { MenudetailsComponent } from '../menudetails/menudetails.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  restaurantsData
  constructor(private _productService:ProductService, private _routerMenu:Router) { }

  ngOnInit() {
    //this._productService.getProducts()
     this._productService.getProducts().subscribe((data)=>{

      console.log(this.restaurantsData=data["restaurants"])
      console.log(data)
     },
     (error)=>{

     })
  }

  getMenu(){
this._routerMenu.navigate(['home/menu'])
  }

}
