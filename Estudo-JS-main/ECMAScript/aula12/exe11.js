// Verificando se a pessoa vota
var idade = 6
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18  || idade >= 67) {
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatorio')
}