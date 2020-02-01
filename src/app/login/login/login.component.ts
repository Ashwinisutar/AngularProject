import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }
 user={email:'',pass:''}
 error:boolean

  

  ngOnInit() {
  }

  authenticate(){
   // console.log(this.user.email)
   // console.log(this.user.pass)
   if(this.user.email!=null){
    let userObj=JSON.parse(localStorage.getItem(this.user.email))
    if(userObj!=null)
    {if(this.user.email==userObj.email && this.user.pass==userObj.password){
      this.error=false
      sessionStorage.setItem("email",this.user.email)
      sessionStorage.setItem("name",userObj.firstname)
      this._router.navigate(["/home"])
    }}
    else{
      this.error=true
    }
   
   }
   else{
    this.error=true
  }

   
  }

  navigateToRegister(){
    this._router.navigate(["/register"])
  }

  getUrl()
{
  return "url('https://st2.depositphotos.com/1013886/10274/i/950/depositphotos_102741340-stock-photo-organic-food-background-food-photography.jpg')";
}

}
