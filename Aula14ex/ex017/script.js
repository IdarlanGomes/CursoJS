function multiplicar(){
    var num = document.getElementById('num')
    
    if(num.value.length == 0){
       alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
    }
    var res = document.getElementById('res')
    var result = document.getElementById('result')
    //do: teste lógico é feito no final do código
    var c = 0
    result.innerHTML = ""
        do {
        c*n
        var item = document.createElement('option')
       item.text = `${n} X ${c} = ${c*n}`
       item.value = `result${c}`
       result.appendChild(item)
        c++ 
        
    
    }while (c <= 10) 
}