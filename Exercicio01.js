var numero
var maiornumero = 0

for (var contador = 0; contador < 5; contador++) {
    numero = parseInt(prompt("Digite um número"))
    
    if(numero >= maiornumero){
        maiornumero = numero
    }
}
console.log("O maior número é: ", maiornumero)