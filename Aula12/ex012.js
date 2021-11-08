/*
var hora = 18
console.log (`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log("Bom dia!")
}else if (hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
*/
var agora = new Date()
var hora = agora.getHours ()
var minuto = agora.getMinutes ()
var hrs = hora + ":" + minuto
console.log (`Agora são exatamente ${hrs}.`)
if (hora < 12){
    console.log("Bom dia!")
}else if (hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
