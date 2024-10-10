import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { NewProveedorComponent } from './pages/new-proveedor/new-proveedor.component';
import { ListProveedorComponent } from './pages/list-proveedor/list-proveedor.component';
import { ProveedorPagesComponent } from './pages/proveedor-pages/proveedor-pages.component';
import { MaterialModule } from '../material/material.module';
import { TableProveedorComponent } from './components/table-proveedor/table-proveedor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewProveedorComponent,
    ListProveedorComponent,
    ProveedorPagesComponent,
    TableProveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedorRoutingModule,MaterialModule,ReactiveFormsModule
  ]
})
export class ProveedorModule { }
