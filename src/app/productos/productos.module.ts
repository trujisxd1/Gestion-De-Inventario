import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListProductComponent,
    NewProductComponent,
    ProductPagesComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,MaterialModule,ReactiveFormsModule
  ]
})
export class ProductosModule { }
