// 1 - ira parar no 12
/*2*/-function inverterString(str) {
    var novaString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

// Exemplo de uso:
var minhaString = "Olá, mundo!";
var stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);


/*3- a) 9
b)128 e o dobro do numero anterior
c)40
d) 36 quadrado dos pares
e) 13
f)
*/
/*4- ia ligava um interruptor e aguardava dps apagava e acendia o outro e ia para sala logo se alguma tiver acessa e do interruptor que eu deixei aceso e se nao vejo se a outra lampada esta quente se estiver e do primeiro q acendi se nao for nenhum e o ultimo q sobrou
*/
5- function inverterString(texto) {
    // Convertendo a string em um array de caracteres, invertendo e juntando de volta em uma string
    return texto.split('').reverse().join('');
}

// Exemplo de uso
let texto = "Exemplo de string a ser invertida.";
let textoInvertido = inverterString(texto);

console.log("String original:", texto);
console.log("String invertida:", textoInvertido);
