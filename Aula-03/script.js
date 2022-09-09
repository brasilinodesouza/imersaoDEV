
    //var numeroSecreto = parseInt(Math.random() * 11 );
    var numeroSecreto = 4;

function Chutar(){
    
    var resultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value); 

    if ( chute == numeroSecreto){
        resultado.innerHTML = "Acertou !!!";
    }else if(chute > 10 || chute < 0){
        resultado.innerHTML = "Digite um valor de 0 a 10";
    }else {
        resultado.innerHTML = "Errou! ";
    }
}
