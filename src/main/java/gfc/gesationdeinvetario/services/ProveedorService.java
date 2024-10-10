package gfc.gesationdeinvetario.services;


import gfc.gesationdeinvetario.entity.Proveedor;
import gfc.gesationdeinvetario.repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Primary
public class ProveedorService {

    @Autowired
    private ProveedorRepository service;

    @Transactional(readOnly = true)
    public List<Proveedor>listar(){
        return (List<Proveedor>) this.service.findAll();
    }

    public Proveedor buscar(Integer id){
        Optional<Proveedor> proveedor = this.service.findById(id);

        if (proveedor.isPresent()) {
            return proveedor.get();
        }
        return null;

    }

    public void guardar(Proveedor proveedor){
        this.service.save(proveedor);
    }

    public void eliminar(Integer id){
        this.service.deleteById(id);
    }
}
