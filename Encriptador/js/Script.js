function encriptar() {
    var frase = document.getElementById("txtEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    document.getElementById("txtDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
}
function desencriptar() {
    var frase = document.getElementById("txtEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("txtDesencriptado").innerHTML = textoEncriptado;
}
function copiar() {
    var contenido = document.querySelector("#txtDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
