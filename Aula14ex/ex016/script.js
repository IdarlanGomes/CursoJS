/*
var i = 1
var f = 10
var p = 1
while (i<f-p){
    i = i + p
    console.log(i)
}
*/
function contar(){
    var i = document.getElementById('ini')
    var f = document.getElementById('fim')
    var p = document.getElementById('pas')
    var res = document.getElementById('res')
    
    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert ('ERRO: Faltam dados')
        
    }else{
        res.innerHTML = 'Contando: <br>'
        if(p.value <= 0){
            alert('Passo inválido! Considerando Passo = 1')
            p.value = 1
        }
    }
    if (Number(ini.value)<Number(f.value)){
        //contagem progressiva
    for (var c = Number(ini.value); c <= Number(f.value); c = c + Number(p.value)){ //.value pega o valor digitado pelo usuário 
    res.innerHTML += ` &#128073 ${c} ` // o += mostra a contagem passo a passo, se deixar só =, só mostra o último passo
    }
    
} else {
    //contagem regressiva
    for (var c = Number(ini.value); c >= Number(f.value); c = c - Number(p.value)){
        res.innerHTML += `&#128073 ${c}`
} 

}res.innerHTML += `&#128681` //fora da função para aparecer no final da contagem
}
