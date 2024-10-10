package gfc.gesationdeinvetario.services;


import gfc.gesationdeinvetario.entity.Productos;
import gfc.gesationdeinvetario.entity.Transaccion_inventario;
import gfc.gesationdeinvetario.repository.ProductoRepository;
import gfc.gesationdeinvetario.repository.TrasaccionInventarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Primary
public class TrasaccionService {

    @Autowired
    private TrasaccionInventarioRepository service;
    @Autowired
    private ProductosService productoRepository;

    @Transactional(readOnly = true)
    public List<Transaccion_inventario> listar() {
        return (List<Transaccion_inventario>) this.service.findAll();
    }

    @Transactional
    public void registrarTransaccion(Transaccion_inventario transaccion) {
        // Buscar el producto por ID antes de asociarlo a la transacción
        Optional<Productos> productoOpt = Optional.ofNullable(productoRepository.buscar(transaccion.getProducto().getIdProducto()));

        if (productoOpt.isPresent()) {
            // Asignar el producto encontrado a la transacción
            transaccion.setFechaTransaccion(LocalDateTime.now());
            transaccion.setProducto(productoOpt.get());

            service.save(transaccion);
        } else {
            throw new RuntimeException("El producto no existe");
        }
    }
}