package gfc.gesationdeinvetario.services;


import gfc.gesationdeinvetario.entity.Productos;
import gfc.gesationdeinvetario.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Primary
public class ProductosService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Productos>listar(){

        return  this.productoRepository.findAll();
    }

    public Productos guardar(Productos producto){


            return this.productoRepository.save(producto);

        }

        public Productos buscar(Integer id){

        Optional<Productos> producto = this.productoRepository.findById(id);

        if (producto.isPresent()) {
            return producto.get();
        }
        return null;
        }
        public void eliminar(Integer id){
        this.productoRepository.deleteById(id);
        }

        public Optional<Productos>editar(Productos productos,Integer id){

        Optional<Productos>optional=this.productoRepository.findById(id);

        if(optional.isPresent()){
            Productos productoAux=optional.get();

            productoAux.setNombre(productos.getNombre());
            productoAux.setDescripcion(productos.getDescripcion());
            productoAux.setCantidad(productos.getCantidad());
            productoAux.setPrecio(productos.getPrecio());
            productoAux.setCategoria(productos.getCategoria());
            productoAux.setProveedor(productos.getProveedor());

            this.productoRepository.save(productoAux);

            return  Optional.of(productoAux);
        }
        return Optional.empty();
        }
    }

