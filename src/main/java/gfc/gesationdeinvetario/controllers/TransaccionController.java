package gfc.gesationdeinvetario.controllers;


import gfc.gesationdeinvetario.entity.Transaccion_inventario;
import gfc.gesationdeinvetario.services.TrasaccionService;
import gfc.gesationdeinvetario.services.ValidacionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class TransaccionController {

    @Autowired
    private TrasaccionService trasaccionService;
    @Autowired
    private ValidacionService validacionService;

    @GetMapping("/transaccion")
    public ResponseEntity<?>listarTransacciones(){
        return  ResponseEntity.status(HttpStatus.OK).body(this.trasaccionService.listar());
    }

    @PostMapping("/transacciones")
    public ResponseEntity<?> registrarTransaccion(@Valid @RequestBody Transaccion_inventario transaccion, BindingResult result) {

        if (result.hasErrors()) {

            return this.validacionService.validation(result);
        }

        this.trasaccionService.registrarTransaccion(transaccion);
        return ResponseEntity.status(HttpStatus.CREATED).body(new HashMap() {{
            put("mensaje", "Transacción registrada con éxito");
        }});
    }
}
