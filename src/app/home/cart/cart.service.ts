import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems=[]
  cartSize

  constructor() { }

  ngOnInit(){
    this.cartSize=this.cartItems.length
  }
}
