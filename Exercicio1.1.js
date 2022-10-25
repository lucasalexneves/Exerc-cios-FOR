var nome
var frase = ""

for (var contador = 0; contador < 4; contador++) {
    nome = prompt("Digite um nome")
    frase = frase + " " + nome
}
console.log(frase)