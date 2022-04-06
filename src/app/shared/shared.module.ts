import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ChildProductsComponent } from './child-products/child-products.component';



@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent,
    NavbarComponent,
    ChildProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ ProductsComponent,
    UsersComponent,
    NavbarComponent]
})
export class SharedModule { }
