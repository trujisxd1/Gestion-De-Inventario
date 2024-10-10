export interface Proveedor {
  idProveedor:        number;
  nombre:             string;
  numeroDeContacto:   string;
  email:              string;
  proveedorProductos: ProveedorProducto[];
}

export interface ProveedorProducto {
  idProducto:  number;
  nombre:      string;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  categoria:   Categoria;
}

export interface Categoria {
  idCategoria: number;
  nombre:      string;
  descripcion: string;
}
