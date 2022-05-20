function validar(e){
    var datos = (document.all)?e.keycode : e.which
    if (datos==8) return true;  
    var caracteres=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return caracteres.test(probar);
}
function calcular(){
    var añoNa=document.ejercicio6.añoNac.value;
    var diaNa=document.ejercicio6.diaNac.value;
    var mesNa=document.ejercicio6.mesNac.value;
    var añAc=document.ejercicio6.añoAct.value;
    var diaAc=document.ejercicio6.diaAct.value;
    var mesAc=document.ejercicio6.mesAct.value;



    var añonaci=parseFloat(añoNa);
    var dia=parseFloat(diaNa);
    var mes=parseFloat(mesNa);
    var añoActual=parseFloat(añAc);
    var diAc=parseFloat(diaAc);
    var mesactual=parseFloat(mesAc);

    var edadmayor = añoActual - añonaci;
    var edadmenor = edadmayor - 1;
    
     if(mes>12 || mesactual > 12){
        alert("Ingresa solo numeros entre 1 y 12");
     }
     if (dia>31  || diaAc>31 ){
         alert("ingresa un numero entre 1 y 31")

     }
     if(mesactual<mes){
         alert("Operación no válida")
     }
    if(mes<mesactual)
    document.ejercicio6.edad.value=edadmayor +  "años";
    else if ( mes>mesactual)
    document.ejercicio6.edad.value=edadmenor + " años";
    else if(dia<diAc)
    document.ejercicio6.edad.value=edadmayor + " años";
    else if (dia>diAc)
    document.ejercicio6.edad.value=edadmenor + " años";
    else
    alert ("Ingresaste un dato no válido")
}
function borrar(){
    document.ejercicio6.añoNac.value="";
    document.ejercicio6.diaNac.value="";
    document.ejercicio6.mesNac.value="";
    document.ejercicio6.añoAct.value="";
    document.ejercicio6.diaAct.value="";    
    document.ejercicio6.mesAct.value="";
    document.ejercicio6.edad.value="";
    
}