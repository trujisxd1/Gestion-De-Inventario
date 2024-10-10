import { Component, OnInit } from '@angular/core';
import { CategoriaServiceService } from '../../service/categoria-service.service';
import { Categoria } from '../../interfaces/categoria.interfaces';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',

})
export class ListPageComponent implements OnInit {


  categoria:Categoria[]=[]

  displayedColumns: string[] = ['idCategoria', 'nombre', 'descripcion','accion'];

  constructor(private service:CategoriaServiceService){

  }
   ngOnInit(): void {

    this.service.getCategoria().subscribe(categoria =>this.categoria = categoria);

    console.log(this.categoria)
   }


}
