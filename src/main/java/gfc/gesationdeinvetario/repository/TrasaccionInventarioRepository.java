package gfc.gesationdeinvetario.repository;

import gfc.gesationdeinvetario.entity.Transaccion_inventario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TrasaccionInventarioRepository extends CrudRepository<Transaccion_inventario, Integer> {

    @Query("select t from Transaccion_inventario t where t.id=:productoId")
    List<Transaccion_inventario>obtenerTransaccionesProducto(@Param("productoId")Integer productoId);

    @Query("select sum (t.cantidad) from Transaccion_inventario t where t.id=:productoId")
    Integer ObtenerCalculo(@Param("productoId")Integer productoId);


}
