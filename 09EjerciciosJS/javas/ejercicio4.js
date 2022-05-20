function calificacion_final(e){
    var datos = (document.all)?e.keycode : e.which
    if (datos==8) return true;  
    var caracteres=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return caracteres.test(probar);
}
function promedio_parcial(){
    var par1=document.ejercicio4.parcial1.value;
    var par2=document.ejercicio4.parcial2.value;
    var par3=document.ejercicio4.parcial3.value;

    var num1=parseFloat(par1);
    var num2=parseFloat(par2);
    var num3=parseFloat(par3);

    var suma= num1+num2+num3;
    var resultado= suma/3;
    if(num1>10)
    alert("Ingresa solo un numero del 1-10")
    else if(num2>10)
    alert("Ingresa solo un numero del 1-10")
    else if(num3>10)
    alert("Ingresa solo un numero del 1-10")
    else
    alert("Ingresaste un dato no valido")

    

    document.ejercicio4.calificacionTP.value="El promedio de tus parciales es de:" + resultado;
}
function borrardatos(){
document.ejercicio4.parcial1.value=""
document.ejercicio4.parcial2.value=""
document.ejercicio4.parcial3.value=""
document.ejercicio4.calificacionTP.value=""


}
function calcular_datos(){
    var par1=document.ejercicio4.parcial1.value;
    var par2=document.ejercicio4.parcial2.value;
    var par3=document.ejercicio4.parcial3.value;

    var num1=parseFloat(par1);
    var num2=parseFloat(par2);
    var num3=parseFloat(par3);

    var suma= num1+num2+num3;
    var resul= suma/3;
    
    var caltrab=document.ejercicio4.caltra.value;
    var calexam=document.ejercicio4.calexa.value;

    var num1=parseFloat(caltrab);
    var num2=parseFloat(calexam);

    var porcentaje_promedio=resul*0.55;
    var porcentaje_trabajo=caltrab*0.15;
    var porcentaje_examen=calexam*0.30;
    if(caltrab>10)
    alert("Ingresa un numero del 1-10")
    else if(calexam>10)
    alert("Ingresa un numero del 1-10")
    else
    alert("Dato no valido")


    var promedioF=porcentaje_promedio+porcentaje_trabajo+porcentaje_examen;

    document.ejercicio4.calificacionT.value=promedioF

}