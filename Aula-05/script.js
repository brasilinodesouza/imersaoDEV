function adicionarFilme(){
var filmeFavorito = document.getElementById("filme").value;

if (filmeFavorito.endsWith(".jpg")){
    var elementoFilmeFavorito = "<img src= " +filmeFavorito+ " >";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
else{
    alert("Coloque uma foto válida!")
}

document.getElementById("filme").value = "";
}