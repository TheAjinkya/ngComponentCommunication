import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildProductsComponent } from './child-products/child-products.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent,
    NavbarComponent,
    ChildProductsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[ ProductsComponent,
    UsersComponent,
    NavbarComponent]
})
export class SharedModule { }
