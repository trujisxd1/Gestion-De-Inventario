package gfc.gesationdeinvetario.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Proveedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProveedor;
    @NotEmpty
    @NotNull
    @NotBlank
    private String nombre;
    @NotEmpty
    @NotBlank
    private String numeroDeContacto;
    @NotEmpty
    @NotBlank
    private String email;

    @OneToMany(mappedBy = "proveedor")
    @JsonIgnoreProperties("proveedor")
    private List<Productos>proveedorProductos;
}
