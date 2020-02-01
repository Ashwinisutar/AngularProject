import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { FoodRoutingModule } from '../food-routing/food-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from  '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule, MatSidenavModule, MatListModule} from  '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import { AgmCoreModule } from '@agm/core';







@NgModule({
  declarations: [HomeComponent, ProductsComponent, CartComponent, PaymentComponent, MenuComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FormsModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCuCnBgvl9zt7l5aVyvevvzLPaliy03M08',
      libraries: ['places']
    })
    
    
  
   
  
  ],
 
})
export class HomeModule { }
