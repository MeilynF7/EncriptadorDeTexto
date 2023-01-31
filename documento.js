var botonEncriptar=document.querySelector(".boton-encrip");
var botonDesencriptar=document.querySelector(".boton-desencrip");
var muneco=document.querySelector(".muneco");
var h3=document.querySelector(".texto-h3");
var parrafo=document.querySelector(".parrafo");
var resultado= document.querySelector(".escrito");
var botonLimpiar=document.querySelector(".boton-limpiar");
var botonCopiar=document.querySelector(".boton-copiar");


botonEncriptar.onclick= encriptar;
botonDesencriptar.onclick=desencriptar;
botonLimpiar.onclick=limpiar;
botonCopiar.onclick=copiar;



function encriptar(){
    tapar();
    var area=recuperarTexto();
    resultado.textContent=encriptacion(area);
}
function desencriptar(){
    tapar();
    var area=recuperarTexto();
    resultado.textContent=desencriptacion(area);
}

function recuperarTexto(){
    var area=document.querySelector(".area");
    return area.value;
}

function tapar(){
   muneco.classList.add("ocultar");
   h3.classList.add("ocultar");
   parrafo.classList.add("ocultar");
}

function encriptacion(mensaje){
    var texto= mensaje;
    var textoFinal=" ";

    for(var i=0; i<texto.length; i++){
        if(texto[i] == "a"){
            textoFinal=textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal=textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal=textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal=textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal=textoFinal + "ufat";
        } 
        else{
            textoFinal=textoFinal+texto[i];
        }
    }
    return textoFinal;
}

function desencriptacion(mensaje){
    var texto= mensaje;
    var textoFinal="";

    for(var i=0; i<texto.length; i++){
        if(texto[i] == "a"){
            textoFinal=textoFinal + "a";
            i=i+1;
        }
        else if(texto[i] == "e"){
            textoFinal=textoFinal + "e";
            i=i+4;
        }
        else if(texto[i] == "i"){
            textoFinal=textoFinal + "i";
            i=i+3;
        }
        else if(texto[i] == "o"){
            textoFinal=textoFinal + "o";
            i=i+3;
        }
        else if(texto[i] == "u"){
            textoFinal=textoFinal + "u";
            i=i+3;
        } 
        else{
            textoFinal=textoFinal+texto[i];
        }
    }
    return textoFinal;
}

function limpiar(){
    var area=document.querySelector(".area");
    area.value=""; 
}

function copiar(){
    var aux = document.createElement("input");
  aux.setAttribute("value", resultado.textContent.trim());
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

