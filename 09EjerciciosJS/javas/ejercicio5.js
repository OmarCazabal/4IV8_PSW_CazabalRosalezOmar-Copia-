function total(e){
    var datos = (document.all)?e.keycode : e.which
    if (datos==8) return true;  
    var caracteres=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return caracteres.test(probar);
}
function hombres(e){
    var dato = (document.all)?e.keycode : e.which
    if (dato==8) return true;  
    var caracteres=/[0-9\d .]/

    var prb = String.fromCharCode(dato);
    return caracteres.test(prb);
}
function PorcentajeHombres(){
    var tital=document.ejercicio5.ttal.value;
    var ophombre=document.ejercicio5.cantidadDeHombres.value;
    
    var resultado=parseInt(tital);
    var resulhom=parseInt(ophombre);
    
    var porcentajeh=resulhom*100;
    var totalal=porcentajeh/resultado;
    
    
    document.ejercicio5.porcentajedehombre.value= "El total de hombres es " + totalal + "%";
}
function mujeres(e){
    var dato = (document.all)?e.keycode : e.which
    if (dato==8) return true;  
    var caracteres=/[0-9\d .]/

    var prb = String.fromCharCode(dato);
    return caracteres.test(prb);

}
function PorcentajeMujeres(){
    var tital=document.ejercicio5.ttal.value;
    var opmujer=document.ejercicio5.cantidadDeMujeres.value;
    
    var resultado=parseInt(tital);
    var resulmu=parseInt(opmujer);
    
    var porcentajem=resulmu*100;
    var totalal=porcentajem/resultado;
    
    document.ejercicio5.porcentajedemujeres.value= "El total de mujeres es " + totalal + "%";
}
