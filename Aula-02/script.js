
function ConverterDolar(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmDolar = valorEmDolarNumerico / 5 ;
    var elementoValorConvertido = document.getElementById("valorConvertidoEmDolar");
    var valorConvertido = "O valor convertido em dolar é $" +valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEuro(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmEuro = valorEmDolarNumerico / 5.13 ;
    var elementoValorConvertido = document.getElementById("valorConvertidoEmEuro");
    var valorConvertido = "O valor convertido em euro €" +valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
}