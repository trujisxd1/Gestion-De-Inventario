import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }

 url:string='http://localhost:8080/api/v1'

 getProveedor():Observable<Proveedor[]>{
  return this.http.get<Proveedor[]>(`${this.url}/proveedor`)
 }

 addProveedor(proveedor:Proveedor):Observable<Proveedor>{

  return this.http.post<Proveedor>(`${this.url}/proveedor`,proveedor)
 }
}
