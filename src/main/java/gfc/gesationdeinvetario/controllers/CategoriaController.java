package gfc.gesationdeinvetario.controllers;


import gfc.gesationdeinvetario.entity.Categoria;
import gfc.gesationdeinvetario.services.CategoriaService;
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
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;
    @Autowired
    private ValidacionService validacionService;;

    @GetMapping("/categorias")

    public ResponseEntity<?> getAllCategorias(){

        return  ResponseEntity.status(HttpStatus.OK).body(this.categoriaService.Listar());
    }

    @GetMapping("/categorias/{id}")
    public ResponseEntity<?> getCategoria(@PathVariable Integer id){
        return  ResponseEntity.status(HttpStatus.OK).body(this.categoriaService.Buscar(id));
    }


    @PostMapping("/categorias")

    public  ResponseEntity<?>crear(@Valid @RequestBody Categoria categoria, BindingResult result){

        if(result.hasErrors()){
            return this.validacionService.validation(result);
        }

            this.categoriaService.guardar(categoria);

            return  ResponseEntity.status(HttpStatus.CREATED).body(categoria);
    }

    @PutMapping("/categorias/{id}")
    public ResponseEntity<?> actualizar(@Valid @RequestBody Categoria categoria,@PathVariable Integer id, BindingResult result) {

        // Primero verifica si hay errores de validación
        if (result.hasErrors()) {
             validacionService.validation(result);
           
        }

        // Llama al servicio para actualizar la categoría
        Optional<Categoria> categoriaActualizada = this.categoriaService.editar(categoria, id);

        // Si la categoría fue actualizada, retorna la respuesta con el contenido
        if (categoriaActualizada.isPresent()) {
            return ResponseEntity.ok(categoriaActualizada.get()); // Retorna la categoría actualizada
        }

        // Si no se encontró la categoría, retorna 404
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Categoría no encontrada");
    }


    @DeleteMapping("/categorias/{id}")

    public  ResponseEntity<?>eliminar(@PathVariable Integer id){
        Optional<Categoria> categoria = Optional.ofNullable(this.categoriaService.Buscar(id));

        if(categoria.isPresent()){
            this.categoriaService.EliminarCategoria(id);
            return ResponseEntity.status(HttpStatus.OK).body(new HashMap<>(){
                {
                    put("Mensaje","Eliminado con EXito");
                }
            });
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new HashMap<>(){
                {
                    put("Mensaje","Categoria no encontrada");
                }
            });
        }



            }
}
