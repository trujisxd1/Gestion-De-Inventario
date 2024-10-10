import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'categorias',
    loadChildren:()=>import('./categoria/categoria.module').then(m=>m.CategoriaModule)
  },
  {
    path:'productos',
    loadChildren:()=>import('./productos/productos.module').then(m=>m.ProductosModule)
  },
  {
    path:'proveedor',
    loadChildren:()=>import('./proveedor/proveedor.module').then(m=>m.ProveedorModule)
  },
  {
    path:'transaccion',
    loadChildren:()=>import('./transaccion/transaccion.module').then(m=>m.TransaccionModule)
  },
  {
    path:'',
    redirectTo:'productos',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
