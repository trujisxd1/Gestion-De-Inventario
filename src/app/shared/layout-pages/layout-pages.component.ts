import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-layout-pages',
  templateUrl: './layout-pages.component.html',
  styleUrl: './layout-pages.component.css'
})
export class LayoutPagesComponent {

  siderbarCategorias=[


    {label:'Listado',icon:'category',url:'/categorias/list'},
    {label:'agregar',icon:'domain_add',url:'/categorias/new-categoria'},


  ]
  siderbarProductos=[
    {label:'Listado',icon:'inventory',url:'/productos/list'},
    {label:'agregar',icon:'storefront',url:'/productos/new-product'},
  ]
  siderbarProveedor=[
    {label:'Listado',icon:'group',url:'/proveedor/list'},
    {label:'agregar',icon:'contact_mail',url:'/proveedor/new-proveedor'},
  ]
  siderbarTransaccion=[
    {label:'Listado',icon:'local_shipping',url:'/transaccion/list'},
    {label:'agregar',icon:'assignment_add',url:'/transaccion/new-trasanccion'},
  ]
  constructor(private router:Router){

  }



}
