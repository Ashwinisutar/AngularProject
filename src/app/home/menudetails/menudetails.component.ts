import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent implements OnInit {
stasters:[]
mainCourse:[]
beverages:[]
menu=[]
  constructor(private _productService:ProductService, private _cartService:CartService) { }

  ngOnInit() {
    this._productService.getMenuDetails().subscribe(
      (menuData)=>{
        this.menu.push(...menuData[0].starter,...menuData[1].main, ...menuData[2].Beverages) //(...)spread operator in javascript 

          // console.log(this.stasters = menuData[0].starter)
          // this.mainCourse = menuData[1].main
          // this.beverages = menuData[2].Beverages
        //  console.log(this.stasters = menuData['menu'][0].starter)
        //  this.mainCourse = menuData['menu'][1].main
        //  this.beverages = menuData['menu'][2].Beverages
    },
    ()=>{

    })

  }

  addtoCart(cartItem){
    let index = this._cartService.cartItems.findIndex(
      presentCartItem=> presentCartItem.name==cartItem.name
    )
    if(index!=-1){
      this._cartService.cartItems[index].qty++;
    }
    else{
      cartItem.qty=1
      this._cartService.cartItems.push(cartItem)
    }
    
  }

  search(searchItem){
    this.menu=this.menu.filter(menuItem=>menuItem.name.toLowerCase().replace(/ /g,'').includes(searchItem.toLowerCase().replace(/ /g,'')))

  }
}
