import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../../interface/transaccion.interfaces';
import { TransaccionService } from '../../service/transaccion.service';

@Component({
  selector: 'app-list-trasaccion',
  templateUrl: './list-trasaccion.component.html',
  styleUrl: './list-trasaccion.component.css'
})
export class ListTrasaccionComponent  implements OnInit{

  transaccion:Transaccion[]=[]
  displayedColumns: string[] = ['idTransaccion', 'producto', 'cantidad','tipoTransaccion','fechaTransaccion','accion'];

  constructor(private serviceTransaccion:TransaccionService){

  }
  ngOnInit(): void {

    this.serviceTransaccion.getTransacciones().subscribe(transaccion=> this.transaccion=transaccion)

    console.log(this.transaccion)
  }
}
