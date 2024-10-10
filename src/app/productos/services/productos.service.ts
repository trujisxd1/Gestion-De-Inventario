import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Productos } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  private url:string='http://localhost:8080/api/v1'

  getProductos():Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.url}/productos`)
  }
  getProductoById(id:number){


    return this.http.get<Productos>(`${this.url}/productos/${id}`).pipe(
      catchError(error=>of(undefined))
    )

  }

  addProducto(producto:Productos):Observable<Productos>{
    return this.http.post<Productos>(`${this.url}/productos`,producto)
  }

  UpdateProduct(producto:Productos):Observable<Productos>{

    return this.http.put<Productos>(`${this.url}/productos/${producto.idProducto}`,producto)
  }

  deleteProduct(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/productos/${id}`)
  }
}
