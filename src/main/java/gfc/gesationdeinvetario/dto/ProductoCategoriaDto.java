package gfc.gesationdeinvetario.dto;

public class ProductoCategoriaDto {


    private String producto;
    private String categoria;

    public ProductoCategoriaDto(String producto, String categoria) {
        this.producto = producto;
        this.categoria = categoria;
    }

    public ProductoCategoriaDto() {
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
