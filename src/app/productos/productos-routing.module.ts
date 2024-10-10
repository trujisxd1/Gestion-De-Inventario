import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';
import { LayoutPagesComponent } from '../shared/layout-pages/layout-pages.component';

const routes: Routes = [
  {path:'',component:LayoutPagesComponent,children:[
    {path:'new-product',component:NewProductComponent},
    {path:'list',component:ListProductComponent},
    {path:'edit/:id',component:NewProductComponent},
    {path:":id",component:ProductPagesComponent},
    {path:'**',component:ListProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
