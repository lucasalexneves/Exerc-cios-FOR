var num01 = parseInt(prompt("Digite o primeiro numero"))
var num02 = parseInt(prompt("Digite o segundo numero"))
var par = 0
var impar = 0

for (var contador = num01 + 1; contador < num02; contador++) {
    if(contador % 2 == 0){
        par++
    }else{
        impar++
    }
}

console.log("Quantidade de números par no interválo: ", par)
console.log("Quantidade de números ímpar no interválo: ", impar)
