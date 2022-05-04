function parimp(n) {
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}
var res = parimp(1)
console.log(`O número é ${res}`)
