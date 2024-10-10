package gfc.gesationdeinvetario.services;


import gfc.gesationdeinvetario.entity.Categoria;
import gfc.gesationdeinvetario.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Primary
public class CategoriaService {

    @Autowired
    private CategoriaRepository service;

    @Transactional(readOnly = true)
    public List<Categoria>Listar(){

        return this.service.findAll();
    }
    @Transactional(readOnly = true)
    public Categoria Buscar(Integer id){

        Optional<Categoria> categoria = this.service.findById(id);
        if(categoria.isPresent()){
            return categoria.get();
        }
        return null;
    }
    @Transactional
    public void EliminarCategoria(Integer id){

        this.service.deleteById(id);

    }

        @Transactional
    public void guardar (Categoria categoria){

        this.service.save(categoria);
    }


    public Optional<Categoria> editar(Categoria categoria,Integer id){

        Optional<Categoria>optional=this.service.findById(id);
        if(optional.isPresent()){
            Categoria categoriaAux=optional.get();
            categoriaAux.setNombre(categoria.getNombre());
            categoriaAux.setDescripcion(categoria.getDescripcion());

            this.service.save(categoriaAux);

            return Optional.of(categoriaAux);
        }
        return Optional.empty();
    }

}
