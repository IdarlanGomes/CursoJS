function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() + ":" + data.getMinutes ()    
    //var hora = 10
    msg.innerHTML = `Agora são ${hora}.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/manha.png'
        msg.innerHTML = `Agora são ${hora}. Bom dia!`
    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = "orange"
        msg.innerHTML = `Agora são ${hora}. Boa tarde!`
    }else{
        //Boa noite
        img.src = 'img/noite.png'
        document.body.style.background = 'black'
        msg.innerHTML = `Agora são ${hora}. Boa noite!`
    }
    setTimeout("carregar()",1000) //para atualizar a hora automaticamente, sem recarregar a página
}

