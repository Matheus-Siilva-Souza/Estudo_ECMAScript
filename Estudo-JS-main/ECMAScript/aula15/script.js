function verificar() {
    var dataatual = new Date()
    var anoatual = dataatual.getFullYear()
    var ano = window.document.getElementById('ano')
    var res = window.document.querySelector('div#res')
    if (ano.value.length == 0 || Number(ano.value) > anoatual) {
        window.alert('[ERRO] O ano inserido não e valido!')
    } else {
        var sex = document.getElementsByName('radiosex')
        var idade = anoatual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')//declarou uma img na pagina
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {//checando qual radio esta marcado
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/criacamulher.jpg')
            } else if(idade > 10 && idade <= 21){
                img.setAttribute('src', 'img/jovemmulher.jpg')
            }else if(idade > 21 && idade <= 50){
                img.setAttribute('src', 'img/mulher.jpg')
            }else if(idade > 50 && idade <= 65){
                img.setAttribute('src', 'img/mulher50.jpg')
            }else if(idade > 65){
                img.setAttribute('src', 'img/idosamulher.jpg')
            }
        } else if(sex[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/criancahomem.jpg')
            } else if(idade > 10 && idade <= 21){
                img.setAttribute('src', 'img/jovemhomem.jpg')
            }else if(idade > 21 && idade <= 50){
                img.setAttribute('src', 'img/homem.jpg')
            }else if(idade > 50 && idade <= 65){
                img.setAttribute('src', 'img/homem50.jpg')
            }else if(idade > 65){
                img.setAttribute('src', 'img/idosohomem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}