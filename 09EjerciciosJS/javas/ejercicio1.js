    function validarc(e){
        var datos = (document.all)?e.KeyCode : e.which
    
        if(datos==8) return true;
        var rango=/[0-9\d .]/
    
        var probar = String.fromCharCode(datos);
        return rango.test(probar);
    
    }
    function interes(){
        var valor = document.ejercicio1.cantidad.value;

        var resultado = parseFloat(valor);
        var interes = resultado*0.020;
        var total = resultado + interes;
    
        document.ejercicio1.sueldoT.value = "$" + total
    }
    
    function borrardatos(){
        document.ejercicio1.sueldoT.value = "";
        document.ejercicio1.cantidad.value = "";
    }