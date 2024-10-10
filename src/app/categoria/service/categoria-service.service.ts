import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Categoria } from '../interfaces/categoria.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  private url:string='http://localhost:8080/api/v1'
  constructor(private http:HttpClient) { }

  getCategoria():Observable<Categoria[]>{

    return this.http.get<Categoria[]>(`${this.url}/categorias`)
  }

  getCategoriaById(id:number){


    return this.http.get<Categoria>(`${this.url}/categorias/${id}`).pipe(
      catchError(error=>of(undefined))
    )

  }

  addCategoria(categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(`${this.url}/categorias`,categoria)
  }

  UpdateCategoria(categoria:Categoria):Observable<Categoria>{


    return this.http.put<Categoria>(`${this.url}/categorias/${categoria.idCategoria}`,categoria)
  }

  deleteCategorias(id:number):Observable<void>{

    return this.http.delete<void>(`${this.url}/categorias/${id}`)
  }

}
