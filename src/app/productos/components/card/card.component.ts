import { Component, Input, OnInit } from '@angular/core';

import { Productos } from '../../interfaces/producto.interface';

@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  ngOnInit(): void {
   if(!this.producto)throw Error("producto")
  }

  @Input()producto!:Productos
}
