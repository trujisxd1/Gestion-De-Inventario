import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria, Productos } from '../../interfaces/producto.interface';
import { CategoriaServiceService } from '../../../categoria/service/categoria-service.service';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { switchMap } from 'rxjs';
import { Proveedor } from '../../../proveedor/interfaces/proveedor.interface';
import { ProveedorService } from '../../../proveedor/service/proveedor.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{


  ngOnInit(): void {
this.categoriasCarga()
this.proveedorCarga()
if(!this.router.url.includes('edit')){
  return
}
this.acticvateRouter.params.pipe(
  switchMap(({id})=>this.serviceProduct.getProductoById(id))
).subscribe(product=>{
  if(!product){
    return this.router.navigate(['/productos/list'])
  }

  this.productoForm.reset(product)
  return
})


  }

  constructor(private proveedorService:ProveedorService,private service:CategoriaServiceService,
    private serviceProduct:ProductosService,private router:Router,
    private acticvateRouter:ActivatedRoute){

  }
  categoria:Categoria[]=[]
  proveedor:Proveedor[]=[]
  public productoForm=new FormGroup({
    idProducto:new FormControl<number>(0),
    nombre: new FormControl<string>(''),
    descripcion:new FormControl<string>(''),
    cantidad:new FormControl<number>(0),
    precio:new FormControl<number>(0),
     // Subgrupo para los datos de la categoría
     categoria: new FormGroup({
      idCategoria: new FormControl<number>(0),
    }),
    proveedor: new FormGroup({
      idProveedor: new FormControl<number>(0),
    })
  })

  categoriasCarga():void{
    this.service.getCategoria().subscribe(categoria =>this.categoria = categoria);
  }

  proveedorCarga():void{
    this.proveedorService.getProveedor().subscribe(prod=>this.proveedor=prod)
  }

  onSummit():void{
    console.log(this.currentProducto)
    if(this.productoForm.invalid)return

    if(this.currentProducto.idProducto){
      this.serviceProduct.UpdateProduct(this.currentProducto).subscribe(categoria=>{
        Swal.fire({
          title: `${categoria.nombre} Editada`,
          text: "con exito",
          icon: "success"
        });
        this.router.navigate(['/productos/list'])
      })

      return
    }



    this.serviceProduct.addProducto(this.currentProducto).subscribe(product =>{
      Swal.fire({
        title: `Categoria ${product.nombre} Creada`,
        text: "con exito",
        icon: "success"
      });
      this.router.navigate(['/productos/list'])
    })
  }

  get currentProducto():Productos{

    const producto=this.productoForm.value

    return producto as Productos

  }
  onDelete(id:number){
    if(!this.currentProducto.idProducto)throw Error('error')
      Swal.fire({
        title: `Seguro de borrar ${this.currentProducto.nombre} `,
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si Borrar Ahora"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${this.currentProducto.nombre} Borrado con exito`,
            text: "Producto Borrado",
            icon: "success"
          });
        }
          this.serviceProduct.deleteProduct(id).subscribe(deleted=>{
            this.router.navigate(['/productos/list'])
          })
      });

  }
}
