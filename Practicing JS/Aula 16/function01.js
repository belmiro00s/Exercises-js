// Criando a função chamada parimpar que recebe  o parametro (n)

function parimpar(n) {
  if (n % 2 == 0) {
    // Aqui calcula se o resto da divisão por 2 é igual a zero
    return "par!"; //se for, retorna zero
  } else {
    return "impar"; // se não, retorna impar
  }
}

//Chamando a função parimpar que recebe como parametro 4
let res = parimpar(4);
console.log(res); // aqui retorna "par"

//Criando função simples de soma








function soma(a, b) {
  return a + b;
} 

let resul = soma(2,2)


console.log(resul);






function fatorial (n){
  let fat = 1

  for(let c = n; c > 1; c--){
      fat  *= c
  }
  return fat 
}
console.log(fatorial(5))