package gfc.gesationdeinvetario.entity;


import gfc.gesationdeinvetario.enums.TipoTrasaccion;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaccion_inventario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "producto_id")
    @NotNull

    private  Productos producto;
    @Positive
    @NotNull
    private  Integer cantidad;
    @NotNull

    @Enumerated(EnumType.STRING)
    private TipoTrasaccion tipoTransaccion;;


    private LocalDateTime fechaTransaccion;
}
