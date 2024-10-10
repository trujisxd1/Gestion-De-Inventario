export interface Productos {
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
