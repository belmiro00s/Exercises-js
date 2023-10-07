
//Aqui está um exemplo de percurso em vetor:
//let num = [2,1,0,5,6,7]

for(let n = 0; n <= num.length ; n++){
    console.log(` A posição ${n} tem valor de ${num[n]} `)
}

//Aqui está um exemplo de percurso em vetor mais simples

for(let n in num){
    console.log(` A posição ${n} tem valor de ${num[n]} `)
}



let num = [2,0,5,6,7]
num.push(1) // inserindo o valor 1 na ultima posição do array
num.sort()  // organizar os valores em ordem decrescente
console.log (num) 
console.log(`o primeiro valor de num é ${[0]}`)  



let number = [ 1,3,6,9,8]

let pos = number.indexOf(2) // caso em que o indexOf não acha o valor 2 e retorna -1
console.log(pos)


let numbers = [ 1,2,3,6,9,8]

let post = numbers.indexOf(2) // caso em que o indexOf  acha o valor 2 e retorna a posição
console.log(`A posição ${post}`)