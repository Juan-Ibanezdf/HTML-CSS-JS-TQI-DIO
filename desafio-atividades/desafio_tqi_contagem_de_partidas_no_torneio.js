// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split('\n')
// let lines = 14 - para testar com node, não esquecer de comentar a linha de cima.
var numberOfMatches = parseInt(lines)

let n = parseInt(lines.shift())
// let n = parseInt(lines) - para testar com node, não esquecer de comentar a linha de cima.
let totalMatches = 0

while (n > 1) {
  if (numberOfMatches % 2 == 0) {
    numberOfMatches = numberOfMatches / 2
    totalMatches = totalMatches + numberOfMatches
  } else {
    numberOfMatches = (numberOfMatches - 1) / 2
    totalMatches = totalMatches + numberOfMatches + 1
  }
  n = numberOfMatches
}
print(totalMatches)
// console.log(totalMatches) - para testar com node, não esquecer de comentar a linha de cima.

//Escreva o seu código nos espaços em branco
