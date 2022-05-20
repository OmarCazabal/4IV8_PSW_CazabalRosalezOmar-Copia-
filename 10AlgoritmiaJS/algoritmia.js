  //Problema 1 
    
  function problema1(){
    
    var entrada=document.querySelector('#p1-input').value;

    var array=entrada.split(" ").reverse();

    var respuesta=""

    array.forEach(function(palabra,i){

        if(i !=0 || i !=array.length)respuesta+=' ';
        respuesta+=palabra;
    });

    document.querySelector('#p1-output').textContent=respuesta;
    

    //Profe no manche quiero llorar mucho :((
        //Profe ya llore más :(

}
 //Problema 2

 function problema2(){
     p2_x1=document.querySelector("#p2-x1").value;
     p2_x2=document.querySelector("#p2-x2").value;
     p2_x3=document.querySelector("#p2-x3").value;
     p2_x4=document.querySelector("#p2-x4").value;
     p2_x5=document.querySelector("#p2-x5").value;

     p2_y1=document.querySelector("#p2-y1").value;
     p2_y2=document.querySelector("#p2-y2").value;
     p2_y3=document.querySelector("#p2-y3").value;
     p2_y4=document.querySelector("#p2-y4").value;
     p2_y5=document.querySelector("#p2-y5").value;


     var v1=[p2_x1,p2_x2,p2_x3,p2_x4,p2_x5];
     var v2=[p2_y1,p2_y2,p2_y3,p2_y4,p2_y5];

     v1=v1.sort(function (a,b){
         return b-a;

     })
     v2=v2.sort(function (a,b){
        return b-a;
        
    })

    v2=v2.reverse();

    var p2_producto=0;
    for(var i=0;i< v1.length;i++){
        p2_producto += v1[i]*v2[i];
    }


    document.querySelector('#p2-output').textContent="Producto escalar minimo: " + p2_producto;

 }
 
 //Problema 3
 function problema3(){
     //defenir un alfabeto
     var alfabeto =['A', 'B','C','D','E','F','G','H','I','J','K','L','M', 'N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']

     //vamos a obtener la entrada de datos
     var p3_input=document.querySelector('#p3-input').value;
     var p3_palabras=p3_input.split(',');

     //tengo que eliminar los espacios

      p3_palabras = p3_palabras.map(function(palabra){
          //Crear una expresión que me recurpere las palabras
          return palabra.replace(/\s/g,'').toUpperCase();
      })
      //Tengo que calcular cuantos carácteres únicos hay
      var p3_res='';
      p3_palabras.forEach(function (palabra,i){
          //Separar las palabras actuales del aray que contiene cada letra de dicha palabra
          var letras_unicas=[];
          var palabra_array=palabra.split('')

          //Iteración
          alfabeto.forEach(function (letra,j){
            //itero palabra
            palabra_array.forEach(function (letras_palabras,k){

                //Comprobar que la letra este dentro del alafabeto 
            if(letras_palabras==letra){
            //si la letra no le hemos contado
            //La agregamos a un array para contar 
            //Las letras únicas
                if(letras_unicas.indexOf(letra)<0)
                letras_unicas.push(letra);
                }
            });  
          });
          p3_res+='Palabra:' + palabra + '=' + letras_unicas.length + '\n';
        });
         document.querySelector('#p3-output').textContent =p3_res;

    }



   
