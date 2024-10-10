import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EntradaSalida, Transaccion } from '../../interface/transaccion.interfaces';
import { ProductosService } from '../../../productos/services/productos.service';
import { Productos } from '../../../productos/interfaces/producto.interface';
import { TransaccionService } from '../../service/transaccion.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-trasaccion',
  templateUrl: './new-trasaccion.component.html',
  styleUrl: './new-trasaccion.component.css'
})
export class NewTrasaccionComponent implements OnInit{
  ngOnInit(): void {
    this.serviceProduct.getProductos().subscribe(
      productos=>this.productos=productos
    )
  }

    constructor(private serviceProduct:ProductosService,private serviceTransaccion:TransaccionService,private router:Router){


    }

    productos:Productos[]=[]


    entradaSalida=[
      {id:'ENTRADA',value:'ENTRADA'},
      {id:'SALIDA',value:'SALIDA'}
    ]
   public transaccionForm=new FormGroup({
    id:new FormControl<number>(0),

    cantidad:new FormControl<number>(0),
    tipoTransaccion:new FormControl<EntradaSalida>(EntradaSalida.ENTRADA),
     // Subgrupo para los datos de la categoría
     producto: new FormGroup({
      idProducto: new FormControl<number>(0),
    })
   })

   get currentTrasanccion():Transaccion{
    const transaccion =this.transaccionForm.value

    return transaccion as Transaccion
   }

   onSumit():void{
    console.log(this.currentTrasanccion)
    if(this.transaccionForm.invalid)return


    this.serviceTransaccion.addTransaccion(this.currentTrasanccion).subscribe(
      transaccion=>{
        Swal.fire({
          title: ` ${transaccion.tipoTransaccion} Creada`,
          text: "con exito",
          icon: "success"
        });
        this.router.navigate(['/transaccion/list'])
      }
    )
   }

   onDelete(id:number){

   }
}
