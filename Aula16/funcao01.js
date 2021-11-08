function parimpar(n){
    if(n%2==0){return 'par'}
    else
    {return 'impar'}
}
var x = 10
var res = parimpar(x) //x é o parâmetro
console.log(`O número ${x} é ${res}!`)
