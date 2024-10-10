import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';
import { ProveedorService } from '../../service/proveedor.service';

@Component({
  selector: 'app-list-proveedor',
  templateUrl: './list-proveedor.component.html',
  styleUrl: './list-proveedor.component.css'
})
export class ListProveedorComponent implements OnInit{
  ngOnInit(): void {
    this.serviceProveedor.getProveedor().subscribe(proveedor=>this.proveedor=proveedor)
  }
  constructor(private serviceProveedor:ProveedorService){

  }
  proveedor:Proveedor[]=[]
  displayedColumns: string[] = ['idProveedor', 'nombre', 'numero','email','accion'];

}
