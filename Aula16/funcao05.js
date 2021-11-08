/*Função recursiva:

5! = 5 x 4 x 3 x 2 x 1 >> fatorial de 5
5! = 5 x 4! >> fatorial de 5 é 5 x o fatorial de 4

n! = n (n-1)! >> o fatorial de um número é igual a esse número vezes
o fatorial dele mesmo menos 1
1! = 1 >> o fatorial de 1 é igual a 1


*/

//RECURSIVIDADE:

function fatorial(n){
    if(n == 1){return 1
    }else{
        return n * fatorial(n-1)
    }
} 

var x = 5
console.log(`O fatorial de ${x} é igual a: ${fatorial(x)}!`)