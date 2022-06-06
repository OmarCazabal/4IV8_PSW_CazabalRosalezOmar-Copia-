/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

/**
 *
 * @author Rogelio Colunga R
 */
public class MArticulo {
    
    private int id_articulo;
    private float costo_marticulo, precio_venta, ganacia, articulo;
    private String nombre_articulo;
    
    public MArticulo(){
        
    }

    public int getId_articulo() {
        return id_articulo;
    }

    public void setId_articulo(int id_articulo) {
        this.id_articulo = id_articulo;
    }

    public float getCosto_marticulo() {
        return costo_marticulo;
    }

    public void setCosto_marticulo(float costo_marticulo) {
        this.costo_marticulo = costo_marticulo;
    }

    public float getPrecio_venta() {
        return precio_venta;
    }

    public void setPrecio_venta(float precio_venta) {
        this.precio_venta = precio_venta;
    }

    public float getGanacia() {
        return ganacia;
    }

    public void setGanacia(float ganacia) {
        this.ganacia = ganacia;
    }

    public float getArticulo() {
        return articulo;
    }

    public void setArticulo(float articulo) {
        this.articulo = articulo;
    }

    public String getNombre_articulo() {
        return nombre_articulo;
    }

    public void setNombre_articulo(String nombre_articulo) {
        this.nombre_articulo = nombre_articulo;
    }
    
}
