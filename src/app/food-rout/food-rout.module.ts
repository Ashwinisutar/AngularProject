import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { RegistrationComponent } from '../registration/registration/registration.component';
import { HomeComponent } from '../home/home/home.component';
import { SecurityGuard } from '../security.guard';
import { CartComponent } from '../home/cart/cart.component';
import { ProductComponent } from '../home/product/product.component';
import { PaymentComponent } from '../home/payment/payment.component';
import { MenudetailsComponent } from '../home/menudetails/menudetails.component';

const routes:Routes= [{path:'login', component:LoginComponent},
{path:'register', component:RegistrationComponent},
{path:'home', component:HomeComponent, canActivate:[SecurityGuard],
children:[{path:'cart', component:CartComponent},
{path:'product', component:ProductComponent},
{path:'payment', component:PaymentComponent},
{path:'menu', component:MenudetailsComponent},
{path:'**', redirectTo:'product'}]},
{path: '**', redirectTo:'login'}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class FoodRoutModule { }
