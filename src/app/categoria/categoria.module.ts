import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { NewCategoriaComponent } from './pages/new-categoria/new-categoria.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CategoriaPageComponent } from './pages/categoria-page/categoria-page.component';
import { MaterialModule } from '../material/material.module';
import { TableCategoriaComponent } from './components/table-categoria/table-categoria.component';
import { SharedModule } from '../shared/shared.module';
import { LoadingComponent } from './components/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [


    NewCategoriaComponent,
         ListPageComponent,
         CategoriaPageComponent,
         TableCategoriaComponent,
         LoadingComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,MaterialModule,ReactiveFormsModule
  ]
})
export class CategoriaModule { }
