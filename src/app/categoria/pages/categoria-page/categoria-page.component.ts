import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria.interfaces';
import { CategoriaServiceService } from '../../service/categoria-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrl: './categoria-page.component.css'
})
export class CategoriaPageComponent implements OnInit{


  categoria?:Categoria

  constructor(private serviceCategoria:CategoriaServiceService,
    private activatedRouter:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {

    this.activatedRouter.params.pipe(
      switchMap(({id})=>this.serviceCategoria.getCategoriaById(id))
    ).subscribe(
      categoria=>{
        if(!categoria)return this.router.navigate(['/categorias/list'])
          this.categoria=categoria
        console.log(categoria)
        return
      }
    )
  }

}
