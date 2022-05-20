function total(e){
    var datos = (document.all)?e.keycode : e.which
    if (datos==8) return true;  
    var caracteres=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return caracteres.test(probar);
}
function calcula(){
    var val=document.ejercicio3.totalDeCompra.value;

    var resultado= parseInt(val);
    var descuento= resultado*0.15;
    var total= resultado-descuento;

    document.ejercicio3.cantidadConDescuento.value="$" + total

}
function borrardatos(){
    document.ejercicio3.totalDeCompra.value="";
    document.ejercicio3.cantidadConDescuento.value="";  

}