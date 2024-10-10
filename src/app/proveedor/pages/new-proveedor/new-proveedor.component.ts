import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { Productos } from '../../../productos/interfaces/producto.interface';
import { ProductosService } from '../../../productos/services/productos.service';
import { ProveedorService } from '../../service/proveedor.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-proveedor',
  templateUrl: './new-proveedor.component.html',
  styleUrl: './new-proveedor.component.css'
})
export class NewProveedorComponent implements OnInit{
  ngOnInit(): void {

  }

  constructor(private proveedorService:ProveedorService,private router:Router){

  }
 public formProveedor= new FormGroup({
  idProveedor:new FormControl<number>(0),
  nombre:new FormControl<string>('',{nonNullable:true}),
  numeroDeContacto:new FormControl<string>(''),
  email:new FormControl<string>(''),

 })




 onSumit():void{

  if(this.formProveedor.invalid)return

  this.proveedorService.addProveedor(this.currentProveedor).subscribe(prod=>{
    Swal.fire({
      title: `proovedor Creada`,
      text: "con exito",
      icon: "success"
    });
    this.router.navigate(['/proveedor/list'])
  })
 }

 get currentProveedor():Proveedor{
  const prove= this.formProveedor.value

  return prove as Proveedor
 }
 onDelete(id:number){

 }
}
