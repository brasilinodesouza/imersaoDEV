
function converter(){
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");
    
    if( celsius.value != "")
    {   
        var celsiusConvertido = (( celsius.value * 9/5 ) + 32 );
        alert("Temperatura em Fahrenheit: "+celsiusConvertido+"°F");
    }
    else if (fahrenheit.value != "")
    {   
        var fahrenheitConvertido = ( fahrenheit.value - 32 ) * 5/9
        alert("Temperatura em Celsius: "+fahrenheitConvertido+"°C");
 
    }
 
}

