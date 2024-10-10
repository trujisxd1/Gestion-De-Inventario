package gfc.gesationdeinvetario.controllers;


import gfc.gesationdeinvetario.entity.Productos;
import gfc.gesationdeinvetario.services.ProductosService;
import gfc.gesationdeinvetario.services.ValidacionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class ProductoController {
    @Autowired
    private ProductosService service;
    @Autowired
    private ValidacionService validacionService;

    @GetMapping("/productos")
    public ResponseEntity<?>listar(){

        return ResponseEntity.status(HttpStatus.OK).body(this.service.listar());
    }
    @GetMapping("/productos/{id}")
    public ResponseEntity<?>listar(@PathVariable Integer id){
        return ResponseEntity.status(HttpStatus.OK).body(this.service.buscar(id));
    }
    @PostMapping("/productos")

    public ResponseEntity<?> guardar(@Valid @RequestBody Productos producto,BindingResult result){

        if(result.hasErrors()){
           return this.validacionService.validation(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(this.service.guardar(producto));
    }

    @DeleteMapping("/productos/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id){

        this.service.eliminar(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }

    @PutMapping("/productos/{id}")
    public ResponseEntity<?> editar(@PathVariable Integer id,@Valid @RequestBody Productos productos,BindingResult result){
        if (result.hasErrors()){
            return this.validacionService.validation(result);
        }

        Optional<Productos>optionalProductos=this.service.editar(productos,id);

        if(optionalProductos.isPresent()){
            return  ResponseEntity.ok(optionalProductos.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No encontrado");
    }


}
