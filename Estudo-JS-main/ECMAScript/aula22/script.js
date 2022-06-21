var num = document.getElementById('n1')
var lista = document.getElementById('valores')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) !=  -1){
        return true
    }else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores  )) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encotrando na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('A lista deve conter pelo menos um valor!')
    }
    else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A media de todos o valores é ${media}.</p>`
    }
}

function limpar(){
    lista.innerHTML= ''
    res.innerHTML= ''
    valores.length = 0
}