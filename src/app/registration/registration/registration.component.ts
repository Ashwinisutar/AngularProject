import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { customValidation } from '../CustomValidation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //user={firstname:'',lastname:'', email:'',password:'',confirmpassword:'',phno:''} (For Template driven form)
  constructor(private _builder:FormBuilder, private _router:Router) { }

  fields={
    firstname:["",[Validators.required, Validators.minLength(3)]],
    lastname:["",[Validators.required]],
    email:["",[Validators.required, Validators.maxLength(30),Validators.email]],
    password:["",[Validators.required,Validators.minLength(5),]],
    confirmpassword:["",[Validators.required]],
    phno:["",[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]+$")]]

  }
  ngOnInit() {
  }

  form=this._builder.group(this.fields,{validators:customValidation})

  register(){
   //console.log(this.user)
   //let userString=JSON.stringify(this.user)   (For Template driven form)
   //localStorage.setItem("key",userString)
   console.log(this.form.value)
    let userString=JSON.stringify(this.form.value)
   // localStorage.setItem("key",userString)
   //localStorage.setItem(this.user.email,userString)
    localStorage.setItem(this.form.get('email').value,userString)
    this._router.navigate(["/login"])

  }

}

