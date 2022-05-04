var valores = [3, 1, 2 ,6 ,8]
valores[5] = 7
valores.push(5)
valores.sort()
console.log(`O vetor tem ${valores.length} elementos!`)
console.log(`O indice  que esta na posição 5 é ${valores[5]}`)
console.log(`Nosso vetor e o ${valores}`)

// Usando as estruturas de repetição

 v1 = [9, 1, 2, 4, 2, 1, 5, 8]
v1.sort()
var i = 0 
console.log('O voter dinamico é')
for(i = 0; i < v1.length; i++ ){
    console.log(`O vetor na posição ${i} tem o valor ${v1[i]}`)  
}

// for in
for (i in v1) {
    console.log(`O vetor na posição ${i} tem o valor ${v1[i]}`)  
}
var pos = v1.indexOf(5)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
}else {
    console.log(`A posição desse valor é ${pos}`)
}