import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrl: './product-pages.component.css'
})
export class ProductPagesComponent implements OnInit{

producto?:Productos

constructor(private serviceProducto:ProductosService,private activateRouter:ActivatedRoute,private router:Router){

}
  ngOnInit(): void {
   this.activateRouter.params.pipe(
    switchMap(({id})=>this.serviceProducto.getProductoById(id))
   ).subscribe(
    produc=>{
      if(!produc)return this.router.navigate(['/productos/list'])

        this.producto=produc
        return
    }
   )
  }

}
