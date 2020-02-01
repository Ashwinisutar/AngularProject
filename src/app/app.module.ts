import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { FoodRoutingModule } from './food-routing/food-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent
  
    
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    FoodRoutingModule,
    RegistrationModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
