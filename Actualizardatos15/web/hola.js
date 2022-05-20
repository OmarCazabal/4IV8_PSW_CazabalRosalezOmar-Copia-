    


function registro() {
    var nom=document.getElementById('nombre').value;
    var apellidop=document.getElementById('appat').value;
    var apellidom=document.getElementById('apmat').value;
    var bol=document.getElementById('boleta').value;
    var telA=document.getElementById('telefono').value;

    var letraspermitidas= /[A-Za-z0-9]+/g;
    var numerospermitidos=/^[0-9]+$/;

    if((nom=='')|| (apellidop=='')||(apellidom=='')||(bol=='')||(telA=='') ){
        alert("Debes de llenar todos los datos");
    } else if((!(nom.match(letraspermitidas)))){
        alert("Introduce solo letras");

    }
    else if((!(apellidop.match(letraspermitidas)))){
        alert("Introduce solo letras");
        
    }
    else if((!(apellidom.match(letraspermitidas)))){
        alert("Introduce solo letras");
        
    }else if((!(bol.match(numerospermitidos)))){
        alert("introduce solo numeros");
        
        
    }else if((!(telA.match(numerospermitidos)))){
        alert("Ingresa solo numeros");
    }
    else{
        document.registrar.submit();
    }
  }
function registro() {
    var nom=document.getElementById('nombre').value;
    var apellidop=document.getElementById('appat').value;
    var apellidom=document.getElementById('apmat').value;
    var bol=document.getElementById('boleta').value;
    var telA=document.getElementById('telefono').value;

    var letraspermitidas= /[A-Za-z]+/g;
    var numerospermitidos=/^[0-9]+$/;

    if((nom=='')|| (apellidop=='')||(apellidom=='')||(bol=='')||(telA=='') ){
        alert("Debes de llenar todos los datos");
    } else if((!(nom.match(letraspermitidas)))){
        alert("Introduce solo letras");

    }
    else if((!(apellidop.match(letraspermitidas)))){
        alert("Introduce solo letras");
        
    }
    else if((!(apellidom.match(letraspermitidas)))){
        alert("Introduce solo letras");
        
    }else if((!(bol.match(numerospermitidos)))){
        alert("introduce solo numeros");
        
        
    }else if((!(telA.match(numerospermitidos)))){
        alert("Ingresa solo numeros");
    }
    else if(!(bol.length=10)){
        alert("La boleta solo tiene 10 numeros")
        
    }
    else if(!(telA.length=10)){
        alert("Los telefonos solo cuentan con 10 numeros")
    }
  
    else{
        document.registrar.submit();
    }
   }
  function actualizar(){
       var select= document.getElementBYId('menu');
       var name=document.getElementBYId('nombre');
       var bol=document.getElementBYId('boleta');
       
       var selec=parseInt(select);
       
        var letraspermitidas= /[A-Za-z]+/g;
    var numerospermitidos=/^[0-9]+$/;
    
    if(bol==''||name=='' ){
        alert("Debes de llenar todos los datos");
    }  else if(selec=1){
        if(!(name.match(letraspermitidas))){
            alert("Solo introduzca letras");
        }
    }else if(selec=2){
        if(!(name.match(letraspermitidas))){
            alert("Solo introduzca letras");
        }
        
    }else if(selec=3){
        if(!(name.match(letraspermitidas))){
            alert("Solo introduzca letras");
        }
        
    }else if(!(bol.match(numerospermitidos))){
        alert("Solo introduce numeros")
        
    }
    else if(!(bol.length=10)){
        alert("Las boletas son de 10 numeros")
    }
    else{
        document.actualizardatos.submit();
    }
   
}
 