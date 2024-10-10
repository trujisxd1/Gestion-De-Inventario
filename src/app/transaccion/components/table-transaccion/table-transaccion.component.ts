import { Component, Input } from '@angular/core';
import { Transaccion } from '../../interface/transaccion.interfaces';

@Component({
  selector: 'table-transaccion',
  templateUrl: './table-transaccion.component.html',
  styleUrl: './table-transaccion.component.css'
})
export class TableTransaccionComponent {
  @Input() transaccion: Transaccion[] = [];

  @Input()displayedColumns: string[]=[]
}
