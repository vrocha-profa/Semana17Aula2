var texto = "Código js apenas para testar o conflito na matéria de versionamento!";
var atraso = 200;
var textoElemento = document.querySelector(".titulo-destaque");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}
escreverTexto();
console.log('Feature UI loaded');
console.log('Backend logic initialized');