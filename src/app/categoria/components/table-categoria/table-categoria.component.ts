import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria.interfaces';
import { CategoriaServiceService } from '../../service/categoria-service.service';

@Component({
  selector: 'table-categoria',
  templateUrl: './table-categoria.component.html',

})
export class TableCategoriaComponent {


@Input() categorias: Categoria[] = [];

@Input()displayedColumns: string[]=[]



}
