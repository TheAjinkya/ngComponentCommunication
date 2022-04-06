import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent/parent.component';
import { ProductsComponent } from './shared/products/products.component';
import { UsersComponent } from './shared/users/users.component';

const routes: Routes = [{
  path: '',
  component: ParentComponent
},
{
  path: 'users',
  component: UsersComponent
},
{
  path: 'product',
  component: ProductsComponent
},
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
