/*Fatorial de 5:
5! = 5 x 4 x 3 x 2 x 1*/

//TRADICIONAL:

function fatorial (n){
    let fat = 1
    for(let c =n; c >1; c--){ //para c = n e enquanto c for maior que 1, c perde 1
        fat *= c // mesma coisa que fat = fat * c
    } 
    return fat
} 

var x = 3
console.log(fatorial(x))