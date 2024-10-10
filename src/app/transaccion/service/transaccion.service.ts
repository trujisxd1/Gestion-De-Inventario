import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../interface/transaccion.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private http:HttpClient) { }
   private url:string='http://localhost:8080/api/v1'

   getTransacciones():Observable<Transaccion[]>{

    return this.http.get<Transaccion[]>(`${this.url}/transaccion`)
   }

   addTransaccion(transaccion:Transaccion):Observable<Transaccion>{

    return this.http.post<Transaccion>(`${this.url}/transacciones`,transaccion)
   }
}
