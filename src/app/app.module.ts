import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';

import {AppRoutingModule} from './app.routing';

import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {HomeProductsComponent} from './components/home-products/home-products.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product/product.component';
import {ProductCreateComponent} from './components/product-create/product-create.component';
import {SoldProductsComponent} from './components/sold-products/sold-products.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {TestComponent} from './components/test/test.component';

import {UserService} from './services/user.service';
import {ProductService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeProductsComponent,
    ProductListComponent,
    ProductComponent,
    ProductCreateComponent,
    SoldProductsComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FacebookModule.forRoot()
  ],
  providers: [
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
