import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameuser
  Visible
  cartSize
 
  constructor(private _router:Router) { }

  @Output() event =new EventEmitter()

  logOut(){
    sessionStorage.removeItem("email")
    this._router.navigate(["/login"])
  }

  navigateToCart(){
    this._router.navigate(["home/cart"])
  }

  

  ngOnInit() {
    this.nameuser=sessionStorage.getItem("name")
    
  }

  
}
