import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit{
  ngOnInit(): void {

    this.productService.getProductos().subscribe(productos=>this.producto=productos)
  }


  producto:Productos[]=[]

  constructor(private productService:ProductosService){


  }
}
