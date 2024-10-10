import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProveedorComponent } from './pages/list-proveedor/list-proveedor.component';
import { NewProveedorComponent } from './pages/new-proveedor/new-proveedor.component';
import { ProveedorPagesComponent } from './pages/proveedor-pages/proveedor-pages.component';
import { LayoutPagesComponent } from '../shared/layout-pages/layout-pages.component';

const routes: Routes = [
  {
    path:'',component:LayoutPagesComponent,children:[
      {path:'list',component:ListProveedorComponent},
      {path:'new-proveedor',component:NewProveedorComponent},
      {path:'edit/:id',component:NewProveedorComponent},
      {path:':id',component:ProveedorPagesComponent},
      {path:'**',component:ListProveedorComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule { }
