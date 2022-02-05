/*!
* Start Bootstrap - Bare v5.0.3 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var btn_encriptar = document.getElementById("btn-encriptar");
var btn_desencriptar = document.getElementById("btn-desencriptar");
let resultado = document.getElementById("msg");

function obtenerCadenaLimpia(cadena){
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
 
    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }   
 
    // Lo queremos devolver limpio en minusculas
    cadena = cadena.toLowerCase();
 
    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    cadena = cadena.replace(/á/gi,"a");
    cadena = cadena.replace(/é/gi,"e");
    cadena = cadena.replace(/í/gi,"i");
    cadena = cadena.replace(/ó/gi,"o");
    cadena = cadena.replace(/ú/gi,"u");
    cadena = cadena.replace(/â/gi,"a");
    cadena = cadena.replace(/ê/gi,"e");
    cadena = cadena.replace(/î/gi,"i");
    cadena = cadena.replace(/ô/gi,"o");
    cadena = cadena.replace(/û/gi,"u");
    cadena = cadena.replace(/à/gi,"a");
    cadena = cadena.replace(/è/gi,"e");
    cadena = cadena.replace(/ì/gi,"i");
    cadena = cadena.replace(/ò/gi,"o");
    cadena = cadena.replace(/ù/gi,"u");
    cadena = cadena.replace(/ä/gi,"a");
    cadena = cadena.replace(/ë/gi,"e");
    cadena = cadena.replace(/ï/gi,"i");
    cadena = cadena.replace(/ö/gi,"o");
    cadena = cadena.replace(/ü/gi,"u");
    return cadena;
 }

function encriptar(){
    let texto_original = obtenerCadenaLimpia(document.getElementById("input-texto").value);
    btn_encriptar = addEventListener("click", function(event){
        event.preventDefault();
        let textoCifrado = texto_original.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi, "ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
        resultado.value = textoCifrado;
    });
}

function desencriptar(){
    let texto_encriptado = obtenerCadenaLimpia(document.getElementById("input-texto").value);
    btn_desencriptar = addEventListener("click", function(event){
        event.preventDefault();
        let textoDescifrado = texto_encriptado.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi, "a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
        resultado.value = textoDescifrado;
    });
}

function copiar(){
    var copiarTexto = document.querySelector("#msg");
    copiarTexto.select();
    document.execCommand("copy");
}

btn_encriptar.onclick=encriptar;
btn_desencriptar.onclick=desencriptar;
document.querySelector("#btn-copy").addEventListener("click",copiar);
