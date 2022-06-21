function calcular() {
    var txtv1 = document.getElementById('v1')
    var sel = document.getElementById('selec')
    
    if(txtv1.value.length == 0){
        window.alert('Por favor digite um número!')
    }else {
        var n = Number(txtv1.value)
        sel.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            var elem = document.createElement('option')
            elem.text = `${n} x ${c} = ${n*c}`
            elem.value = `vl${c}`
            sel.appendChild(elem)
        }   
    }
}