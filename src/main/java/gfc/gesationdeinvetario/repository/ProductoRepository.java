package gfc.gesationdeinvetario.repository;

import gfc.gesationdeinvetario.entity.Productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Productos,Integer> {

    @Query("select p.nombre,c.nombre from Productos p join p.categoria c")
    List<Object[]>ObtenerProductosConCategoria();
}
