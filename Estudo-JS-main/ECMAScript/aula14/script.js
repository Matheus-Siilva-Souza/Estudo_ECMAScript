function carregar() {
    var nome = String(window.prompt('Digite seu nome:'))
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var b = window.document.getElementById('b')
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.jpg'
        b.innerHTML= `Bom dia, ${nome}`
        document.body.style.backgroundColor = 'rgb(217 196 175)'
    }else if(hora >= 12 && hora < 18){
        img.src = 'img/tarde.jpg'
        b.innerHTML = `Boa tarde, ${nome}`
        document.body.style.backgroundColor = 'rgb(251 142 5)'
    }else {
        img.src = 'img/noite.jpg'
        b.innerHTML = `Boa noite, ${nome}`
        document.body.style.backgroundColor = 'rgb(11 11 30)'
    }

}