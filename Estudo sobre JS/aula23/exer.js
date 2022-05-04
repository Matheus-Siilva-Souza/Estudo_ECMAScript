//Orientação a objeto
var amigo = {
    nome:'Matheus',
    sexo:'Maculino',
    peso: 85.5, 
    engordar(p){  
        this.peso += p
}}
amigo.engordar(50)
console.log(`O ${amigo.nome} é do sexo ${amigo.sexo} e pesa ${amigo.peso} kilos`)