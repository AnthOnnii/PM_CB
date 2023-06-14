var meuFormulario = document.getElementById("meu-formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  somar();
});
function capturarPrimeiroNumeroInteiro() {
  const primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);
  return primeiro_numero_inteiro;
}

function capturarSegundoNumeroInteiro() {
 const segundo_numero_inteiro = Number(document.getElementById("segundo_numero_inteiro").value); 
 return segundo_numero_inteiro;
}

function capturarTerceiroNumeroInteiro() {
  const terceiro_numero_inteiro = Number(document.getElementById("terceiro_numero_inteiro").value); 
  return terceiro_numero_inteiro;
 }
