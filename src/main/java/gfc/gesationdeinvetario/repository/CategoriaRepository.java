package gfc.gesationdeinvetario.repository;

import gfc.gesationdeinvetario.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
}
