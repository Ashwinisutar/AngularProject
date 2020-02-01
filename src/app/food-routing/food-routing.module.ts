import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { RegistrationComponent } from '../registration/registration/registration.component';
import { HomeComponent } from '../home/home/home.component';
import { SecurityGuard } from '../security.guard';
import { ProductsComponent } from '../home/products/products.component';
import { CartComponent } from '../home/cart/cart.component';
import { PaymentComponent } from '../home/payment/payment.component';
import { MenuComponent } from '../home/menu/menu.component';

const routes:Routes=[{path:'login',component:LoginComponent},
{path:'register',component:RegistrationComponent},
{path:'home',component:HomeComponent,canActivate:[SecurityGuard],
children:[{path:'products', component:ProductsComponent},
{path:'cart', component:CartComponent},
{path:'payment', component:PaymentComponent},
{path:'menu', component:MenuComponent},
{path:'**', redirectTo:'products'}]},
{path:'**',redirectTo:'/login'}]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class FoodRoutingModule { }
