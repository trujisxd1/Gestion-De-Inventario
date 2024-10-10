import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTrasaccionComponent } from './pages/list-trasaccion/list-trasaccion.component';
import { NewTrasaccionComponent } from './pages/new-trasaccion/new-trasaccion.component';
import { TrasanccionPageComponent } from './pages/trasanccion-page/trasanccion-page.component';
import { LayoutPagesComponent } from '../shared/layout-pages/layout-pages.component';

const routes: Routes = [{

  path:'',component:LayoutPagesComponent,children:[
    {path:'list',component:ListTrasaccionComponent},
    {path:'new-trasanccion',component:NewTrasaccionComponent},
    {path:'edit/:id',component:NewTrasaccionComponent},
    {path:':id',component:TrasanccionPageComponent},
    {path:'**',component:ListTrasaccionComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionRoutingModule { }
