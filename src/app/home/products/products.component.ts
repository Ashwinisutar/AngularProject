import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  restaurants=[]
  loading = true;

  constructor(private _service:ProductsService, private _router:Router) { }

  getMenu(){
    this._router.navigate(["home/menu"])
  }

  

  ngOnInit() {
    this._service.getProducts().subscribe((data)=>{

     this.restaurants=data["restaurants"]
      console.log(data)
      this.loading = false;
    },(err)=>{
      console.log(err)
    })
  }

}
