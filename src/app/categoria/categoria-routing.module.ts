import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCategoriaComponent } from './pages/new-categoria/new-categoria.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CategoriaPageComponent } from './pages/categoria-page/categoria-page.component';
import { LayoutPagesComponent } from '../shared/layout-pages/layout-pages.component';

const routes: Routes = [
  {path:'',component:LayoutPagesComponent,children:[
    {path:'new-categoria',component:NewCategoriaComponent},
    {path:'edit/:id',component:NewCategoriaComponent},
    {path:'list',component:ListPageComponent},
    {path:':id',component:CategoriaPageComponent},
    {path:'**',component:ListPageComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
