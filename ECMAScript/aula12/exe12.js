var agr = new Date()
var hora = agr.getHours()
console.log(`Agora são exatamente ${hora}`)
if (hora < 12) {
    console.log('Bom dia, Matheus!')
}else if(hora < 18) {
    console.log('Boa tarde, Matheus!')
}else if (hora >= 18 && hora <= 24){
    console.log('Boa noite, Matheus!')
}