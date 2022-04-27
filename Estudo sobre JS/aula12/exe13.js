var agora = new Date()
var diaSem = agora.getDay()
/*
Como funciona os dias no JS
0 = Domingo
1 = Segunda Feira
2 = Terça feira
3 = Quarta Feria
4 = Quinta Feira
5 = Sexta Feira
6 = Sábado
*/
switch (diaSem) {
    case 0:
        console.log('Hoje e Domingo')
            break;
    case 1:
        console.log('Hoje e Segunda Feira')
            break;
    case 2:
        console.log('Hoje e Terça Feira')
        break;
    case 3:
        console.log('Hoje e Quarta Feira')
        break;
    case 4:
        console.log('Hoje e Quinta Feira')
        break;
    case 5:
        console.log('Hoje e Sexta Feira')
        break;
    case 6:
        console.log('Hoje e Sabado')
        break;
    default:
        console.log('ERRO, Dia invalido')
        break;
}