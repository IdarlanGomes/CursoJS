function soma (n1=0, n2=0){ //se não for definido o valor de n1 ou n2 eles receberão o valor 0
    //se não definimos o valor default deles será retornado NaN
    return n1 + n2
}
n1 = 2
n2 = 4

console.log(soma(10, 10)) // retorna a soma de 10 + 10 = 20
console.log(soma(n1, n2)) // retorna a soma de n1(2) + n2(4) = 6
console.log(soma(5))