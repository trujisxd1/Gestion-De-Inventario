import { Component, Input } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor.interface';

@Component({
  selector: 'table-proveedor',
  templateUrl: './table-proveedor.component.html',

})
export class TableProveedorComponent {

  @Input() proveedor: Proveedor[] = [];

@Input()displayedColumns: string[]=[]
}
