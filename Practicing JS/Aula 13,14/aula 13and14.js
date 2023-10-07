

console.log("Script carregado")
let inicio = document.querySelector("input#begin22")
let fim = document.querySelector("input#end22")
var passo = document.querySelector("input#step22")
var result = document.querySelector("div#res")

var button = document.querySelector("button#button22")
button.addEventListener("click", buttoninput)

function buttoninput() {
  if( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0  ){  // se os campos não tiverem preenhchidos, mostra mensagem de alerta.
    window.alert('Preencha os campos antes')
  } else {                                                        // se não continua o script
    let inicioValue = parseFloat(inicio.value)     
    var fimValue = parseFloat(fim.value)                 //tratando os valores como "number"
    var passoValue = parseFloat(passo.value)
  

  if(inicioValue < fimValue){                   // se o valor inicial for menor que o valor final, roda o loop iterando positivamente
    let count = inicioValue
  
    while (count <= fimValue) {
      console.log(count)
      result.innerHTML = count
      count += passoValue         // variavel count é iterada positivamente "+" com o valor da variavel passoValue
    }
  }else{
    let count = inicioValue     // se nao roda o loop iterando negativamente 

    while (count >= fimValue){
      console.log(count)
      result.innerHTML = count
      count -= passoValue  //(usando - para iterar negativamente)
    }
  }

  }

  



}