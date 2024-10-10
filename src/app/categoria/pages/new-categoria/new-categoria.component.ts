import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriaServiceService } from '../../service/categoria-service.service';
import { Categoria } from '../../interfaces/categoria.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-categoria',
  templateUrl: './new-categoria.component.html',
  styleUrl: './new-categoria.component.css'
})
export class NewCategoriaComponent implements OnInit{
  ngOnInit(): void {

    if(!this.router.url.includes('edit')){
      return
    }

    this.acticvateRouter.params.pipe(
      switchMap(({id})=>this.serviceCategoria.getCategoriaById(id))
    ).subscribe(categoria=>{
      if(!categoria){
        return this.router.navigate(['/categorias'])
      }
      this.categoriaForm.reset(categoria)
      return
    })

    this.categoriaForm.reset()
  }

  constructor(private serviceCategoria:CategoriaServiceService,
    private router:Router,private acticvateRouter:ActivatedRoute){

  }

  public categoriaForm= new FormGroup({
    idCategoria:new FormControl<number>(0),
    nombre:new FormControl<string>('',{nonNullable:true}),
    descripcion:new FormControl<string>('')
  })


  get currentCategoria():Categoria{

    const categoria=this.categoriaForm.value

    return categoria as Categoria
  }

  onSummit():void{
    if(this.categoriaForm.invalid)return



    if(this.currentCategoria.idCategoria){
      this.serviceCategoria.UpdateCategoria(this.currentCategoria).subscribe(categoria=>{
        Swal.fire({
          title: `${categoria.nombre} Editada`,
          text: "con exito",
          icon: "success"
        });
        this.router.navigate(['/categorias/list'])
      })

      return
    }




    this.serviceCategoria.addCategoria(this.currentCategoria).subscribe(categoria=>{
      Swal.fire({
        title: `Categoria ${categoria.nombre} Creada`,
        text: "con exito",
        icon: "success"
      });
      this.router.navigate(['/categorias/list'])
    })

  }

  onDelete(id:number){
    if(!this.currentCategoria.idCategoria)throw Error('error')
      Swal.fire({
        title: `Seguro de borrar ${this.currentCategoria.nombre} `,
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si Borrar Ahora"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${this.currentCategoria.nombre} Borrado con exito`,
            text: "Producto Borrado",
            icon: "success"
          });
        }
          this.serviceCategoria.deleteCategorias(id).subscribe(deleted=>{
            this.router.navigate(['/categorias/list'])
          })
      });
  }
}
