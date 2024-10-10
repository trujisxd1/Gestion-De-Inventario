package gfc.gesationdeinvetario.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
public class Productos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProducto;
    @NotNull
    @NotBlank
    private String nombre;
    @NotNull
    @NotBlank
    private String descripcion;
    @Positive(message = "La cantidad debe ser positiva")
    private int cantidad;
    @Positive(message = "El precio debe ser Positivo")
    private int precio;
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    @NotNull
    @JsonIgnoreProperties("productos")
    private  Categoria categoria;
    @ManyToOne
    @JoinColumn(name = "proveedor_id")
    @JsonIgnoreProperties("proveedorProductos")
    private  Proveedor proveedor;

}
