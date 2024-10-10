package gfc.gesationdeinvetario.controllers;


import gfc.gesationdeinvetario.entity.Proveedor;
import gfc.gesationdeinvetario.services.ProveedorService;
import gfc.gesationdeinvetario.services.ValidacionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class ProveedorController {
    @Autowired
    private ProveedorService proveedorService;
    @Autowired
    private ValidacionService validacionService;


    @GetMapping("/proveedor")
   public ResponseEntity<?> listarProveedores() {

        return ResponseEntity.status(HttpStatus.OK).body(this.proveedorService.listar());
    }

    @GetMapping("/proveedor/{id}")
    public ResponseEntity<?> listarProveedor(@PathVariable Integer id) {
        return ResponseEntity.status(HttpStatus.OK).body(this.proveedorService.buscar(id));
    }

    @DeleteMapping("/proveedor/{id}")
    public ResponseEntity<?> eliminarProveedor(@PathVariable Integer id) {
        this.proveedorService.eliminar(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
    @PostMapping("/proveedor")
    public ResponseEntity<?> guardar(@Valid @RequestBody Proveedor proveedor, BindingResult result) {

        if(result.hasErrors()) {
            return this.validacionService.validation(result);
        }

        this.proveedorService.guardar(proveedor);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
