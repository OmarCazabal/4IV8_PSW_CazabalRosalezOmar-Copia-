function sueldo(e){
    var datos = (document.all)?e.KeyCode : e.which

    if(datos==8) return true;
    var rango=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return rango.test(probar);

}
function comision(){

    var valor=document.ejercicio2.suelbase.value;
      
    
    var resultado=parseInt(valor);
    var ventas=resultado*0.30;
    var sueldot=resultado+ventas;


    
    document.ejercicio2.total.value="Tu sueldo total es de " + sueldot;
}