import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES DE NAVEGAÇÃO 
// VIEWS {
//   home
//   product-crud
// }

import {HomeComponent} from "./views/home/home.component"
import {ProductCrudComponent} from "./views/product-crud/product-crud.component"
import {ProductCreateComponent} from './components/template/product/product-create/product-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
