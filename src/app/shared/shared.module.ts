import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPagesComponent } from './layout-pages/layout-pages.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    LayoutPagesComponent,
    
  ],
  imports: [
    CommonModule,MaterialModule,AppRoutingModule
  ],
  exports:[
    LayoutPagesComponent
  ]
})
export class SharedModule { }
