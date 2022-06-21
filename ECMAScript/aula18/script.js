function contar() {
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var contador = window.document.getElementById('contador')
    var res = document.getElementById('res')
    if (contador.value.length <= 0) {
        window.alert('Passo invalido!')
    }
    if(ini.value.length == 0 || fim.value.length == 0 || contador.value.length == 0) {
        alert('ERRO! Falta dados!')
        res.innerHTML = 'Preparando contagem!'
    }else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(contador.value)
        if (i < f) {
            for( var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else {
            for(c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F378}`
    }
}