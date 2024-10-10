package gfc.gesationdeinvetario.repository;

import gfc.gesationdeinvetario.entity.Productos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Productos,Integer> {
}
