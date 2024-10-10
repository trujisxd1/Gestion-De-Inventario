package gfc.gesationdeinvetario.repository;

import gfc.gesationdeinvetario.entity.Transaccion_inventario;
import org.springframework.data.repository.CrudRepository;

public interface TrasaccionInventarioRepository extends CrudRepository<Transaccion_inventario, Integer> {
}
