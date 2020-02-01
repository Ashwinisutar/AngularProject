import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Foodiesthan';

  constructor(private _router:Router){}
  ngOnInit(){
    if(sessionStorage.getItem("email")!=null)
    {
      this._router.navigate([window.location.pathname])
    }
  }


}
